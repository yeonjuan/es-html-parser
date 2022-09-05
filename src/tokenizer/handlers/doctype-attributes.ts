import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, isWhitespace } from "../../utils";
import { Range, Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === '"' || chars === "'") {
    return parseWrapper(state, tokens);
  }

  if (chars === ">") {
    return parseClosingCornerBrace(state);
  }

  if (!isWhitespace(chars)) {
    return parseBare(state);
  }

  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWrapper(state: TokenizerState, tokens: Token[]) {
  const wrapper = state.decisionBuffer;
  const range: Range = [
    state.caretPosition,
    state.caretPosition + wrapper.length,
  ];
  const loc = calculateTokenLocation(state.source, range);
  tokens.push({
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: wrapper,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributeWrapped;
  state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped] = {
    wrapper,
  };
  state.caretPosition++;
}

function parseBare(state: TokenizerState) {
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributeBare;
  state.caretPosition++;
}

function parseClosingCornerBrace(state: TokenizerState) {
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeEnd;
}
