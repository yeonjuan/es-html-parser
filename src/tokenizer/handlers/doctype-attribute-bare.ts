import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isWhitespace(chars) || chars === ">") {
    return parseAttributeEnd(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseAttributeEnd(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });

  tokens.push({
    type: TokenTypes.DoctypeAttribute,
    content: state.accumulatedContent,
    range: [range.startPosition, range.endPosition],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
}
