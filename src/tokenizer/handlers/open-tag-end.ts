import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenCharactersRange } from "../../utils";
import { Token, TokenizerState } from "../../types";

const contextsMap: Record<string, TokenizerContextTypes> = {
  script: TokenizerContextTypes.ScriptContent,
  style: TokenizerContextTypes.StyleContent,
  default: TokenizerContextTypes.Data,
};

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === ">") {
    return parseClosingCornerBrace(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingCornerBrace(state: TokenizerState, tokens: Token[]) {
  const range = calculateTokenCharactersRange(state, { keepBuffer: true });
  const tagName =
    state.contextParams[TokenizerContextTypes.OpenTagEnd]?.tagName;

  tokens.push({
    type: TokenTypes.OpenTagEnd,
    value: state.accumulatedContent + state.decisionBuffer,
    range: [range.startPosition, range.endPosition],
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext =
    contextsMap[tagName || "default"] || contextsMap["default"];
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.OpenTagEnd] = undefined;
}
