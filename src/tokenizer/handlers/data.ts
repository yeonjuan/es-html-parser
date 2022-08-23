import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
import { Token, TokenizerState } from "../../types";

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
    const range = calculateTokenCharactersRange(state, { keepBuffer: false });

    tokens.push({
      type: TokenTypes.Text,
      content: textContent,
      startPosition: range.startPosition,
      endPosition: range.endPosition,
    });
  }
}

function generateTextToken(state: TokenizerState): Token {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });
  return {
    type: TokenTypes.Text,
    content: state.accumulatedContent,
    startPosition: range.startPosition,
    endPosition: range.endPosition,
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

  const commentStartRange = {
    startPosition: state.caretPosition - (COMMENT_START.length - 1),
    endPosition: state.caretPosition,
  };

  tokens.push({
    type: TokenTypes.CommentStart,
    content: state.decisionBuffer,
    startPosition: commentStartRange.startPosition,
    endPosition: commentStartRange.endPosition,
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
