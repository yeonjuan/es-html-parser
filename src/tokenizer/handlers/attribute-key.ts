import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenCharactersRange } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isKeyBreak(chars)) {
    return parseKeyEnd(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function isKeyBreak(chars: string): boolean {
  return (
    chars === "=" ||
    chars === " " ||
    chars === "\n" ||
    chars === "\t" ||
    chars === "/" ||
    chars === ">"
  );
}

function parseKeyEnd(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });

  tokens.push({
    type: TokenTypes.AttributeKey,
    content: state.accumulatedContent,
    startPosition: range.startPosition,
    endPosition: range.endPosition,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}
