import { TokenizerState } from "../types";
import { calculateTokenCharactersRange } from "./calculate-token-characters-range";
import { calculateTokenLocation } from "./calculate-token-location";

export function calculateTokenPosition(
  state: TokenizerState,
  options: { keepBuffer: boolean }
) {
  const range = calculateTokenCharactersRange(state, options);
  const loc = calculateTokenLocation(state.source, range);
  return {
    range,
    loc,
  };
}
