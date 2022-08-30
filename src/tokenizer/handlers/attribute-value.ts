import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { isWhitespace } from "../../utils";
import { TokenizerState, Token } from "../../types";

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

  tokens.push({
    type: TokenTypes.AttributeValueWrapperStart,
    value: wrapper,
    range: [state.caretPosition, state.caretPosition + 1],
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
