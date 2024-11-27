import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenLocation,
  calculateTokenPosition,
  isWhitespace,
} from "../../utils";
import type { TokenizerState } from "../../types";

export function parse(chars: string, state: TokenizerState, charIndex: number) {
  const templateSyntaxToken = state.consumeTemplateSyntaxTokenAt(charIndex);
  if (templateSyntaxToken) {
    state.tokens.push({
      ...templateSyntaxToken,
      loc: calculateTokenLocation(state.source, templateSyntaxToken.range),
    });
    state.accumulatedContent = "";
    state.decisionBuffer = "";
    state.caretPosition = templateSyntaxToken.range[1];
    return;
  }

  if (chars === ">" || chars === "/") {
    return parseTagEnd(state);
  }

  if (chars === "=") {
    return parseEqual(state);
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

function parseEqual(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  state.tokens.push({
    type: TokenTypes.AttributeAssignment,
    value: state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.AttributeValue;
  state.caretPosition++;
}
