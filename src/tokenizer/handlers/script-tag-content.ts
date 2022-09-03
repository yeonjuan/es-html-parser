import {
  TokenizerContextTypes,
  INCOMPLETE_CLOSING_TAG_PATTERN,
  CLOSING_SCRIPT_TAG_PATTERN,
  TokenTypes,
} from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (
    chars === "<" ||
    chars === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars)
  ) {
    state.caretPosition++;
    return;
  }

  if (CLOSING_SCRIPT_TAG_PATTERN.test(chars)) {
    return parseClosingScriptTag(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingScriptTag(state: TokenizerState, tokens: Token[]) {
  if (state.accumulatedContent !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    tokens.push({
      type: TokenTypes.ScriptTagContent,
      value: state.accumulatedContent,
      range: [position.startPosition, position.endPosition],
      loc: position.loc,
    });
  }

  tokens.push({
    type: TokenTypes.CloseTagScript,
    value: state.decisionBuffer,
    range: [
      state.caretPosition - (state.decisionBuffer.length - 1),
      state.caretPosition + 1,
    ],
    loc: {
      start: {
        line: state.linePosition,
      },
      end: {
        line: state.linePosition,
      },
    },
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
