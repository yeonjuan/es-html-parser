import { TokenizerContextTypes } from "../constants";
import { AnyToken, TokenizerState } from "../types";
import {
  attributeKey,
  attributeValueBare,
  attributes,
  closeTag,
  commentContent,
  data,
  doctypeAttributeBare,
  doctypeAttributes,
  doctypeEnd,
  doctypeStart,
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
  [TokenizerContextTypes.DoctypeStart]: doctypeStart,
  [TokenizerContextTypes.DoctypeEnd]: doctypeEnd,
  [TokenizerContextTypes.DoctypeAttributes]: doctypeAttributes,
  [TokenizerContextTypes.DoctypeAttributeWrapped]: doctypeAttributeWrapped,
  [TokenizerContextTypes.DoctypeAttributeBare]: doctypeAttributeBare,
  [TokenizerContextTypes.CommentContent]: commentContent,
  [TokenizerContextTypes.CommentStart]: noop,
  [TokenizerContextTypes.CommentEnd]: noop,
};

function tokenizeChars(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[],
  {
    isFinalChunk,
    positionOffset,
  }: {
    isFinalChunk?: boolean;
    positionOffset: number;
  }
) {
  let charIndex = state.caretPosition - positionOffset;
  let charIndexBefore = charIndex;
  while (charIndex < chars.length) {
    const handler = contextHandlers[state.currentContext];
    state.decisionBuffer += chars[charIndex];

    if (charIndexBefore !== charIndex && chars[charIndex] === "\n") {
      state.linePosition++;
    }
    charIndexBefore = charIndex;

    handler.parse(state.decisionBuffer, state, tokens);
    charIndex = state.caretPosition - positionOffset;
  }

  if (isFinalChunk) {
    const handler = contextHandlers[state.currentContext];
    state.caretPosition--;

    if (handler.handleContentEnd !== undefined) {
      handler.handleContentEnd(state, tokens);
    }
  }
}

export function tokenize(
  source = "",
  {
    isFinalChunk,
  }: {
    isFinalChunk?: boolean;
  } = {}
): { state: TokenizerState; tokens: AnyToken[] } {
  isFinalChunk = isFinalChunk === undefined ? true : isFinalChunk;
  const state = {
    currentContext: TokenizerContextTypes.Data,
    contextParams: {},
    decisionBuffer: "",
    accumulatedContent: "",
    caretPosition: 0,
    linePosition: 1,
    source,
  };

  const chars = state.decisionBuffer + source;
  const tokens: AnyToken[] = [];
  const positionOffset = state.caretPosition - state.decisionBuffer.length;

  tokenizeChars(chars, state, tokens, {
    isFinalChunk,
    positionOffset,
  });

  return { state, tokens };
}
