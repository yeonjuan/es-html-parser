import {
  ConstructTreeContextTypes,
  NodeTypes,
  TokenTypes,
} from "../../constants";
import { AnyToken, ConstructTreeState, ContextualTagNode } from "../../types";
import { cloneRange, cloneLocation, initAttributesIfNone } from "../../utils";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

const ATTRIBUTES_END_TOKENS = [
  TokenTypes.OpenTagEnd,
  TokenTypes.OpenStyleTagEnd,
  TokenTypes.OpenScriptTagEnd,
];

function handlerAttributeStart(
  state: ConstructTreeState<ContextualTagNode>,
  token: AnyToken
) {
  initAttributesIfNone(state.currentNode);

  // new empty attribute
  state.currentNode.attributes.push({
    type: NodeTypes.Attribute,
    range: cloneRange(token.range),
    loc: cloneLocation(token.loc),
  });

  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attribute,
  };

  return state;
}

function handleOpenTagEnd(state: ConstructTreeState<ContextualTagNode>) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualTagNode>
) {
  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handlerAttributeStart(state, token);
  }

  if (ATTRIBUTES_END_TOKENS.indexOf(token.type) !== -1) {
    return handleOpenTagEnd(state);
  }

  state.caretPosition++;

  return state;
}
