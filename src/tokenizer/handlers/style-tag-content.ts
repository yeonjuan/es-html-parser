import {
  INCOMPLETE_CLOSING_TAG_PATTERN,
  TokenizerContextTypes,
  TokenTypes,
} from "../../constants";
import { Range, TokenizerState } from "../../types";
import { calculateTokenPosition, createParts } from "../../utils";
import { CharsBuffer } from "../chars-buffer";

const CLOSING_STYLE_TAG_PATTERN = /<\/style\s*>/i;

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (
    chars.value() === "<" ||
    chars.value() === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())
  ) {
    state.sourceCode.next();
    return;
  }

  if (CLOSING_STYLE_TAG_PATTERN.test(chars.value())) {
    return parseClosingStyleTag(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseClosingStyleTag(state: TokenizerState) {
  if (state.accumulatedContent.value() !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    state.tokens.push({
      type: TokenTypes.StyleTagContent,
      value: state.accumulatedContent.value(),
      range: position.range,
      loc: position.loc,
      parts: createParts(state, TokenTypes.StyleTagContent),
    });
  }

  const range: Range = [
    state.sourceCode.index() - (state.decisionBuffer.length() - 1),
    state.sourceCode.index() + 1,
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
  state.sourceCode.next();
}
