import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  const wrapperChar =
    state.contextParams[TokenizerContextTypes.AttributeValueWrapped]?.wrapper;

  if (chars === wrapperChar) {
    return parseWrapper(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWrapper(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });
  const endWrapperPosition = range.endPosition + 1;

  tokens.push({
    type: TokenTypes.AttributeValue,
    content: state.accumulatedContent,
    startPosition: range.startPosition,
    endPosition: range.endPosition,
  });

  tokens.push({
    type: TokenTypes.AttributeValueWrapperEnd,
    content: state.decisionBuffer,
    startPosition: endWrapperPosition,
    endPosition: endWrapperPosition,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.AttributeValueWrapped] = undefined;
}
