import { TokenizerState } from "../types";

export function calculateTokenCharactersRange(
  state: TokenizerState,
  { keepBuffer }: { keepBuffer: boolean }
) {
  if (keepBuffer === undefined) {
    throw new Error(
      "Unable to calculate characters range for token.\n" +
        '"keepBuffer" parameter is not specified to decide if ' +
        "the decision buffer is a part of characters range."
    );
  }

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

  return { startPosition, endPosition };
}
