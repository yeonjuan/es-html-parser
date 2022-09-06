import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { AnyToken, Range, TokenizerState } from "../../types";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.AttributeValueWrapped]?.wrapper;

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
    type: TokenTypes.AttributeValue,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  const range: Range = [endWrapperPosition, endWrapperPosition + 1];
  const loc = calculateTokenLocation(state.source, range);
  tokens.push({
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
