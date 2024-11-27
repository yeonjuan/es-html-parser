import { TokenTypes } from "../../constants";
import {
  AnyToken,
  CommentContentNode,
  CommentCloseNode,
  CommentOpenNode,
  ConstructTreeState,
  ContextualCommentNode,
} from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

function handleCommentOpen(
  state: ConstructTreeState<ContextualCommentNode>,
  token: AnyToken
) {
  state.currentNode.open = createNodeFrom(token) as CommentOpenNode;

  state.caretPosition++;

  return state;
}

function handleCommentContent(
  state: ConstructTreeState<ContextualCommentNode>,
  token: AnyToken
) {
  const node = createNodeFrom(token) as CommentContentNode;
  state.currentNode.children.push(node);
  state.caretPosition++;

  return state;
}

function handleCommentClose(
  state: ConstructTreeState<ContextualCommentNode>,
  token: AnyToken
) {
  state.currentNode.close = createNodeFrom(token) as CommentCloseNode;
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
  if (token.type === TokenTypes.CommentOpen) {
    return handleCommentOpen(state, token);
  }

  if (token.type === TokenTypes.CommentContent) {
    return handleCommentContent(state, token);
  }

  if (token.type === TokenTypes.CommentClose) {
    return handleCommentClose(state, token);
  }

  state.caretPosition++;

  return state;
}
