import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isWhitespace(chars)) {
    return parseWhitespace(state, tokens, chars === "\n");
  }

  if (chars === ">") {
    return parseClosingCornerBrace(state, tokens);
  }

  state.decisionBuffer = "";
  state.caretPosition++;
}

function generateDoctypeStartToken(
  state: TokenizerState,
  isNewLine: boolean = false
): Token {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  return {
    type: TokenTypes.DoctypeStart,
    value: state.accumulatedContent,
    range: position.range,
    loc: {
      start: position.loc.start,
      end: {
        line: position.loc.end.line - Number(isNewLine),
      },
    },
  };
}

function parseWhitespace(
  state: TokenizerState,
  tokens: Token[],
  isNewLine: boolean
) {
  tokens.push(generateDoctypeStartToken(state, isNewLine));

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
