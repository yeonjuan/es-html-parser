import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

function handleOpenTagStartScript(state: ConstructTreeState, token: Token) {
  state.currentNode.content.openStart = token;
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
  state.currentNode.content.openEnd = token;
  state.caretPosition++;

  return state;
}

function handleScriptContent(state: ConstructTreeState, token: Token) {
  state.currentNode.content.value = token;
  state.caretPosition++;

  return state;
}

function handleCloseTagScript(state: ConstructTreeState, token: Token) {
  state.currentNode.content.close = token;
  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStart) {
    return handleOpenTagStartScript(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStartScript(state);
  }

  if (token.type === TokenTypes.OpenTagEnd) {
    return handleOpenTagEndScript(state, token);
  }

  if (token.type === TokenTypes.Text) {
    return handleScriptContent(state, token);
  }

  if (token.type === TokenTypes.CloseTag) {
    return handleCloseTagScript(state, token);
  }

  state.caretPosition++;

  return state;
}
