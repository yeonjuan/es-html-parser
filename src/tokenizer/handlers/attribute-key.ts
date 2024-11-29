import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import type { TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (isKeyBreak(chars)) {
    return parseKeyEnd(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function isKeyBreak(chars: CharsBuffer): boolean {
  const value = chars.value();
  return value === "=" || value === "/" || value === ">" || isWhitespace(value);
}

function parseKeyEnd(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: TokenTypes.AttributeKey,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
    templates:
      state.mode === "template"
        ? state.accumulatedContent.getTemplates().map((chars) => ({
            type: TokenTypes.AttributeKey,
            range: chars.range,
            loc: state.sourceCode.getLocationOf(chars.range),
            isTemplate: chars.isTemplate,
            value: chars.value,
          }))
        : [],
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Attributes;
}
