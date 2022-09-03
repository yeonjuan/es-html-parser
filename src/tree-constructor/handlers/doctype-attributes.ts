import {
  ConstructTreeContextTypes,
  NodeTypes,
  TokenTypes,
} from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { cloneRange } from "../../utils";
import { cloneLocation } from "../../utils/clone-location";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.DoctypeAttributeWrapperStart,
  TokenTypes.DoctypeAttribute,
];

function handleDoctypeEnd(state: ConstructTreeState) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleAttribute(state: ConstructTreeState, token: Token) {
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
    type: ConstructTreeContextTypes.DoctypeAttribute,
    parentRef: state.currentContext,
  };

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.DoctypeEnd) {
    return handleDoctypeEnd(state);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttribute(state, token);
  }

  state.caretPosition++;

  return state;
}
