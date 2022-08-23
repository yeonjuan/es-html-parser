import { ConstructTreeContextTypes, NodeTypes } from "../constants";
import { ConstructTreeState, Token } from "../types";
import {
  tagContent,
  tag,
  tagName,
  attributes,
  attribute,
  attributeValue,
  comment,
  doctype,
  doctypeAttributes,
  doctypeAttribute,
  scriptTag,
  styleTag,
} from "./handlers";

const contextHandlers = {
  [ConstructTreeContextTypes.TagContent]: tagContent,
  [ConstructTreeContextTypes.Tag]: tag,
  [ConstructTreeContextTypes.TagName]: tagName,
  [ConstructTreeContextTypes.Attribute]: attribute,
  [ConstructTreeContextTypes.Attributes]: attributes,
  [ConstructTreeContextTypes.AttributeValue]: attributeValue,
  [ConstructTreeContextTypes.Comment]: comment,
  [ConstructTreeContextTypes.Doctype]: doctype,
  [ConstructTreeContextTypes.DoctypeAttributes]: doctypeAttributes,
  [ConstructTreeContextTypes.DoctypeAttribute]: doctypeAttribute,
  [ConstructTreeContextTypes.ScriptTag]: scriptTag,
  [ConstructTreeContextTypes.StyleTag]: styleTag,
};

export function constructTree(tokens: Token[], existingState?: any) {
  let state = existingState;

  if (existingState === undefined) {
    const rootContext = {
      type: ConstructTreeContextTypes.TagContent,
      parentRef: undefined,
      content: [],
    };
    const rootNode = {
      nodeType: NodeTypes.Document,
      parentRef: undefined,
      content: {},
    };

    state = {
      caretPosition: 0,
      currentContext: rootContext,
      currentNode: rootNode,
      rootNode,
    };
  }
  const positionOffset = state.caretPosition;
  processTokens(tokens, state, positionOffset);

  return { state, ast: state.rootNode };
}

function processTokens(
  tokens: Token[],
  state: ConstructTreeState,
  positionOffset: number
) {
  let tokenIndex = state.caretPosition - positionOffset;
  while (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex];
    // @ts-ignore
    const handler = contextHandlers[state.currentContext.type].construct;
    state = handler(token, state);
    tokenIndex = state.caretPosition - positionOffset;
  }

  return state;
}
