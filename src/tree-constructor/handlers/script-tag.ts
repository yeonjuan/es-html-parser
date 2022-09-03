import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

function handleOpenTagStartScript(state: ConstructTreeState, token: Token) {
  state.currentNode.openStart = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleAttributeStartScript(state: ConstructTreeState) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attributes,
  };

  return state;
}

function handleOpenTagEndScript(state: ConstructTreeState, token: Token) {
  state.currentNode.openEnd = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleScriptContent(state: ConstructTreeState, token: Token) {
  state.currentNode.value = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.caretPosition++;

  return state;
}

function handleCloseTagScript(state: ConstructTreeState, token: Token) {
  state.currentNode.close = createNodeFrom(token);
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStartScript) {
    return handleOpenTagStartScript(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStartScript(state);
  }

  if (token.type === TokenTypes.OpenTagEndScript) {
    return handleOpenTagEndScript(state, token);
  }

  if (token.type === TokenTypes.ScriptTagContent) {
    return handleScriptContent(state, token);
  }

  if (token.type === TokenTypes.CloseTagScript) {
    return handleCloseTagScript(state, token);
  }

  state.caretPosition++;

  return state;
}
