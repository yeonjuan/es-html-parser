import {
  ConstructTreeContextTypes,
  NodeTypes,
  TokenTypes,
} from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { cloneRange } from "../../utils";
import { cloneLocation } from "../../utils/clone-location";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

const ATTRIBUTES_END_TOKENS = [
  TokenTypes.OpenTagEnd,
  TokenTypes.OpenTagEndStyle,
  TokenTypes.OpenTagEndScript,
];

function handlerAttributeStart(state: ConstructTreeState, token: Token) {
  if (state.currentNode.attributes === undefined) {
    state.currentNode.attributes = [];
  }

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

function handleOpenTagEnd(state: ConstructTreeState) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handlerAttributeStart(state, token);
  }

  if (ATTRIBUTES_END_TOKENS.indexOf(token.type) !== -1) {
    return handleOpenTagEnd(state);
  }

  state.caretPosition++;

  return state;
}
