import { TokenizerContextTypes } from "../constants";
import { AnyToken, TemplateSytaxToken, TokenAdapter } from "../types";
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
  }: {
    isFinalChunk?: boolean;
  }
) {
  let charIndex = state.caretPosition;

  while (charIndex < chars.length) {
    const handler = contextHandlers[state.currentContext];
    state.decisionBuffer += chars[charIndex];

    handler.parse(state.decisionBuffer, state, charIndex);

    charIndex = state.caretPosition;
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
  templateSyntaxTokens: TemplateSytaxToken[],
  {
    isFinalChunk,
  }: {
    isFinalChunk?: boolean;
  } = {}
): { tokens: AnyToken[] } {
  isFinalChunk = isFinalChunk === undefined ? true : isFinalChunk;

  const state = new HTMLTokenizerState(
    source,
    tokenAdapter,
    templateSyntaxTokens
  );

  const chars = state.decisionBuffer + source;

  tokenizeChars(chars, state, {
    isFinalChunk,
  });

  return { tokens: state.getTokens() };
}
