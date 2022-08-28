import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: true });

  tokens.push({
    type: TokenTypes.DoctypeEnd,
    value: state.decisionBuffer,
    range: [range.startPosition, range.endPosition],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
