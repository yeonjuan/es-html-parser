import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped]?.wrapper;

  if (chars === wrapperChar) {
    return parseWrapper(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWrapper(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });
  const endWrapperPosition = range.endPosition;

  tokens.push({
    type: TokenTypes.DoctypeAttribute,
    value: state.accumulatedContent,
    range: [range.startPosition, range.endPosition],
  });

  tokens.push({
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: state.decisionBuffer,
    range: [endWrapperPosition, endWrapperPosition + 1],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped] =
    undefined;
}
