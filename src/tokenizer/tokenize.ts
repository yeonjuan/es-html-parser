import { TokenizerContextTypes } from "../constants";
import { AnyToken, Range, TokenAdapter, TokenizerState } from "../types";
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
import { SourceCode } from "./source-code";
import { CharsBuffer } from "./chars-buffer";

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

function tokenizeChars(state: TokenizerState) {
  while (!state.sourceCode.isEof()) {
    const handler = contextHandlers[state.currentContext];
    state.decisionBuffer.concat(state.sourceCode.current());
    handler.parse(state.decisionBuffer, state);
  }

  const handler = contextHandlers[state.currentContext];
  state.sourceCode.prev();

  if (handler.handleContentEnd !== undefined) {
    handler.handleContentEnd(state);
  }
}

export function tokenize(
  source = "",
  tokenAdapter: TokenAdapter,
  templateRanges?: Range[]
): { state: TokenizerState; tokens: AnyToken[] } {
  const tokens: AnyToken[] = [];
  const state: TokenizerState = {
    currentContext: TokenizerContextTypes.Data,
    contextParams: {},
    mode: templateRanges ? "template" : "default",
    templateRanges: templateRanges || [],
    decisionBuffer: new CharsBuffer(),
    accumulatedContent: new CharsBuffer(),
    tokenAdapter,
    sourceCode: new SourceCode(source, templateRanges || []),
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

  tokenizeChars(state);

  return { state, tokens };
}
