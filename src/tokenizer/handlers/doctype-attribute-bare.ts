import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { AnyToken, TokenizerState } from "../../types";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  if (isWhitespace(chars) || chars === ">") {
    return parseAttributeEnd(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseAttributeEnd(state: TokenizerState, tokens: AnyToken[]) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  tokens.push({
    type: TokenTypes.DoctypeAttributeValue,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
}
