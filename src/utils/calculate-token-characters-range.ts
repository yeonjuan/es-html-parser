import { TokenizerState, Range } from "../types";

export function calculateTokenCharactersRange(
  state: TokenizerState,
  { keepBuffer }: { keepBuffer: boolean }
): Range {
  const startPosition =
    state.caretPosition -
    (state.accumulatedContent.length - 1) -
    state.decisionBuffer.length;

  let endPosition;

  if (!keepBuffer) {
    endPosition = state.caretPosition - state.decisionBuffer.length;
  } else {
    endPosition = state.caretPosition;
  }

  return [startPosition, endPosition + 1];
}
