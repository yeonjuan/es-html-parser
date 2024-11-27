import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import {
  calculateTokenLocation,
  calculateTokenPosition,
  isWhitespace,
} from "../../utils";
import type { Range, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, charIndex: number) {
  const range = state.consumeTemplateRangeAt(charIndex);
  if (range) {
    return parseTemplate(state, range);
  }
  if (isKeyBreak(chars)) {
    return parseKeyEnd(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function isKeyBreak(chars: string): boolean {
  return chars === "=" || chars === "/" || chars === ">" || isWhitespace(chars);
}

function parseKeyEnd(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: TokenTypes.AttributeKey,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
    isTemplate: false,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}

function parseTemplate(state: TokenizerState, [start, end]: Range) {
  const value = state.source.slice(start, end);
  const range: Range = [start, end];
  state.tokens.push({
    type: TokenTypes.AttributeKey,
    value,
    range,
    loc: calculateTokenLocation(state.source, range),
    isTemplate: true,
  });
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.caretPosition = end;
  state.currentContext = TokenizerContextTypes.Attributes;
}
