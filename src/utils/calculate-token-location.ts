import { TokenizerState } from "../types";

export function calculateTokenLocation(
  state: TokenizerState,
  { keepBuffer }: { keepBuffer: boolean }
) {
  if (keepBuffer === undefined) {
    throw new Error(
      "Unable to calculate location for token.\n" +
        '"keepBuffer" parameter is not specified to decide if ' +
        "the decision buffer is a part of characters range."
    );
  }
  let startLine =
    state.linePosition -
    [...state.accumulatedContent].filter((ch) => ch === "\n").length;

  if (!keepBuffer) {
    startLine -= [...state.decisionBuffer].filter((ch) => ch === "\n").length;
  }

  return {
    start: {
      line: startLine,
    },
    end: {
      line: state.linePosition,
    },
  };
}
