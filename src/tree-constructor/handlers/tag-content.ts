import {
  ConstructTreeContextTypes,
  NodeTypes,
  TokenTypes,
} from "../../constants";
import { ConstructTreeState, Token, TextNode } from "../../types";
import { cloneRange, parseCloseTagName } from "../../utils";
import { cloneLocation } from "../../utils/clone-location";

function handleOpenTagStart(state: ConstructTreeState, token: Token) {
  if (state.currentNode.children === undefined) {
    state.currentNode.children = [];
  }

  const tagNode = {
    type: NodeTypes.Tag,
    parentRef: state.currentNode,
    range: cloneRange(token.range),
    loc: cloneLocation(token.loc),
  };

  state.currentNode.children.push(tagNode);

  state.currentNode = tagNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Tag,
  };

  return state;
}

function handleCloseTag(state: ConstructTreeState, token: Token) {
  const closeTagName = parseCloseTagName(token.value);

  if (closeTagName !== state.currentNode.name) {
    state.caretPosition++;

    return state;
  }

  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleCommentStart(state: ConstructTreeState, token: Token) {
  if (state.currentNode.children === undefined) {
    state.currentNode.children = [];
  }

  const commentNode = {
    type: NodeTypes.Comment,
    parentRef: state.currentNode,
    range: [token.range[0], token.range[1]],
  };

  state.currentNode.children.push(commentNode);

  state.currentNode = commentNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Comment,
  };

  return state;
}

function handleDoctypeStart(state: ConstructTreeState, token: Token) {
  if (state.currentNode.children === undefined) {
    state.currentNode.children = [];
  }

  const doctypeNode = {
    type: NodeTypes.Doctype,
    parentRef: state.currentNode,
    range: [token.range[0], token.range[1]],
  };

  state.currentNode.children.push(doctypeNode);

  state.currentNode = doctypeNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Doctype,
  };

  return state;
}

function handleText(state: ConstructTreeState, token: Token) {
  if (state.currentNode.children === undefined) {
    state.currentNode.children = [];
  }

  const textNode: TextNode = {
    type: NodeTypes.Text,
    parentRef: state.currentNode,
    value: token.value,
    range: cloneRange(token.range),
    loc: cloneLocation(token.loc),
  };

  state.currentNode.children.push(textNode);
  state.caretPosition++;

  return state;
}

function handleOpenTagStartScript(state: ConstructTreeState) {
  if (state.currentNode.children === undefined) {
    state.currentNode.children = [];
  }

  const scriptNode = {
    type: NodeTypes.Tag,
    parentRef: state.currentNode,
  };

  state.currentNode.children.push(scriptNode);

  state.currentNode = scriptNode;
  state.currentContext = {
    type: ConstructTreeContextTypes.ScriptTag,
    parentRef: state.currentContext,
  };

  return state;
}

function handleOpenTagStartStyle(state: ConstructTreeState) {
  if (state.currentNode.children === undefined) {
    state.currentNode.children = [];
  }

  const styleNode = {
    type: NodeTypes.Tag,
    parentRef: state.currentNode,
  };

  state.currentNode.children.push(styleNode);

  state.currentNode = styleNode;
  state.currentContext = {
    type: ConstructTreeContextTypes.StyleTag,
    parentRef: state.currentContext,
  };

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStart && token.value === "<script") {
    return handleOpenTagStartScript(state);
  }

  if (token.type === TokenTypes.OpenTagStart && token.value === "<style") {
    return handleOpenTagStartStyle(state);
  }

  if (token.type === TokenTypes.OpenTagStart) {
    return handleOpenTagStart(state, token);
  }

  if (token.type === TokenTypes.Text) {
    return handleText(state, token);
  }

  if (token.type === TokenTypes.CloseTag) {
    return handleCloseTag(state, token);
  }

  if (token.type === TokenTypes.CommentStart) {
    return handleCommentStart(state, token);
  }

  if (token.type === TokenTypes.DoctypeStart) {
    return handleDoctypeStart(state, token);
  }

  state.caretPosition++;

  return state;
}
