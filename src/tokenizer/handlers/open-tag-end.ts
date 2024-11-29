import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import type { TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

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

export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (chars.value() === ">") {
    return parseClosingCornerBrace(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function parseClosingCornerBrace(state: TokenizerState) {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  const tagName = state.contextParams[TokenizerContextTypes.OpenTagEnd]
    ?.tagName! as keyof typeof tokensMap;

  state.tokens.push({
    type: tokensMap[tagName] || tokensMap.default,
    value: state.accumulatedContent.value() + state.decisionBuffer.value(),
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext =
    contextsMap[tagName || "default"] || contextsMap["default"];
  state.sourceCode.next();

  state.contextParams[TokenizerContextTypes.OpenTagEnd] = undefined;
}
