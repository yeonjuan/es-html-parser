import { TokenizerState, Range } from "../types";

export function calculateTokenCharactersRange(
  state: TokenizerState,
  { keepBuffer }: { keepBuffer: boolean }
): Range {
  const startPosition =
    state.sourceCode.index() -
    (state.accumulatedContent.length() - 1) -
    state.decisionBuffer.length();

  let endPosition;

  if (!keepBuffer) {
    endPosition = state.sourceCode.index() - state.decisionBuffer.length();
  } else {
    endPosition = state.sourceCode.index();
  }

  return [startPosition, endPosition + 1];
}
