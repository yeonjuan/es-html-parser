import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

function handleOpenTagStartStyle(state: ConstructTreeState, token: Token) {
  state.currentNode.openStart = token;
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
  state.currentNode.openEnd = token;
  state.caretPosition++;

  return state;
}

function handleStyleContent(state: ConstructTreeState, token: Token) {
  state.currentNode.value = token;
  state.caretPosition++;

  return state;
}

function handleCloseTagStyle(state: ConstructTreeState, token: Token) {
  state.currentNode.close = token;
  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStart) {
    return handleOpenTagStartStyle(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStartStyle(state);
  }

  if (token.type === TokenTypes.OpenTagEnd) {
    return handleOpenTagEndStyle(state, token);
  }

  if (token.type === TokenTypes.Text) {
    return handleStyleContent(state, token);
  }

  if (token.type === TokenTypes.CloseTag) {
    return handleCloseTagStyle(state, token);
  }

  state.caretPosition++;

  return state;
}
