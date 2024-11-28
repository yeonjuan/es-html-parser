import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import type { TokenizerState } from "../../types";

const tokensMap: Record<string, TokenTypes> = {
  script: TokenTypes.OpenScriptTagEnd,
  style: TokenTypes.OpenStyleTagEnd,
  default: TokenTypes.OpenTagEnd,
};

const contextsMap: Record<string, TokenizerContextTypes> = {
  script: TokenizerContextTypes.ScriptContent,
  style: TokenizerContextTypes.StyleContent,
  default: TokenizerContextTypes.Data,
};

export function parse(chars: string, state: TokenizerState) {
  if (chars === ">") {
    return parseClosingCornerBrace(state);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.pointer.next();
}

function parseClosingCornerBrace(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  const tagName =
    state.contextParams[TokenizerContextTypes.OpenTagEnd]?.tagName!;

  state.tokens.push({
    type: tokensMap[tagName] || tokensMap.default,
    value: state.accumulatedContent + state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext =
    contextsMap[tagName || "default"] || contextsMap["default"];
  state.pointer.next();

  state.contextParams[TokenizerContextTypes.OpenTagEnd] = undefined;
}
