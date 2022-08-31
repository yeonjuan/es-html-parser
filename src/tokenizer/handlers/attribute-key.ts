import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenPosition } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isKeyBreak(chars)) {
    return parseKeyEnd(state, tokens, chars === "\n");
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

function parseKeyEnd(
  state: TokenizerState,
  tokens: Token[],
  isNewLine: boolean
) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  tokens.push({
    type: TokenTypes.AttributeKey,
    value: state.accumulatedContent,
    range: [position.startPosition, position.endPosition],
    loc: {
      start: {
        line: position.loc.start.line,
      },
      end: {
        line: position.loc.end.line - Number(isNewLine),
      },
    },
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
}
