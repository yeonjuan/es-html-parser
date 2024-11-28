import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import type { Range, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped]?.wrapper;

  if (chars === wrapperChar) {
    return parseWrapper(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.pointer.next();
}

function parseWrapper(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endWrapperPosition = position.range[1];

  state.tokens.push({
    type: TokenTypes.DoctypeAttributeValue,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  const range: Range = [endWrapperPosition, endWrapperPosition + 1];
  const loc = calculateTokenLocation(state.source, range);
  state.tokens.push({
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: state.decisionBuffer,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
  state.pointer.next();

  state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped] =
    undefined;
}
