import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

const ATTRIBUTES_END_TOKENS = [TokenTypes.OpenTagEnd];

function handlerAttributeStart(state: ConstructTreeState) {
  if (state.currentNode.attributes === undefined) {
    state.currentNode.attributes = [];
  }

  // new empty attribute
  state.currentNode.attributes.push({});

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
    return handlerAttributeStart(state);
  }

  if (ATTRIBUTES_END_TOKENS.indexOf(token.type) !== -1) {
    return handleOpenTagEnd(state);
  }

  state.caretPosition++;

  return state;
}
