import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import type { Range, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, charIndex: number) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.AttributeValueWrapped]?.wrapper;

  const range = state.consumeTemplateRangeAt(charIndex);
  if (range) {
    return parseTemplate(state, range);
  }

  if (chars === wrapperChar) {
    return parseWrapper(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWrapper(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endWrapperPosition = position.range[1];

  if (state.accumulatedContent) {
    state.tokens.push({
      type: TokenTypes.AttributeValue,
      value: state.accumulatedContent,
      range: position.range,
      loc: position.loc,
      isTemplate: false,
    });
  }

  const range: Range = [endWrapperPosition, endWrapperPosition + 1];
  const loc = calculateTokenLocation(state.source, range);
  state.tokens.push({
    type: TokenTypes.AttributeValueWrapperEnd,
    value: state.decisionBuffer,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.AttributeValueWrapped] = undefined;
}

function parseTemplate(state: TokenizerState, [start, end]: Range) {
  const value = state.source.slice(start, end);
  const range: Range = [start, end];
  state.tokens.push({
    type: TokenTypes.AttributeValue,
    isTemplate: true,
    value,
    range,
    loc: calculateTokenLocation(state.source, range),
  });
  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.caretPosition = end;
}
