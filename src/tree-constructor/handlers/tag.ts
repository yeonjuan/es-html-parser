import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { cloneLocation } from "../../utils/clone-location";

const ATTRIBUTE_START_TOKENS = [
  TokenTypes.AttributeKey,
  TokenTypes.AttributeAssignment,
];

const SELF_CLOSING_TAGS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

function handleOpenTagStart(state: ConstructTreeState, token: Token) {
  state.currentNode.openStart = token;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.TagName,
  };

  return state;
}

function handleAttributeStart(state: ConstructTreeState) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attributes,
  };

  return state;
}

function handleOpenTagEnd(state: ConstructTreeState, token: Token) {
  const tagName = state.currentNode.name;

  state.currentNode.openEnd = token;
  state.currentNode.range[1] = token.range[1];

  const loc = cloneLocation(token.loc);
  state.currentNode.loc.end = loc.end;

  if (SELF_CLOSING_TAGS.indexOf(tagName) !== -1) {
    state.currentNode.selfClosing = true;
    state.currentNode = state.currentNode.parentRef;
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;

    return state;
  }

  state.currentNode.selfClosing = false;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.TagContent,
  };
  state.caretPosition++;

  return state;
}

function handleCloseTag(state: ConstructTreeState, token: Token) {
  state.currentNode.close = token;
  state.currentNode.range[1] = token.range[1];
  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStart) {
    return handleOpenTagStart(state, token);
  }

  if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
    return handleAttributeStart(state);
  }

  if (token.type === TokenTypes.OpenTagEnd) {
    return handleOpenTagEnd(state, token);
  }

  if (token.type === TokenTypes.CloseTag) {
    return handleCloseTag(state, token);
  }

  state.caretPosition++;

  return state;
}
