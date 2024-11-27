import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenLocation,
  calculateTokenPosition,
  isWhitespace,
} from "../../utils";
import type { Range, TokenizerState } from "../../types";

function parseValueEnd(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: TokenTypes.AttributeValue,
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
    type: TokenTypes.AttributeValue,
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

export function parse(chars: string, state: TokenizerState, charIndex: number) {
  const range = state.consumeTemplateRangeAt(charIndex);
  if (range) {
    return parseTemplate(state, range);
  }
  if (isWhitespace(chars) || chars === ">" || chars === "/") {
    return parseValueEnd(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}
