import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isWhitespace(chars)) {
    return parseWhitespace(state, tokens);
  }

  if (chars === ">") {
    return parseClosingCornerBrace(state, tokens);
  }

  state.decisionBuffer = "";
  state.caretPosition++;
}

function generateDoctypeStartToken(state: TokenizerState): Token {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });
  return {
    type: TokenTypes.DoctypeStart,
    value: state.accumulatedContent,
    range: [range.startPosition, range.endPosition],
  };
}

function parseWhitespace(state: TokenizerState, tokens: Token[]) {
  tokens.push(generateDoctypeStartToken(state));

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
}

function parseClosingCornerBrace(state: TokenizerState, tokens: Token[]) {
  tokens.push(generateDoctypeStartToken(state));

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeEnd;
}
