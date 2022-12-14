import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenPosition,
  isWhitespace,
  parseOpenTagName,
} from "../../utils";
import { AnyToken, TokenizerState } from "../../types";

const tokensMap: Record<string, TokenTypes> = {
  script: TokenTypes.OpenScriptTagStart,
  style: TokenTypes.OpenStyleTagStart,
  default: TokenTypes.OpenTagStart,
};

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  if (chars === ">" || chars === "/") {
    return parseTagEnd(state, tokens);
  }

  if (isWhitespace(chars)) {
    return parseWhitespace(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWhitespace(state: TokenizerState, tokens: AnyToken[]) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const position = calculateTokenPosition(state, { keepBuffer: false });

  tokens.push({
    type: tokensMap[tagName] || tokensMap.default,
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

function parseTagEnd(state: TokenizerState, tokens: AnyToken[]) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const position = calculateTokenPosition(state, { keepBuffer: false });

  tokens.push({
    type: tokensMap[tagName] || tokensMap.default,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  });

  state.decisionBuffer = "";
  state.accumulatedContent = "";
  state.currentContext = TokenizerContextTypes.OpenTagEnd;
  state.contextParams[TokenizerContextTypes.OpenTagEnd] = { tagName };
}
