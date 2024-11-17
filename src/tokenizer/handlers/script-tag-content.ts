import {
  TokenizerContextTypes,
  INCOMPLETE_CLOSING_TAG_PATTERN,
  CLOSING_SCRIPT_TAG_PATTERN,
  TokenTypes,
} from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { Range, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState) {
  if (
    chars === "<" ||
    chars === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars)
  ) {
    state.caretPosition++;
    return;
  }

  if (CLOSING_SCRIPT_TAG_PATTERN.test(chars)) {
    return parseClosingScriptTag(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingScriptTag(state: TokenizerState) {
  if (state.accumulatedContent !== "") {
    const position = calculateTokenPosition(state, { keepBuffer: false });
    state.tokens.push({
      type: TokenTypes.ScriptTagContent,
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
    type: TokenTypes.CloseScriptTag,
    value: state.decisionBuffer,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
