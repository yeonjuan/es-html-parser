import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
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
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });
  const endRange = {
    startPosition: range.endPosition + 1,
    endPosition: range.endPosition + COMMENT_END.length,
  };

  tokens.push(
    {
      type: TokenTypes.CommentContent,
      value: state.accumulatedContent,
      range: [range.startPosition, range.endPosition],
    },
    {
      type: TokenTypes.CommentEnd,
      value: state.decisionBuffer,
      range: [endRange.startPosition, endRange.endPosition],
    }
  );

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
