import { TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { cloneRange, createNodeFrom, updateNodeEnd } from "../../utils";

function getLastAttribute(state: ConstructTreeState) {
  const attributes = state.currentNode.attributes;

  return attributes[attributes.length - 1];
}

function handleDoctypeEnd(state: ConstructTreeState) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleAttributeValue(state: ConstructTreeState, token: Token) {
  const attribute = getLastAttribute(state);

  if (attribute.value !== undefined) {
    state.currentContext = state.currentContext.parentRef;

    return state;
  }

  attribute.value = token;
  if (!attribute.key && !attribute.startWrapper) {
    attribute.range = cloneRange(token.range);
  }
  state.caretPosition++;

  return state;
}

function handleAttributeWrapperStart(state: ConstructTreeState, token: Token) {
  const attribute = getLastAttribute(state);

  if (attribute.start !== undefined || attribute.value !== undefined) {
    state.currentContext = state.currentContext.parentRef;

    return state;
  }

  attribute.startWrapper = createNodeFrom(token);
  if (!attribute.key) {
    attribute.range = [token.range[0], token.range[1]];
  }
  state.caretPosition++;

  return state;
}

function handleAttributeWrapperEnd(state: ConstructTreeState, token: Token) {
  const attribute = getLastAttribute(state);

  attribute.endWrapper = createNodeFrom(token);
  updateNodeEnd(attribute, token);

  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.DoctypeEnd) {
    return handleDoctypeEnd(state);
  }

  if (token.type === TokenTypes.DoctypeAttributeWrapperStart) {
    return handleAttributeWrapperStart(state, token);
  }

  if (token.type === TokenTypes.DoctypeAttributeWrapperEnd) {
    return handleAttributeWrapperEnd(state, token);
  }

  if (token.type === TokenTypes.DoctypeAttribute) {
    return handleAttributeValue(state, token);
  }

  state.caretPosition++;

  return state;
}
