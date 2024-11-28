import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import type { TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: true });

  state.tokens.push({
    type: TokenTypes.DoctypeClose,
    value: state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.pointer.next();
}
