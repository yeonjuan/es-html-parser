import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { Range, AnyToken, TokenizerState } from "../../types";

const COMMENT_START = "<!--";
const OPEN_TAG_START_PATTERN = /^<\w/;

export function parse(chars: string, state: TokenizerState) {
  if (OPEN_TAG_START_PATTERN.test(chars)) {
    return parseOpeningCornerBraceWithText(state);
  }

  if (chars === "</") {
    return parseOpeningCornerBraceWithSlash(state);
  }

  if (chars === "<" || chars === "<!" || chars === "<!-") {
    state.pointer.next();
    return;
  }

  if (chars === COMMENT_START) {
    return parseCommentOpen(state);
  }

  if (isIncompleteDoctype(chars)) {
    state.pointer.next();
    return;
  }

  if (chars.toUpperCase() === "<!DOCTYPE") {
    return parseDoctypeOpen(state);
  }
  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.pointer.next();
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
  };
}

function parseOpeningCornerBraceWithText(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.OpenTagStart;
  state.pointer.next();
}

function parseOpeningCornerBraceWithSlash(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.CloseTag;
  state.pointer.next();
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
    state.pointer.index - (COMMENT_START.length - 1),
    state.pointer.index + 1,
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
  state.pointer.next();
}

function parseDoctypeOpen(state: TokenizerState) {
  if (state.accumulatedContent.length !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeOpen;
  state.pointer.next();
}
