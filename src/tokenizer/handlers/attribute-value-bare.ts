import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenCharactersRange, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parseValueEnd(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });
  tokens.push({
    type: TokenTypes.AttributeValue,
    value: state.accumulatedContent,
    range: [range.startPosition, range.endPosition],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isWhitespace(chars) || chars === ">" || chars === "/") {
    return parseValueEnd(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}
