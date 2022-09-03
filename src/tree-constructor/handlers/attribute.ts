import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { createNodeFrom } from "../../utils";

const OPEN_TAG_END_TOKENS = [
  TokenTypes.OpenTagEnd,
  TokenTypes.OpenTagEndScript,
  TokenTypes.OpenTagEndStyle,
];

function getLastAttribute(state: ConstructTreeState) {
  const attributes = state.currentNode.attributes;

  return attributes[attributes.length - 1];
}

function handleOpenTagEnd(state: ConstructTreeState) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleAttributeKey(state: ConstructTreeState, token: Token) {
  const attribute = getLastAttribute(state);

  if (attribute.key !== undefined || attribute.value !== undefined) {
    state.currentContext = state.currentContext.parentRef;

    return state;
  }

  attribute.key = createNodeFrom(token);
  state.caretPosition++;

  return state;
}

function handleAttributeAssignment(state: ConstructTreeState) {
  const attribute = getLastAttribute(state);

  if (attribute.value !== undefined) {
    state.currentContext = state.currentContext.parentRef;

    return state;
  }

  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.AttributeValue,
  };
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (OPEN_TAG_END_TOKENS.indexOf(token.type) !== -1) {
    return handleOpenTagEnd(state);
  }

  if (token.type === TokenTypes.AttributeKey) {
    return handleAttributeKey(state, token);
  }

  if (token.type === TokenTypes.AttributeAssignment) {
    return handleAttributeAssignment(state);
  }

  state.caretPosition++;

  return state;
}
