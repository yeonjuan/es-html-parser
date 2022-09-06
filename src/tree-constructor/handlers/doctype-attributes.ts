import {
  ConstructTreeContextTypes,
  NodeTypes,
  TokenTypes,
} from "../../constants";
import {
  AnyToken,
  ConstructTreeState,
  ContextualDoctypeNode,
} from "../../types";
import { cloneRange, cloneLocation, initAttributesIfNone } from "../../utils";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.DoctypeAttributeWrapperStart,
  TokenTypes.DoctypeAttributeValue,
];

function handleDoctypeEnd(state: ConstructTreeState<ContextualDoctypeNode>) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleAttribute(
  state: ConstructTreeState<ContextualDoctypeNode>,
  token: AnyToken
) {
  initAttributesIfNone(state.currentNode);

  // new empty attribute
  state.currentNode.attributes.push({
    type: NodeTypes.DoctypeAttribute,
    range: cloneRange(token.range),
    loc: cloneLocation(token.loc),
  });

  state.currentContext = {
    type: ConstructTreeContextTypes.DoctypeAttribute,
    parentRef: state.currentContext,
  };

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualDoctypeNode>
) {
  if (token.type === TokenTypes.DoctypeEnd) {
    return handleDoctypeEnd(state);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttribute(state, token);
  }

  state.caretPosition++;

  return state;
}
