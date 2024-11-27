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
  state.caretPosition++;
}

function parseWrapper(state: TokenizerState) {
  const wrapper = state.decisionBuffer;
  const range: Range = [state.caretPosition, state.caretPosition + 1];
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
  state.caretPosition++;
}

function parseBare(state: TokenizerState) {
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.AttributeValueBare;
  state.caretPosition++;
}

function parseTagEnd(state: TokenizerState) {
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}
