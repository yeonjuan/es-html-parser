import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { Range, AnyToken, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

const COMMENT_START = "<!--";
const OPEN_TAG_START_PATTERN = /^<\w/;

export function parse(chars: CharsBuffer, state: TokenizerState) {
  const value = chars.value();
  if (OPEN_TAG_START_PATTERN.test(value)) {
    return parseOpeningCornerBraceWithText(state);
  }

  if (value === "</") {
    return parseOpeningCornerBraceWithSlash(state);
  }

  if (value === "<" || value === "<!" || value === "<!-") {
    state.pointer.next();
    return;
  }

  if (value === COMMENT_START) {
    return parseCommentOpen(state);
  }

  if (isIncompleteDoctype(value)) {
    state.pointer.next();
    return;
  }

  if (value.toUpperCase() === "<!DOCTYPE") {
    return parseDoctypeOpen(state);
  }
  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.pointer.next();
}

export function handleContentEnd(state: TokenizerState) {
  const textContent =
    state.accumulatedContent.value() + state.decisionBuffer.value();

  if (textContent.length !== 0) {
    const position = calculateTokenPosition(state, { keepBuffer: false });

    state.tokens.push({
      type: TokenTypes.Text,
      value: textContent,
      range: position.range,
      loc: position.loc,
      templates: [],
    });
  }
}

function generateTextToken(state: TokenizerState): AnyToken {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  return {
    type: TokenTypes.Text,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
    templates: [],
  };
}

function parseOpeningCornerBraceWithText(state: TokenizerState) {
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.OpenTagStart;
  state.pointer.next();
}

function parseOpeningCornerBraceWithSlash(state: TokenizerState) {
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
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
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  const range: Range = [
    state.pointer.index - (COMMENT_START.length - 1),
    state.pointer.index + 1,
  ];

  state.tokens.push({
    type: TokenTypes.CommentOpen,
    value: state.decisionBuffer.value(),
    range: range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.CommentContent;
  state.pointer.next();
}

function parseDoctypeOpen(state: TokenizerState) {
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.DoctypeOpen;
  state.pointer.next();
}
