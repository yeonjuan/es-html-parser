import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { AnyToken, TokenizerState } from "../../types";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  if (isWhitespace(chars)) {
    return parseWhitespace(state, tokens);
  }

  if (chars === ">") {
    return parseClosingCornerBrace(state, tokens);
  }

  state.decisionBuffer = "";
  state.caretPosition++;
}

function generateDoctypeStartToken(state: TokenizerState): AnyToken {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  return {
    type: TokenTypes.DoctypeStart,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  };
}

function parseWhitespace(state: TokenizerState, tokens: AnyToken[]) {
  tokens.push(generateDoctypeStartToken(state));

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
}

function parseClosingCornerBrace(state: TokenizerState, tokens: AnyToken[]) {
  tokens.push(generateDoctypeStartToken(state));

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.DoctypeEnd;
}
