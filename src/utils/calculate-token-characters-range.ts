import { TokenizerState, Range } from "../types";

export function calculateTokenCharactersRange(
  state: TokenizerState,
  { keepBuffer }: { keepBuffer: boolean }
): Range {
  const startPosition =
    state.pointer.index -
    (state.accumulatedContent.length() - 1) -
    state.decisionBuffer.length();

  let endPosition;

  if (!keepBuffer) {
    endPosition = state.pointer.index - state.decisionBuffer.length();
  } else {
    endPosition = state.pointer.index;
  }

  return [startPosition, endPosition + 1];
}
