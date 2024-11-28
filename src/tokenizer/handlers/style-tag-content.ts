import {
  INCOMPLETE_CLOSING_TAG_PATTERN,
  TokenizerContextTypes,
  TokenTypes,
} from "../../constants";
import { Range, TokenizerState } from "../../types";
import { calculateTokenPosition } from "../../utils";
import { CharsBuffer } from "../chars-buffer";

const CLOSING_STYLE_TAG_PATTERN = /<\/style\s*>/i;

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (
    chars.value() === "<" ||
    chars.value() === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())
  ) {
    state.pointer.next();
    return;
  }

  if (CLOSING_STYLE_TAG_PATTERN.test(chars.value())) {
    return parseClosingStyleTag(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.pointer.next();
}

function parseClosingStyleTag(state: TokenizerState) {
  if (state.accumulatedContent.value() !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    state.tokens.push({
      type: TokenTypes.StyleTagContent,
      value: state.accumulatedContent.value(),
      range: position.range,
      loc: position.loc,
    });
  }

  const range: Range = [
    state.pointer.index - (state.decisionBuffer.length() - 1),
    state.pointer.index + 1,
  ];

  state.tokens.push({
    type: TokenTypes.CloseStyleTag,
    value: state.decisionBuffer.value(),
    range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Data;
  state.pointer.next();
}
