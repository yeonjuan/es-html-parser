import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, isWhitespace } from "../../utils";
import type { TokenizerState, Range } from "../../types";

export function parse(chars: string, state: TokenizerState) {
  if (chars === '"' || chars === "'") {
    return parseWrapper(state);
  }

  if (chars === ">" || chars === "/") {
    return parseTagEnd(state);
  }

  if (!isWhitespace(chars)) {
    return parseBare(state);
  }

  state.decisionBuffer = "";
  state.pointer.next();
}

function parseWrapper(state: TokenizerState) {
  const wrapper = state.decisionBuffer;
  const range: Range = [state.pointer.index, state.pointer.index + 1];
  const loc = calculateTokenLocation(state.source, range);
  state.tokens.push({
    type: TokenTypes.AttributeValueWrapperStart,
    value: wrapper,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.AttributeValueWrapped;
  state.contextParams[TokenizerContextTypes.AttributeValueWrapped] = {
    wrapper,
  };
  state.pointer.next();
}

function parseBare(state: TokenizerState) {
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.AttributeValueBare;
  state.pointer.next();
}

function parseTagEnd(state: TokenizerState) {
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}
