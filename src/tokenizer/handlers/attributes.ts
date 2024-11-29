import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import type { TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  const value = chars.value();
  if (value === ">" || value === "/") {
    return parseTagEnd(state);
  }

  if (value === "=") {
    return parseEqual(state);
  }

  if (!isWhitespace(value)) {
    return parseNoneWhitespace(chars, state);
  }

  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseTagEnd(state: TokenizerState) {
  const tagName =
    state.contextParams[TokenizerContextTypes.Attributes]?.tagName;

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.OpenTagEnd;
  state.contextParams[TokenizerContextTypes.OpenTagEnd] = { tagName: tagName! };
  state.contextParams[TokenizerContextTypes.Attributes] = undefined;
}

function parseNoneWhitespace(chars: CharsBuffer, state: TokenizerState) {
  state.accumulatedContent.replace(state.decisionBuffer);
  state.currentContext = TokenizerContextTypes.AttributeKey;
  state.sourceCode.next();
  state.decisionBuffer.clear();
}

function parseEqual(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  state.tokens.push({
    type: TokenTypes.AttributeAssignment,
    value: state.decisionBuffer.value(),
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.AttributeValue;
  state.sourceCode.next();
}
