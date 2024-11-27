import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
import type { Range, TokenizerState } from "../../types";

const COMMENT_END = "-->";

export function parse(chars: string, state: TokenizerState) {
  if (chars === "-" || chars === "--") {
    state.caretPosition++;
    return;
  }

  if (chars === COMMENT_END) {
    return parseCommentClose(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseCommentClose(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endRange: Range = [
    position.range[1],
    position.range[1] + COMMENT_END.length,
  ];
  const endLoc = calculateTokenLocation(state.source, endRange);

  state.tokens.push({
    type: TokenTypes.CommentContent,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });
  state.tokens.push({
    type: TokenTypes.CommentClose,
    value: state.decisionBuffer,
    range: endRange,
    loc: endLoc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Data;
  state.caretPosition++;
}
