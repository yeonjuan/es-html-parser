import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { Range, AnyToken, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";
import { createTemplates } from "../../utils/create-templates";

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
    state.sourceCode.next();
    return;
  }

  if (value === COMMENT_START) {
    return parseCommentOpen(state);
  }

  if (isIncompleteDoctype(value)) {
    state.sourceCode.next();
    return;
  }

  if (value.toUpperCase() === "<!DOCTYPE") {
    return parseDoctypeOpen(state);
  }
  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
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
      templates: createTemplates(state, TokenTypes.Text),
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
    templates: createTemplates(state, TokenTypes.Text),
  };
}

function parseOpeningCornerBraceWithText(state: TokenizerState) {
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.OpenTagStart;
  state.sourceCode.next();
}

function parseOpeningCornerBraceWithSlash(state: TokenizerState) {
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }
  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.CloseTag;
  state.sourceCode.next();
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
    state.sourceCode.index() - (COMMENT_START.length - 1),
    state.sourceCode.index() + 1,
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
  state.sourceCode.next();
}

function parseDoctypeOpen(state: TokenizerState) {
  if (state.accumulatedContent.length() !== 0) {
    state.tokens.push(generateTextToken(state));
  }

  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.DoctypeOpen;
  state.sourceCode.next();
}
