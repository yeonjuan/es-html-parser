import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import {
  AnyToken,
  CloseStyleTagNode,
  ConstructTreeState,
  ContextualStyleTagNode,
  OpenStyleTagEndNode,
  OpenStyleTagStartNode,
  StyleTagContentNode,
} from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

function handleOpenStyleTagStart(
  state: ConstructTreeState<ContextualStyleTagNode>,
  token: AnyToken
) {
  state.currentNode.openStart = createNodeFrom(token) as OpenStyleTagStartNode;
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleAttributeStartStyle(
  state: ConstructTreeState<ContextualStyleTagNode>
) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attributes,
  };

  return state;
}

function handleOpenStyleTagEnd(
  state: ConstructTreeState<ContextualStyleTagNode>,
  token: AnyToken
) {
  state.currentNode.openEnd = createNodeFrom(token) as OpenStyleTagEndNode;
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleStyleContent(
  state: ConstructTreeState<ContextualStyleTagNode>,
  token: AnyToken
) {
  const node = createNodeFrom(token) as StyleTagContentNode;
  state.currentNode.children.push(node);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleCloseStyleTag(
  state: ConstructTreeState<ContextualStyleTagNode>,
  token: AnyToken
) {
  state.currentNode.close = createNodeFrom(token) as CloseStyleTagNode;
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualStyleTagNode>
) {
  if (token.type === TokenTypes.OpenStyleTagStart) {
    return handleOpenStyleTagStart(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStartStyle(state);
  }

  if (token.type === TokenTypes.OpenStyleTagEnd) {
    return handleOpenStyleTagEnd(state, token);
  }

  if (token.type === TokenTypes.StyleTagContent) {
    return handleStyleContent(state, token);
  }

  if (token.type === TokenTypes.CloseStyleTag) {
    return handleCloseStyleTag(state, token);
  }

  state.caretPosition++;

  return state;
}
