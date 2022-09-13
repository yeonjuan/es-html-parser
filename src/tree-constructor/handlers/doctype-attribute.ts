import { TokenTypes } from "../../constants";
import {
  AnyToken,
  ConstructTreeState,
  ContextualDoctypeNode,
  DoctypeAttributeValueNode,
  DoctypeAttributeWrapperEndNode,
  DoctypeAttributeWrapperStartNode,
  Token,
} from "../../types";
import { cloneRange, createNodeFrom, updateNodeEnd } from "../../utils";

function getLastAttribute(state: ConstructTreeState<ContextualDoctypeNode>) {
  const attributes = state.currentNode.attributes;

  return attributes[attributes.length - 1];
}

function handleDoctypeClose(state: ConstructTreeState<ContextualDoctypeNode>) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleAttributeValue(
  state: ConstructTreeState<ContextualDoctypeNode>,
  token: Token<TokenTypes.DoctypeAttributeValue>
) {
  const attribute = getLastAttribute(state);

  if (attribute.value !== undefined) {
    state.currentContext = state.currentContext.parentRef;

    return state;
  }

  attribute.value = createNodeFrom(token) as DoctypeAttributeValueNode;
  if (!attribute.startWrapper) {
    attribute.range = cloneRange(token.range);
  }
  state.caretPosition++;

  return state;
}

function handleAttributeWrapperStart(
  state: ConstructTreeState<ContextualDoctypeNode>,
  token: AnyToken
) {
  const attribute = getLastAttribute(state);

  if (attribute.value !== undefined) {
    state.currentContext = state.currentContext.parentRef;

    return state;
  }

  attribute.startWrapper = createNodeFrom(
    token
  ) as DoctypeAttributeWrapperStartNode;

  attribute.range = cloneRange(token.range);
  state.caretPosition++;

  return state;
}

function handleAttributeWrapperEnd(
  state: ConstructTreeState<ContextualDoctypeNode>,
  token: AnyToken
) {
  const attribute = getLastAttribute(state);

  attribute.endWrapper = createNodeFrom(
    token
  ) as DoctypeAttributeWrapperEndNode;
  updateNodeEnd(attribute, token);

  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualDoctypeNode>
) {
  if (token.type === TokenTypes.DoctypeClose) {
    return handleDoctypeClose(state);
  }

  if (token.type === TokenTypes.DoctypeAttributeWrapperStart) {
    return handleAttributeWrapperStart(state, token);
  }

  if (token.type === TokenTypes.DoctypeAttributeWrapperEnd) {
    return handleAttributeWrapperEnd(state, token);
  }

  if (token.type === TokenTypes.DoctypeAttributeValue) {
    return handleAttributeValue(state, token);
  }

  state.caretPosition++;

  return state;
}
