import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, isWhitespace } from "../../utils";
import type { Range, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState) {
  if (chars === '"' || chars === "'") {
    return parseWrapper(state);
  }

  if (chars === ">") {
    return parseClosingCornerBrace(state);
  }

  if (!isWhitespace(chars)) {
    return parseBare(state);
  }

  state.decisionBuffer = "";
  state.pointer.next();
}

function parseWrapper(state: TokenizerState) {
  const wrapper = state.decisionBuffer;
  const range: Range = [
    state.pointer.index,
    state.pointer.index + wrapper.length,
  ];
  const loc = calculateTokenLocation(state.source, range);
  state.tokens.push({
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
  state.pointer.next();
}

function parseBare(state: TokenizerState) {
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributeBare;
  state.pointer.next();
}

function parseClosingCornerBrace(state: TokenizerState) {
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeClose;
}
