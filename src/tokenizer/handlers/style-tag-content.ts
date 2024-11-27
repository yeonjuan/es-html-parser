import {
  INCOMPLETE_CLOSING_TAG_PATTERN,
  TokenizerContextTypes,
  TokenTypes,
} from "../../constants";
import { Range, TokenizerState } from "../../types";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";

const CLOSING_STYLE_TAG_PATTERN = /<\/style\s*>/i;

export function parse(chars: string, state: TokenizerState) {
  if (
    chars === "<" ||
    chars === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars)
  ) {
    state.caretPosition++;
    return;
  }

  if (CLOSING_STYLE_TAG_PATTERN.test(chars)) {
    return parseClosingStyleTag(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingStyleTag(state: TokenizerState) {
  if (state.accumulatedContent !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    state.tokens.push({
      type: TokenTypes.StyleTagContent,
      value: state.accumulatedContent,
      range: position.range,
      loc: position.loc,
    });
  }

  const range: Range = [
    state.caretPosition - (state.decisionBuffer.length - 1),
    state.caretPosition + 1,
  ];
  const loc = calculateTokenLocation(state.source, range);

  state.tokens.push({
    type: TokenTypes.CloseStyleTag,
    value: state.decisionBuffer,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
