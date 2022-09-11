import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import { Range, AnyToken, TokenizerState } from "../../types";

const COMMENT_END = "-->";

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  if (chars === "-" || chars === "--") {
    state.caretPosition++;
    return;
  }

  if (chars === COMMENT_END) {
    return parseCommentClose(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseCommentClose(state: TokenizerState, tokens: AnyToken[]) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endRange: Range = [
    position.range[1],
    position.range[1] + COMMENT_END.length,
  ];
  const endLoc = calculateTokenLocation(state.source, endRange);

  tokens.push(
    {
      type: TokenTypes.CommentContent,
      value: state.accumulatedContent,
      range: position.range,
      loc: position.loc,
    },
    {
      type: TokenTypes.CommentClose,
      value: state.decisionBuffer,
      range: endRange,
      loc: endLoc,
    }
  );

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
