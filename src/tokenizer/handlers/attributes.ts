import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange, isWhitespace } from "../../utils";
import { Token, TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === ">" || chars === "/") {
    return parseTagEnd(state);
  }

  if (chars === "=") {
    return parseEqual(state, tokens);
  }

  if (!isWhitespace(chars)) {
    return parseNoneWhitespace(state);
  }

  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseTagEnd(state: TokenizerState) {
  const tagName =
    state.contextParams[TokenizerContextTypes.Attributes]?.tagName;

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.OpenTagEnd;
  state.contextParams[TokenizerContextTypes.OpenTagEnd] = { tagName: tagName! };
  state.contextParams[TokenizerContextTypes.Attributes] = undefined;
}

function parseNoneWhitespace(state: TokenizerState) {
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.AttributeKey;
  state.caretPosition++;
}

function parseEqual(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: true });
  tokens.push({
    type: TokenTypes.AttributeAssignment,
    value: state.decisionBuffer,
    range: [range.startPosition, range.endPosition],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.AttributeValue;
  state.caretPosition++;
}
