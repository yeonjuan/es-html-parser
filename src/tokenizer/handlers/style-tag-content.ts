import {
  INCOMPLETE_CLOSING_TAG_PATTERN,
  TokenizerContextTypes,
  TokenTypes,
} from "../../constants";
import { Token, TokenizerState } from "../../types";
import { calculateTokenCharactersRange } from "../../utils";

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
    const range = calculateTokenCharactersRange(state, { keepBuffer: false });
    tokens.push({
      type: TokenTypes.Text,
      content: state.accumulatedContent,
      startPosition: range.startPosition,
      endPosition: range.endPosition,
    });
  }

  tokens.push({
    type: TokenTypes.CloseTag,
    content: state.decisionBuffer,
    startPosition: state.caretPosition - (state.decisionBuffer.length - 1),
    endPosition: state.caretPosition,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
