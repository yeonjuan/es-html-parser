import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenPosition,
  isWhitespace,
  parseOpenTagName,
} from "../../utils";
import type { TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

const tokensMap = {
  script: TokenTypes.OpenScriptTagStart,
  style: TokenTypes.OpenStyleTagStart,
  default: TokenTypes.OpenTagStart,
} as const;

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (chars.value() === ">" || chars.value() === "/") {
    return parseTagEnd(state);
  }

  if (isWhitespace(chars.value())) {
    return parseWhitespace(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseWhitespace(state: TokenizerState) {
  const tagName = parseOpenTagName(state.accumulatedContent.value());
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: tokensMap[tagName as keyof typeof tokensMap] || tokensMap.default,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.Attributes;
  state.contextParams[TokenizerContextTypes.Attributes] = { tagName };
  state.sourceCode.next();
}

function parseTagEnd(state: TokenizerState) {
  const tagName = parseOpenTagName(state.accumulatedContent.value());
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: tokensMap[tagName as keyof typeof tokensMap] || tokensMap.default,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
  });

  state.decisionBuffer.clear();
  state.accumulatedContent.clear();
  state.currentContext = TokenizerContextTypes.OpenTagEnd;
  state.contextParams[TokenizerContextTypes.OpenTagEnd] = { tagName };
}
