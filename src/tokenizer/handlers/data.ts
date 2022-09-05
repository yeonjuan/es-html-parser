import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { Range, Token, TokenizerState } from "../../types";

const COMMENT_START = "<!--";
const OPEN_TAG_START_PATTERN = /^<\w/;

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (OPEN_TAG_START_PATTERN.test(chars)) {
    return parseOpeningCornerBraceWithText(state, tokens);
  }

  if (chars === "</") {
    return parseOpeningCornerBraceWithSlash(state, tokens);
  }

  if (chars === "<" || chars === "<!" || chars === "<!-") {
    state.caretPosition++;
    return;
  }

  if (chars === COMMENT_START) {
    return parseCommentStart(state, tokens);
  }

  if (isIncompleteDoctype(chars)) {
    state.caretPosition++;
    return;
  }

  if (chars.toUpperCase() === "<!DOCTYPE") {
    return parseDoctypeStart(state, tokens);
  }
  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

export function handleContentEnd(state: TokenizerState, tokens: Token[]) {
  const textContent = state.accumulatedContent + state.decisionBuffer;

  if (textContent.length !== 0) {
    const position = calculateTokenPosition(state, { keepBuffer: false });

    tokens.push({
      type: TokenTypes.Text,
      value: textContent,
      range: position.range,
      loc: position.loc,
    });
  }
}

function generateTextToken(state: TokenizerState): Token {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  return {
    type: TokenTypes.Text,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  };
}

function parseOpeningCornerBraceWithText(
  state: TokenizerState,
  tokens: Token[]
) {
  if (state.accumulatedContent.length !== 0) {
    tokens.push(generateTextToken(state));
  }
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.OpenTagStart;
  state.caretPosition++;
}

function parseOpeningCornerBraceWithSlash(
  state: TokenizerState,
  tokens: Token[]
) {
  if (state.accumulatedContent.length !== 0) {
    tokens.push(generateTextToken(state));
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

function parseCommentStart(state: TokenizerState, tokens: Token[]) {
  if (state.accumulatedContent.length !== 0) {
    tokens.push(generateTextToken(state));
  }

  const range: Range = [
    state.caretPosition - (COMMENT_START.length - 1),
    state.caretPosition + 1,
  ];

  const loc = calculateTokenLocation(state.source, range);

  tokens.push({
    type: TokenTypes.CommentStart,
    value: state.decisionBuffer,
    range: range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.CommentContent;
  state.caretPosition++;
}

function parseDoctypeStart(state: TokenizerState, tokens: Token[]) {
  if (state.accumulatedContent.length !== 0) {
    tokens.push(generateTextToken(state));
  }

  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeStart;
  state.caretPosition++;
}
