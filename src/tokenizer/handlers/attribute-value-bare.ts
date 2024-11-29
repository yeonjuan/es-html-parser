import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import type { TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

export function parseValueEnd(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: TokenTypes.AttributeValue,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
    templates: [],
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Attributes;
}

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (
    isWhitespace(chars.value()) ||
    chars.value() === ">" ||
    chars.value() === "/"
  ) {
    return parseValueEnd(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.pointer.next();
}
