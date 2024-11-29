import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { isWhitespace } from "../../utils";
import type { TokenizerState, Range } from "../../types";
import { CharsBuffer } from "../chars-buffer";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  const value = chars.value();
  if (value === '"' || value === "'") {
    return parseWrapper(state);
  }

  if (value === ">" || value === "/") {
    return parseTagEnd(state);
  }

  if (!isWhitespace(value)) {
    return parseBare(state);
  }

  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseWrapper(state: TokenizerState) {
  const wrapper = state.decisionBuffer.value();
  const range: Range = [state.sourceCode.index(), state.sourceCode.index() + 1];
  state.tokens.push({
    type: TokenTypes.AttributeValueWrapperStart,
    value: wrapper,
    range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.AttributeValueWrapped;
  state.contextParams[TokenizerContextTypes.AttributeValueWrapped] = {
    wrapper: wrapper,
  };
  state.sourceCode.next();
}

function parseBare(state: TokenizerState) {
  state.accumulatedContent.replace(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.AttributeValueBare;
  state.sourceCode.next();
}

function parseTagEnd(state: TokenizerState) {
  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Attributes;
}
