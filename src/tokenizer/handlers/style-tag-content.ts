import {
  INCOMPLETE_CLOSING_TAG_PATTERN,
  TokenizerContextTypes,
  TokenTypes,
} from "../../constants";
import { Token, TokenizerState } from "../../types";
import { calculateTokenPosition } from "../../utils";

const CLOSING_STYLE_TAG_PATTERN = /<\/style\s*>/i;

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (
    chars === "<" ||
    chars === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars)
  ) {
    state.caretPosition++;
    return;
  }

  if (CLOSING_STYLE_TAG_PATTERN.test(chars)) {
    return parseClosingStyleTag(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingStyleTag(state: TokenizerState, tokens: Token[]) {
  if (state.accumulatedContent !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    tokens.push({
      type: TokenTypes.Text,
      value: state.accumulatedContent,
      range: [position.startPosition, position.endPosition],
      loc: position.loc,
    });
  }

  tokens.push({
    type: TokenTypes.CloseTag,
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
