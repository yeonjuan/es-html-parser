import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

function handleOpenTagStartStyle(state: ConstructTreeState, token: Token) {
  state.currentNode.openStart = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleAttributeStartStyle(state: ConstructTreeState) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attributes,
  };

  return state;
}

function handleOpenTagEndStyle(state: ConstructTreeState, token: Token) {
  state.currentNode.openEnd = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleStyleContent(state: ConstructTreeState, token: Token) {
  state.currentNode.value = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleCloseTagStyle(state: ConstructTreeState, token: Token) {
  state.currentNode.close = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStartStyle) {
    return handleOpenTagStartStyle(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStartStyle(state);
  }

  if (token.type === TokenTypes.OpenTagEndStyle) {
    return handleOpenTagEndStyle(state, token);
  }

  if (token.type === TokenTypes.StyleTagContent) {
    return handleStyleContent(state, token);
  }

  if (token.type === TokenTypes.CloseTagStyle) {
    return handleCloseTagStyle(state, token);
  }

  state.caretPosition++;

  return state;
}
