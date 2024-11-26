import { TokenizerContextTypes } from "../constants";
import { AnyToken, TemplateSytaxTokenOption, TokenAdapter } from "../types";
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
import { TokenizeHandler, TokenizerState } from "../types";
import { HTMLTokenizerState } from "./tokenizer-state";

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
  {
    isFinalChunk,
    positionOffset,
  }: {
    isFinalChunk?: boolean;
    positionOffset: number;
  }
) {
  let charIndex = state.caretPosition - positionOffset;

  while (charIndex < chars.length) {
    const handler = contextHandlers[state.currentContext];
    state.decisionBuffer += chars[charIndex];

    handler.parse(state.decisionBuffer, state);
    charIndex = state.caretPosition - positionOffset;
  }

  if (isFinalChunk) {
    const handler = contextHandlers[state.currentContext];
    state.caretPosition--;

    if (handler.handleContentEnd !== undefined) {
      handler.handleContentEnd(state);
    }
  }
}

export function tokenize(
  source = "",
  tokenAdapter: TokenAdapter,
  templateSyntaxTokens: TemplateSytaxTokenOption[],
  {
    isFinalChunk,
  }: {
    isFinalChunk?: boolean;
  } = {}
): { tokens: AnyToken[] } {
  isFinalChunk = isFinalChunk === undefined ? true : isFinalChunk;

  const state = new HTMLTokenizerState(source, tokenAdapter, []);

  const chars = state.decisionBuffer + source;
  const positionOffset = state.caretPosition - state.decisionBuffer.length;

  tokenizeChars(chars, state, {
    isFinalChunk,
    positionOffset,
  });

  return { tokens: state.getTokens() };
}
