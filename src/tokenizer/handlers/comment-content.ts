import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { Token, TokenizerState } from "../../types";

const COMMENT_END = "-->";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === "-" || chars === "--") {
    state.caretPosition++;
    return;
  }

  if (chars === COMMENT_END) {
    return parseCommentEnd(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseCommentEnd(state: TokenizerState, tokens: Token[]) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endRange = {
    startPosition: position.endPosition,
    endPosition: position.endPosition + COMMENT_END.length,
  };

  tokens.push(
    {
      type: TokenTypes.CommentContent,
      value: state.accumulatedContent,
      range: [position.startPosition, position.endPosition],
      loc: position.loc,
    },
    {
      type: TokenTypes.CommentEnd,
      value: state.decisionBuffer,
      range: [endRange.startPosition, endRange.endPosition],
      loc: {
        start: position.loc.end,
        end: position.loc.end,
      },
    }
  );

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
