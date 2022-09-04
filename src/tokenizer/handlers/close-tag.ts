import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === ">") {
    return parseClosingCornerBrace(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingCornerBrace(state: TokenizerState, tokens: Token[]) {
  const position = calculateTokenPosition(state, { keepBuffer: true });

  tokens.push({
    type: TokenTypes.CloseTag,
    value: state.accumulatedContent + state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
