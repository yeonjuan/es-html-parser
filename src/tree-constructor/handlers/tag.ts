import { ConstructTreeContextTypes, TokenTypes } from "../../constants";
import {
  AnyToken,
  CloseTagNode,
  ConstructTreeState,
  ContextualTagNode,
  OpenTagEndNode,
  OpenTagStartNode,
  Token,
} from "../../types";
import { createNodeFrom, updateNodeEnd } from "../../utils";

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

function handleOpenTagStart(
  state: ConstructTreeState<ContextualTagNode>,
  token: Token<TokenTypes.OpenTagStart>
) {
  state.currentNode.openStart = createNodeFrom(token) as OpenTagStartNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.TagName,
  };

  return state;
}

function handleAttributeStart(state: ConstructTreeState<ContextualTagNode>) {
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Attributes,
  };

  return state;
}

function handleOpenTagEnd(
  state: ConstructTreeState<ContextualTagNode>,
  token: Token<TokenTypes.OpenTagEnd>
) {
  const tagName = state.currentNode.name;

  state.currentNode.openEnd = createNodeFrom(token) as OpenTagEndNode;

  updateNodeEnd(state.currentNode, token);

  if (
    SELF_CLOSING_TAGS.indexOf(tagName!) !== -1 ||
    state.currentNode.openEnd.value === "/>"
  ) {
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

function handleCloseTag(
  state: ConstructTreeState<ContextualTagNode>,
  token: Token<TokenTypes.CloseTag>
) {
  state.currentNode.close = createNodeFrom(token) as CloseTagNode;
  updateNodeEnd(state.currentNode, token);

  state.currentNode = state.currentNode.parentRef;
  state.currentContext = state.currentContext.parentRef;
  state.caretPosition++;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualTagNode>
) {
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
