import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (isWhitespace(chars) || chars === ">") {
    return parseAttributeEnd(state, tokens, chars === "\n");
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseAttributeEnd(
  state: TokenizerState,
  tokens: Token[],
  isNewLine: boolean
) {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  tokens.push({
    type: TokenTypes.DoctypeAttribute,
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
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
}
