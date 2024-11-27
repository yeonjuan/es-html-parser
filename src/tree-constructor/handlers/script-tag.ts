import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import {
  AnyToken,
  CloseScriptTagNode,
  ConstructTreeState,
  ContextualScriptTagNode,
  OpenScriptTagEndNode,
  OpenScriptTagStartNode,
  ScriptTagContentNode,
} from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

function handleOpenScriptTagStart(
  state: ConstructTreeState<ContextualScriptTagNode>,
  token: AnyToken
) {
  state.currentNode.openStart = createNodeFrom(token) as OpenScriptTagStartNode;
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleAttributeStartScript(
  state: ConstructTreeState<ContextualScriptTagNode>
) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attributes,
  };

  return state;
}

function handleOpenScriptTagEnd(
  state: ConstructTreeState<ContextualScriptTagNode>,
  token: AnyToken
) {
  state.currentNode.openEnd = createNodeFrom(token) as OpenScriptTagEndNode;
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleScriptContent(
  state: ConstructTreeState<ContextualScriptTagNode>,
  token: AnyToken
) {
  const node = createNodeFrom(token) as ScriptTagContentNode;
  state.currentNode.children.push(node);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleCloseScriptTag(
  state: ConstructTreeState<ContextualScriptTagNode>,
  token: AnyToken
) {
  state.currentNode.close = createNodeFrom(token) as CloseScriptTagNode;
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualScriptTagNode>
) {
  if (token.type === TokenTypes.OpenScriptTagStart) {
    return handleOpenScriptTagStart(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStartScript(state);
  }

  if (token.type === TokenTypes.OpenScriptTagEnd) {
    return handleOpenScriptTagEnd(state, token);
  }

  if (token.type === TokenTypes.ScriptTagContent) {
    return handleScriptContent(state, token);
  }

  if (token.type === TokenTypes.CloseScriptTag) {
    return handleCloseScriptTag(state, token);
  }

  state.caretPosition++;

  return state;
}
