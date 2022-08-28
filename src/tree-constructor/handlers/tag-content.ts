import {
  ConstructTreeContextTypes,
  NodeTypes,
  TokenTypes,
} from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { parseCloseTagName } from "../../utils";

function handleOpenTagStart(state: ConstructTreeState) {
  if (state.currentNode.content.children === undefined) {
    state.currentNode.content.children = [];
  }

  const tagNode = {
    type: NodeTypes.Tag,
    parentRef: state.currentNode,
    content: {},
  };

  state.currentNode.content.children.push(tagNode);

  state.currentNode = tagNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Tag,
  };

  return state;
}

function handleCloseTag(state: ConstructTreeState, token: Token) {
  const closeTagName = parseCloseTagName(token.content);

  if (closeTagName !== state.currentNode.content.name) {
    state.caretPosition++;

    return state;
  }

  state.currentContext = state.currentContext.parentRef;

  return state;
}

function handleCommentStart(state: ConstructTreeState) {
  if (state.currentNode.content.children === undefined) {
    state.currentNode.content.children = [];
  }

  const commentNode = {
    type: NodeTypes.Comment,
    parentRef: state.currentNode,
    content: {},
  };

  state.currentNode.content.children.push(commentNode);

  state.currentNode = commentNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Comment,
  };

  return state;
}

function handleDoctypeStart(state: ConstructTreeState) {
  if (state.currentNode.content.children === undefined) {
    state.currentNode.content.children = [];
  }

  const doctypeNode = {
    type: NodeTypes.Doctype,
    parentRef: state.currentNode,
    content: {},
  };

  state.currentNode.content.children.push(doctypeNode);

  state.currentNode = doctypeNode;
  state.currentContext = {
    parentRef: state.currentContext,
    type: ConstructTreeContextTypes.Doctype,
  };

  return state;
}

function handleText(state: ConstructTreeState, token: Token) {
  if (state.currentNode.content.children === undefined) {
    state.currentNode.content.children = [];
  }

  const textNode = {
    type: NodeTypes.Text,
    parentRef: state.currentNode,
    content: {
      value: token,
    },
  };

  state.currentNode.content.children.push(textNode);
  state.caretPosition++;

  return state;
}

function handleOpenTagStartScript(state: ConstructTreeState) {
  if (state.currentNode.content.children === undefined) {
    state.currentNode.content.children = [];
  }

  const scriptNode = {
    type: NodeTypes.Tag,
    parentRef: state.currentNode,
    content: {},
  };

  state.currentNode.content.children.push(scriptNode);

  state.currentNode = scriptNode;
  state.currentContext = {
    type: ConstructTreeContextTypes.ScriptTag,
    parentRef: state.currentContext,
  };

  return state;
}

function handleOpenTagStartStyle(state: ConstructTreeState) {
  if (state.currentNode.content.children === undefined) {
    state.currentNode.content.children = [];
  }

  const styleNode = {
    type: NodeTypes.Tag,
    parentRef: state.currentNode,
    content: {},
  };

  state.currentNode.content.children.push(styleNode);

  state.currentNode = styleNode;
  state.currentContext = {
    type: ConstructTreeContextTypes.StyleTag,
    parentRef: state.currentContext,
  };

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStart && token.content === "<script") {
    return handleOpenTagStartScript(state);
  }

  if (token.type === TokenTypes.OpenTagStart && token.content === "<style") {
    return handleOpenTagStartStyle(state);
  }

  if (token.type === TokenTypes.OpenTagStart) {
    return handleOpenTagStart(state);
  }

  if (token.type === TokenTypes.Text) {
    return handleText(state, token);
  }

  if (token.type === TokenTypes.CloseTag) {
    return handleCloseTag(state, token);
  }

  if (token.type === TokenTypes.CommentStart) {
    return handleCommentStart(state);
  }

  if (token.type === TokenTypes.DoctypeStart) {
    return handleDoctypeStart(state);
  }

  state.caretPosition++;

  return state;
}
