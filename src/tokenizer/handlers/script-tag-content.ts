import {
  TokenizerContextTypes,
  INCOMPLETE_CLOSING_TAG_PATTERN,
  CLOSING_SCRIPT_TAG_PATTERN,
  TokenTypes,
} from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { Range, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (
    chars.value() === "<" ||
    chars.value() === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())
  ) {
    state.pointer.next();
    return;
  }

  if (CLOSING_SCRIPT_TAG_PATTERN.test(chars.value())) {
    return parseClosingScriptTag(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.pointer.next();
}

function parseClosingScriptTag(state: TokenizerState) {
  if (state.accumulatedContent.value() !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    state.tokens.push({
      type: TokenTypes.ScriptTagContent,
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
    type: TokenTypes.CloseScriptTag,
    value: state.decisionBuffer.value(),
    range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Data;
  state.pointer.next();
}
