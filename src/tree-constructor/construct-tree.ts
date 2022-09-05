import { ConstructTreeContextTypes, NodeTypes } from "../constants";
import { ConstructTreeState, Token, DocumentNode, Range } from "../types";
import { last } from "../utils";
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

export function constructTree(
  tokens: Token[],
  existingState: ConstructTreeState | undefined
) {
  let state = existingState;

  if (existingState === undefined) {
    const rootContext = {
      type: ConstructTreeContextTypes.TagContent,
      parentRef: undefined,
      content: [],
    };
    const lastToken = last(tokens);
    const range: Range = lastToken ? [0, lastToken.range[1]] : [0, 0];
    const loc = lastToken
      ? cloneLocation(lastToken.loc)
      : {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 0,
          },
        };
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
  tokens: Token[],
  state: ConstructTreeState,
  positionOffset: number
) {
  let tokenIndex = state.caretPosition - positionOffset;
  while (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex];
    // debugger;
    // @ts-ignore
    const handler = contextHandlers[state.currentContext.type].construct;
    state = handler(token, state);
    tokenIndex = state.caretPosition - positionOffset;
  }

  return state;
}
