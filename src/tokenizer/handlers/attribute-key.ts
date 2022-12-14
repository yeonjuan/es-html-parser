import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { AnyToken, TokenizerState } from "../../types";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  if (isKeyBreak(chars)) {
    return parseKeyEnd(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function isKeyBreak(chars: string): boolean {
  return chars === "=" || chars === "/" || chars === ">" || isWhitespace(chars);
}

function parseKeyEnd(state: TokenizerState, tokens: AnyToken[]) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  tokens.push({
    type: TokenTypes.AttributeKey,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}
