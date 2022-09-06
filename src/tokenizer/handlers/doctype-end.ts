import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { AnyToken, TokenizerState } from "../../types";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  const position = calculateTokenPosition(state, { keepBuffer: true });

  tokens.push({
    type: TokenTypes.DoctypeEnd,
    value: state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
