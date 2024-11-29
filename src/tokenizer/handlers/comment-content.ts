import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import type { Range, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

const COMMENT_END = "-->";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  const value = chars.value();
  if (value === "-" || value === "--") {
    state.sourceCode.next();
    return;
  }

  if (value === COMMENT_END) {
    return parseCommentClose(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseCommentClose(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: false });
  const endRange: Range = [
    position.range[1],
    position.range[1] + COMMENT_END.length,
  ];

  state.tokens.push({
    type: TokenTypes.CommentContent,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
    templates: [],
  });
  state.tokens.push({
    type: TokenTypes.CommentClose,
    value: state.decisionBuffer.value(),
    range: endRange,
    loc: state.sourceCode.getLocationOf(endRange),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Data;
  state.sourceCode.next();
}
