import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import type { TokenizerState } from "../../types";

const tokensMap = {
  script: TokenTypes.OpenScriptTagEnd,
  style: TokenTypes.OpenStyleTagEnd,
  default: TokenTypes.OpenTagEnd,
} as const;

const contextsMap = {
  script: TokenizerContextTypes.ScriptContent,
  style: TokenizerContextTypes.StyleContent,
  default: TokenizerContextTypes.Data,
} as const;

export function parse(chars: string, state: TokenizerState) {
  if (chars === ">") {
    return parseClosingCornerBrace(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingCornerBrace(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  const tagName =
    state.contextParams[TokenizerContextTypes.OpenTagEnd]?.tagName!;

  state.tokens.push({
    type: tokensMap[tagName as keyof typeof tokensMap] || tokensMap.default,
    value: state.accumulatedContent + state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext =
    contextsMap[(tagName as keyof typeof contextsMap) || "default"] ||
    contextsMap["default"];
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.OpenTagEnd] = undefined;
}
