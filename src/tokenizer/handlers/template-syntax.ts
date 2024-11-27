import { TokenTypes } from "../../constants";
import { AnyToken, TemplateSytaxToken, TokenizerState } from "../../types";
import { calculateTokenLocation, calculateTokenPosition } from "../../utils";
function generateTextToken(state: TokenizerState): AnyToken {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  return {
    type: TokenTypes.Text,
    value: state.accumulatedContent,
    range: position.range,
    loc: position.loc,
  };
}
export function parse(
  token: TemplateSytaxToken,
  state: TokenizerState,
  charIndex: number
) {
  if (charIndex >= token.range[1]) {
    return parseTemplateSyntax(token, state, charIndex);
  }
  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseTemplateSyntax(
  token: TemplateSytaxToken,
  state: TokenizerState,
  charIndex: number
) {
  if (charIndex >= token.range[1]) {
    if (state.accumulatedContent.length !== 0) {
      state.tokens.push(generateTextToken(state));
    }
    state.tokens.push({
      ...state.consumeTemplateSyntaxTokenAt(charIndex - 1)!,
      loc: calculateTokenLocation(state.source, token.range),
    });
    state.accumulatedContent = "";
    state.decisionBuffer = "";
    state.caretPosition = token.range[1];
    return;
  }
  state.accumulatedContent = state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}
