import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { AnyToken, Range, TokenizerState } from "../../types";

const COMMENT_START = "<!--";
const OPEN_TAG_START_PATTERN = /^<\w/;

export function parse(chars: string, state: TokenizerState, charIndex: number) {
  const range = state.consumeTemplateRangeAt(charIndex);
  if (range) {
    return parseTemplate(state, range);
  }

  if (OPEN_TAG_START_PATTERN.test(chars)) {
    return parseOpeningCornerBraceWithText(state);
  }

  if (chars === "</") {
    return parseOpeningCornerBraceWithSlash(state);
  }

  if (chars === "<" || chars === "<!" || chars === "<!-") {
    state.caretPosition++;
    return;
  }

  if (chars === COMMENT_START) {
    return parseCommentOpen(state);
  }

  if (isIncompleteDoctype(chars)) {
    state.caretPosition++;
    return;
  }

  if (chars.toUpperCase() === "<!DOCTYPE") {
    return parseDoctypeOpen(state);
  }
  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

export function handleContentEnd(state: TokenizerState) {
  const textContent = state.accumulatedContent + state.decisionBuffer;

  if (textContent.length !== 0) {
    const position = calculateTokenPosition(state, { keepBuffer: false });

    state.tokens.push({
      type: TokenTypes.Text,
      value: textContent,
      range: position.range,
      loc: position.loc,
      isTemplate: false,
    });
  }
}

function generateTextToken(state: TokenizerState): AnyToken {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  return {
    type: TokenTypes.Text,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
    isTemplate: false,
  };
}

function parseOpeningCornerBraceWithText(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.OpenTagStart;
  state.caretPosition++;
}

function parseOpeningCornerBraceWithSlash(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.CloseTag;
  state.caretPosition++;
}

function isIncompleteDoctype(chars: string) {
  const charsUpperCase = chars.toUpperCase();

  return (
    charsUpperCase === "<!" ||
    charsUpperCase === "<!D" ||
    charsUpperCase === "<!DO" ||
    charsUpperCase === "<!DOC" ||
    charsUpperCase === "<!DOCT" ||
    charsUpperCase === "<!DOCTY" ||
    charsUpperCase === "<!DOCTYP"
  );
}

function parseCommentOpen(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  const range: Range = [
    state.caretPosition - (COMMENT_START.length - 1),
    state.caretPosition + 1,
  ];

  const loc = calculateTokenLocation(state.source, range);

  state.tokens.push({
    type: TokenTypes.CommentOpen,
    value: state.decisionBuffer,
    range: range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.CommentContent;
  state.caretPosition++;
}

function parseDoctypeOpen(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeOpen;
  state.caretPosition++;
}

function parseTemplate(state: TokenizerState, [start, end]: Range) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  const value = state.source.slice(start, end);
  const range: Range = [start, end];

  state.tokens.push({
    type: TokenTypes.Text,
    value,
    range,
    loc: calculateTokenLocation(state.source, range),
    isTemplate: true,
  });
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.caretPosition = end;
}
