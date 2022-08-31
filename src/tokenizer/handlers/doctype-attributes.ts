import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

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

  tokens.push({
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: wrapper,
    range: [state.caretPosition, state.caretPosition + wrapper.length],
    loc: {
      start: {
        line: state.linePosition,
      },
      end: {
        line: state.linePosition,
      },
    },
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
