import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenCharactersRange,
  isWhitespace,
  parseOpenTagName,
} from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
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

function parseWhitespace(state: TokenizerState, tokens: Token[]) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });

  tokens.push({
    type: TokenTypes.OpenTagStart,
    value: state.accumulatedContent,
    range: [range.startPosition, range.endPosition],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
  state.contextParams[TokenizerContextTypes.Attributes] = { tagName };
  state.caretPosition++;
}

function parseTagEnd(state: TokenizerState, tokens: Token[]) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const range = calculateTokenCharactersRange(state, { keepBuffer: false });

  tokens.push({
    type: TokenTypes.OpenTagStart,
    value: state.accumulatedContent,
    range: [range.startPosition, range.endPosition],
  });

  state.decisionBuffer = "";
  state.accumulatedContent = "";
  state.currentContext = TokenizerContextTypes.OpenTagEnd;
  state.contextParams[TokenizerContextTypes.OpenTagEnd] = { tagName };
}
