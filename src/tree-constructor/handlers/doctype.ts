import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import {
  AnyToken,
  ConstructTreeState,
  ContextualDoctypeNode,
  DoctypeEndNode,
  DoctypeStartNode,
} from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

const ATTRIBUTES_START_TOKENS = [
  TokenTypes.DoctypeAttributeWrapperStart,
  TokenTypes.DoctypeAttributeValue,
];

function handleDoctypeStart(
  state: ConstructTreeState<ContextualDoctypeNode>,
  token: AnyToken
) {
  state.currentNode.start = createNodeFrom(token) as DoctypeStartNode;
  state.caretPosition++;

  return state;
}

function handleDoctypeEnd(
  state: ConstructTreeState<ContextualDoctypeNode>,
  token: AnyToken
) {
  state.currentNode.end = createNodeFrom(token) as DoctypeEndNode;
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

function handleDoctypeAttributes(
  state: ConstructTreeState<ContextualDoctypeNode>
) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.DoctypeAttributes,
  };

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualDoctypeNode>
) {
  if (token.type === TokenTypes.DoctypeStart) {
    return handleDoctypeStart(state, token);
  }

  if (token.type === TokenTypes.DoctypeEnd) {
    return handleDoctypeEnd(state, token);
  }

  if (ATTRIBUTES_START_TOKENS.indexOf(token.type) !== -1) {
    return handleDoctypeAttributes(state);
  }

  state.caretPosition++;

  return state;
}
