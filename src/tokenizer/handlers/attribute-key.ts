import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import type { TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState) {
  if (isKeyBreak(chars)) {
    return parseKeyEnd(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.pointer.next();
}

function isKeyBreak(chars: string): boolean {
  return chars === "=" || chars === "/" || chars === ">" || isWhitespace(chars);
}

function parseKeyEnd(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: TokenTypes.AttributeKey,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}
