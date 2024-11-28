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
  state.pointer.next();
}

function parseWrapper(state: TokenizerState) {
  const wrapper = state.decisionBuffer;
  const range: Range = [state.pointer.index, state.pointer.index + 1];
  state.tokens.push({
    type: TokenTypes.AttributeValueWrapperStart,
    value: wrapper.value(),
    range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.AttributeValueWrapped;
  state.contextParams[TokenizerContextTypes.AttributeValueWrapped] = {
    wrapper: wrapper.value(),
  };
  state.pointer.next();
}

function parseBare(state: TokenizerState) {
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.AttributeValueBare;
  state.pointer.next();
}

function parseTagEnd(state: TokenizerState) {
  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Attributes;
}
