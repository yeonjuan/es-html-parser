import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition } from "../../utils";
import { AnyToken, TokenizerState } from "../../types";

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

export function parse(
  chars: string,
  state: TokenizerState,
  tokens: AnyToken[]
) {
  if (chars === ">") {
    return parseClosingCornerBrace(state, tokens);
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseClosingCornerBrace(state: TokenizerState, tokens: AnyToken[]) {
  const position = calculateTokenPosition(state, { keepBuffer: true });
  const tagName =
    state.contextParams[TokenizerContextTypes.OpenTagEnd]?.tagName!;

  tokens.push({
    type: tokensMap[tagName] || tokensMap.default,
    value: state.accumulatedContent + state.decisionBuffer,
    range: position.range,
    loc: position.loc,
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext =
    contextsMap[tagName || "default"] || contextsMap["default"];
  state.caretPosition++;

  state.contextParams[TokenizerContextTypes.OpenTagEnd] = undefined;
}
