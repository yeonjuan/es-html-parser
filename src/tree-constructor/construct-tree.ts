import { ConstructTreeContextTypes, NodeTypes } from "../constants";
import { ConstructTreeState, DocumentNode, Range, AnyToken } from "../types";
import { SourceLocation } from "../types/source-location";
import { first, last } from "../utils";
import { cloneLocation } from "../utils/clone-location";
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

const EMPTY_RANGE: Range = [0, 0];
const EMPTY_LOC: SourceLocation = {
  start: {
    line: 1,
    column: 0,
  },
  end: {
    line: 1,
    column: 0,
  },
};

export function constructTree(
  tokens: AnyToken[],
  existingState: ConstructTreeState<any> | undefined
) {
  let state = existingState;

  if (existingState === undefined) {
    const rootContext = {
      type: ConstructTreeContextTypes.TagContent,
      parentRef: undefined,
      content: [],
    };
    const lastToken = last(tokens);
    const firstToken = first(tokens);
    const range: Range = lastToken ? [0, lastToken.range[1]] : EMPTY_RANGE;
    const loc = lastToken
      ? {
          start: cloneLocation(firstToken.loc).start,
          end: cloneLocation(lastToken.loc).end,
        }
      : EMPTY_LOC;

    loc.start.line = 1;

    const rootNode: DocumentNode = {
      type: NodeTypes.Document,
      range,
      children: [],
      loc,
    };

    state = {
      caretPosition: 0,
      currentContext: rootContext,
      currentNode: rootNode,
      rootNode,
    };
  }
  const positionOffset = state!.caretPosition;
  processTokens(tokens, state!, positionOffset);

  return { state, ast: state!.rootNode };
}

function processTokens(
  tokens: AnyToken[],
  state: ConstructTreeState<any>,
  positionOffset: number
) {
  let tokenIndex = state.caretPosition - positionOffset;
  while (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex];
    const handler = contextHandlers[state.currentContext.type].construct;
    state = handler(token, state);
    tokenIndex = state.caretPosition - positionOffset;
  }

  return state;
}
