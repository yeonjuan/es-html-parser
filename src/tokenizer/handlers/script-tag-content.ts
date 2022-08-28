import {
  TokenizerContextTypes,
  INCOMPLETE_CLOSING_TAG_PATTERN,
  CLOSING_SCRIPT_TAG_PATTERN,
  TokenTypes,
} from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
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
    const range = calculateTokenCharactersRange(state, { keepBuffer: false });
    tokens.push({
      type: TokenTypes.Text,
      content: state.accumulatedContent,
      range: [range.startPosition, range.endPosition],
    });
  }

  tokens.push({
    type: TokenTypes.CloseTag,
    content: state.decisionBuffer,
    range: [
      state.caretPosition - (state.decisionBuffer.length - 1),
      state.caretPosition,
    ],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
