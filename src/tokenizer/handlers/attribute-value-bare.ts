import { TokenizerContextTypes } from "../../constants";
import { TokenTypes } from "../../constants/token-types";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parseValueEnd(
  state: TokenizerState,
  tokens: Token[],
  isNewLine: boolean
) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  tokens.push({
    type: TokenTypes.AttributeValue,
    value: state.accumulatedContent,
    range: position.range,
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

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isWhitespace(chars) || chars === ">" || chars === "/") {
    return parseValueEnd(state, tokens, chars === "\n");
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}
