import { TokenizerContextTypes } from "../constants";
import { AnyToken, TokenAdapter, TokenizerState } from "../types";
import {
  attributeKey,
  attributeValueBare,
  attributes,
  closeTag,
  commentContent,
  data,
  doctypeAttributeBare,
  doctypeAttributes,
  DoctypeClose,
  DoctypeOpen,
  openTagEnd,
  openTagStart,
  scriptTagContent,
  doctypeAttributeWrapped,
  styleTagContent,
  attributeValue,
  attributeValueWrapped,
  noop,
} from "./handlers";
import { TokenizeHandler } from "../types";
import { CharPointer } from "./pointer";

const contextHandlers: Record<TokenizerContextTypes, TokenizeHandler> = {
  [TokenizerContextTypes.Data]: data,
  [TokenizerContextTypes.OpenTagStart]: openTagStart,
  [TokenizerContextTypes.CloseTag]: closeTag,
  [TokenizerContextTypes.Attributes]: attributes,
  [TokenizerContextTypes.OpenTagEnd]: openTagEnd,
  [TokenizerContextTypes.AttributeKey]: attributeKey,
  [TokenizerContextTypes.AttributeValue]: attributeValue,
  [TokenizerContextTypes.AttributeValueBare]: attributeValueBare,
  [TokenizerContextTypes.AttributeValueWrapped]: attributeValueWrapped,
  [TokenizerContextTypes.ScriptContent]: scriptTagContent,
  [TokenizerContextTypes.StyleContent]: styleTagContent,
  [TokenizerContextTypes.DoctypeOpen]: DoctypeOpen,
  [TokenizerContextTypes.DoctypeClose]: DoctypeClose,
  [TokenizerContextTypes.DoctypeAttributes]: doctypeAttributes,
  [TokenizerContextTypes.DoctypeAttributeWrapped]: doctypeAttributeWrapped,
  [TokenizerContextTypes.DoctypeAttributeBare]: doctypeAttributeBare,
  [TokenizerContextTypes.CommentContent]: commentContent,
  [TokenizerContextTypes.CommentOpen]: noop,
  [TokenizerContextTypes.CommentClose]: noop,
};

function tokenizeChars(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  while (state.pointer.index < chars.length) {
    const handler = contextHandlers[state.currentContext];
    state.decisionBuffer += chars[state.pointer.index];

    handler.parse(state.decisionBuffer, state, tokens);
  }

  const handler = contextHandlers[state.currentContext];
  state.pointer.prev();

  if (handler.handleContentEnd !== undefined) {
    handler.handleContentEnd(state, tokens);
  }
}

export function tokenize(
  source = "",
  tokenAdapter: TokenAdapter
): { state: TokenizerState; tokens: AnyToken[] } {
  const tokens: AnyToken[] = [];
  const state: TokenizerState = {
    currentContext: TokenizerContextTypes.Data,
    contextParams: {},
    decisionBuffer: "",
    accumulatedContent: "",
    source,
    pointer: new CharPointer(),
    tokens: {
      push(token: AnyToken) {
        tokens.push({
          ...token,
          range: tokenAdapter.finalizeRange(token),
          loc: tokenAdapter.finalizeLocation(token),
        });
      },
    },
  };

  const chars = state.decisionBuffer + source;

  tokenizeChars(chars, state, tokens);

  return { state, tokens };
}
