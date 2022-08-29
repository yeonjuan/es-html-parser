import { TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";

function handleCommentStart(state: ConstructTreeState, token: Token) {
  state.currentNode.start = token;
  state.caretPosition++;

  return state;
}

function handleCommentContent(state: ConstructTreeState, token: Token) {
  state.currentNode.value = token;
  state.caretPosition++;

  return state;
}

function handleCommentEnd(state: ConstructTreeState, token: Token) {
  state.currentNode.end = token;
  state.currentNode.range[1] = token.range[1];
  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.CommentStart) {
    return handleCommentStart(state, token);
  }

  if (token.type === TokenTypes.CommentContent) {
    return handleCommentContent(state, token);
  }

  if (token.type === TokenTypes.CommentEnd) {
    return handleCommentEnd(state, token);
  }

  state.caretPosition++;

  return state;
}
