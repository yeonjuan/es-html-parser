import { TokenTypes } from "../../constants";
import {
  AnyToken,
  CommentContentNode,
  CommentEndNode,
  CommentStartNode,
  ConstructTreeState,
  ContextualCommentNode,
} from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

function handleCommentStart(
  state: ConstructTreeState<ContextualCommentNode>,
  token: AnyToken
) {
  state.currentNode.open = createNodeFrom(token) as CommentStartNode;

  state.caretPosition++;

  return state;
}

function handleCommentContent(
  state: ConstructTreeState<ContextualCommentNode>,
  token: AnyToken
) {
  state.currentNode.value = createNodeFrom(token) as CommentContentNode;
  state.caretPosition++;

  return state;
}

function handleCommentEnd(
  state: ConstructTreeState<ContextualCommentNode>,
  token: AnyToken
) {
  state.currentNode.close = createNodeFrom(token) as CommentEndNode;
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualCommentNode>
) {
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
