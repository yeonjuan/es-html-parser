import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.DoctypeAttributeWrapperStart,
  TokenTypes.DoctypeAttribute,
];

function handleDoctypeEnd(state: ConstructTreeState) {
  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleAttribute(state: ConstructTreeState) {
  if (state.currentNode.content.attributes === undefined) {
    state.currentNode.content.attributes = [];
  }

  // new empty attribute
  state.currentNode.content.attributes.push({});

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
    return handleAttribute(state);
  }

  state.caretPosition++;

  return state;
}
