import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import type { Range, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";
import { createTemplates } from "../../utils/create-templates";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.AttributeValueWrapped]?.wrapper;

  if (chars.value() === wrapperChar) {
    return parseWrapper(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseWrapper(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endWrapperPosition = position.range[1];

  state.tokens.push({
    type: TokenTypes.AttributeValue,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
    templates: createTemplates(state, TokenTypes.AttributeValue),
  });

  const range: Range = [endWrapperPosition, endWrapperPosition + 1];
  state.tokens.push({
    type: TokenTypes.AttributeValueWrapperEnd,
    value: state.decisionBuffer.value(),
    range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Attributes;
  state.sourceCode.next();

  state.contextParams[TokenizerContextTypes.AttributeValueWrapped] = undefined;
}
