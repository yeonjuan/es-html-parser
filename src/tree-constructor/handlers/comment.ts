import { TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

function handleCommentStart(state: ConstructTreeState, token: Token) {
  state.currentNode.start = createNodeFrom(token);

  state.caretPosition++;

  return state;
}

function handleCommentContent(state: ConstructTreeState, token: Token) {
  state.currentNode.value = createNodeFrom(token);
  state.caretPosition++;

  return state;
}

function handleCommentEnd(state: ConstructTreeState, token: Token) {
  state.currentNode.end = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

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
