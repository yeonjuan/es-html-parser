import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, isWhitespace } from "../../utils";
import { TokenizerState, Token, Range } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === '"' || chars === "'") {
    return parseWrapper(state, tokens);
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

function parseWrapper(state: TokenizerState, tokens: Token[]) {
  const wrapper = state.decisionBuffer;
  const range: Range = [state.caretPosition, state.caretPosition + 1];
  const loc = calculateTokenLocation(state.source, range);
  tokens.push({
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
