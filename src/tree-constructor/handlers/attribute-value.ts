import { TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

const VALUE_END_TOKENS = [
  TokenTypes.OpenTagEnd,
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
  TokenTypes.OpenTagEndScript,
  TokenTypes.OpenTagEndStyle,
];

function getLastAttribute(state: ConstructTreeState) {
  const attributes = state.currentNode.attributes;

  return attributes[attributes.length - 1];
}

function handleValueEnd(state: ConstructTreeState): ConstructTreeState {
  state.currentContext = state.currentContext.parentRef;
  return state;
}

function handleAttributeValue(
  state: ConstructTreeState,
  token: Token
): ConstructTreeState {
  const attribute = getLastAttribute(state);

  attribute.value = createNodeFrom(token);
  state.caretPosition++;
  return state;
}

function handleAttributeValueWrapperStart(
  state: ConstructTreeState,
  token: Token
): ConstructTreeState {
  const attribute = getLastAttribute(state);

  attribute.startWrapper = createNodeFrom(token);
  if (!attribute.key) {
    attribute.range = [token.range[0], token.range[1]];
    attribute.loc = {
      start: {
        ...token.loc.start,
      },
      end: {
        ...token.loc.end,
      },
    };
  }
  state.caretPosition++;

  return state;
}

function handleAttributeValueWrapperEnd(
  state: ConstructTreeState,
  token: Token
): ConstructTreeState {
  const attribute = getLastAttribute(state);

  attribute.endWrapper = createNodeFrom(token);
  updateNodeEnd(attribute, token);

  state.caretPosition++;

  return state;
}

export function construct(
  token: Token,
  state: ConstructTreeState
): ConstructTreeState {
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
