import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";

const ATTRIBUTES_START_TOKENS = [
  TokenTypes.DoctypeAttributeWrapperStart,
  TokenTypes.DoctypeAttribute,
];

function handleDoctypeStart(state: ConstructTreeState, token: Token) {
  state.currentNode.start = token;
  state.caretPosition++;

  return state;
}

function handleDoctypeEnd(state: ConstructTreeState, token: Token) {
  state.currentNode.end = token;
  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

function handleDoctypeAttributes(state: ConstructTreeState) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.DoctypeAttributes,
  };

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
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
