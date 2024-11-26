import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenPosition,
  isWhitespace,
  parseOpenTagName,
} from "../../utils";
import type { TokenizerState } from "../../types";

const tokensMap = {
  script: TokenTypes.OpenScriptTagStart,
  style: TokenTypes.OpenStyleTagStart,
  default: TokenTypes.OpenTagStart,
} as const;

export function parse(chars: string, state: TokenizerState) {
  if (chars === ">" || chars === "/") {
    return parseTagEnd(state);
  }

  if (isWhitespace(chars)) {
    return parseWhitespace(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWhitespace(state: TokenizerState) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: tokensMap[tagName as keyof typeof tokensMap] || tokensMap.default,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
  state.contextParams[TokenizerContextTypes.Attributes] = { tagName };
  state.caretPosition++;
}

function parseTagEnd(state: TokenizerState) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const position = calculateTokenPosition(state, { keepBuffer: false });

  state.tokens.push({
    type: tokensMap[tagName as keyof typeof tokensMap] || tokensMap.default,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  state.decisionBuffer = "";
  state.accumulatedContent = "";
  state.currentContext = TokenizerContextTypes.OpenTagEnd;
  state.contextParams[TokenizerContextTypes.OpenTagEnd] = { tagName };
}
