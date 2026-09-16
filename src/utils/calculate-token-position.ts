import { TokenizerState } from "../types";
import { calculateTokenCharactersRange } from "./calculate-token-characters-range";

export function calculateTokenPosition(
  state: TokenizerState,
  options: { keepBuffer: boolean }
) {
  const range = calculateTokenCharactersRange(state, options);
  const loc = state.sourceCode.getLocationOf(range);
  return {
    range,
    loc,
  };
}
