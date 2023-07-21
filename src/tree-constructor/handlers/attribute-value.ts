import { TokenTypes } from "../../constants";
import {
  AnyToken,
  AttributeValueNode,
  AttributeValueWrapperEndNode,
  AttributeValueWrapperStartNode,
  ConstructTreeState,
  ContextualTagNode,
  Token,
} from "../../types";
import {
  cloneLocation,
  cloneRange,
  createNodeFrom,
  updateNodeEnd,
} from "../../utils";

const VALUE_END_TOKENS = [
  TokenTypes.OpenTagEnd,
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
  TokenTypes.OpenScriptTagEnd,
  TokenTypes.OpenStyleTagEnd,
];

function getLastAttribute(state: ConstructTreeState<ContextualTagNode>) {
  const attributes = state.currentNode.attributes;

  return attributes[attributes.length - 1];
}

function handleValueEnd(
  state: ConstructTreeState<ContextualTagNode>
): ConstructTreeState<any> {
  state.currentContext = state.currentContext.parentRef;
  return state;
}

function handleAttributeValue(
  state: ConstructTreeState<ContextualTagNode>,
  token: AnyToken
): ConstructTreeState<ContextualTagNode> {
  const attribute = getLastAttribute(state);

  attribute.value = createNodeFrom(token) as AttributeValueNode;
  updateNodeEnd(attribute, token);
  state.caretPosition++;
  return state;
}

function handleAttributeValueWrapperStart(
  state: ConstructTreeState<ContextualTagNode>,
  token: AnyToken
): ConstructTreeState<ContextualTagNode> {
  const attribute = getLastAttribute(state);

  attribute.startWrapper = createNodeFrom(
    token
  ) as AttributeValueWrapperStartNode;

  if (!attribute.key) {
    attribute.range = cloneRange(token.range);
    attribute.loc = cloneLocation(token.loc);
  }
  state.caretPosition++;

  return state;
}

function handleAttributeValueWrapperEnd(
  state: ConstructTreeState<ContextualTagNode>,
  token: Token<TokenTypes.AttributeValueWrapperEnd>
): ConstructTreeState<ContextualTagNode> {
  const attribute = getLastAttribute(state);

  attribute.endWrapper = createNodeFrom(token) as AttributeValueWrapperEndNode;
  updateNodeEnd(attribute, token);

  state.caretPosition++;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualTagNode>
): ConstructTreeState<ContextualTagNode> {
  if (VALUE_END_TOKENS.indexOf(token.type) !== -1) {
    return handleValueEnd(state);
  }

  if (token.type === TokenTypes.AttributeValue) {
    return handleAttributeValue(state, token);
  }

  if (token.type === TokenTypes.AttributeValueWrapperStart) {
    return handleAttributeValueWrapperStart(state, token);
  }

  if (token.type === TokenTypes.AttributeValueWrapperEnd) {
    return handleAttributeValueWrapperEnd(state, token);
  }

  state.caretPosition++;

  return state;
}
