import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { Range, AnyToken, TokenizerState } from "../../types";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped]?.wrapper;

  if (chars === wrapperChar) {
    return parseWrapper(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWrapper(state: TokenizerState, tokens: AnyToken[]) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endWrapperPosition = position.range[1];

  tokens.push({
    type: TokenTypes.DoctypeAttributeValue,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  const range: Range = [endWrapperPosition, endWrapperPosition + 1];
  const loc = calculateTokenLocation(state.source, range);
  tokens.push({
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: state.decisionBuffer,
    range,
    loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.DoctypeAttributeWrapped] =
    undefined;
}
