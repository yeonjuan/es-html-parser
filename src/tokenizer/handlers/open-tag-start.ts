import { TokenizerContextTypes, TokenTypes } from "../../constants";
import {
  calculateTokenPosition,
  isWhitespace,
  parseOpenTagName,
} from "../../utils";
import { Token, TokenizerState } from "../../types";

const tokensMap: Record<string, TokenTypes> = {
  script: TokenTypes.OpenTagStartScript,
  style: TokenTypes.OpenTagStartStyle,
  default: TokenTypes.OpenTagStart,
};

export function parse(chars: string, state: TokenizerState, tokens: Token[]) {
  if (chars === ">" || chars === "/") {
    return parseTagEnd(state, tokens);
  }
  if (isWhitespace(chars)) {
    return parseWhitespace(state, tokens, chars === "\n");
  }

  state.accumulatedContent += state.decisionBuffer;
  state.decisionBuffer = "";
  state.caretPosition++;
}

function parseWhitespace(
  state: TokenizerState,
  tokens: Token[],
  isNewLine: boolean
) {
  const tagName = parseOpenTagName(state.accumulatedContent);
  const position = calculateTokenPosition(state, { keepBuffer: false });

  tokens.push({
    type: tokensMap[tagName] || tokensMap.default,
    value: state.accumulatedContent,
    range: position.range,
    loc: {
      start: position.loc.start,
      end: {
        line: position.loc.end.line - Number(isNewLine),
      },
    },
  });

  state.accumulatedContent = "";
  state.decisionBuffer = "";
  state.currentContext = TokenizerContextTypes.Attributes;
  state.contextParams[TokenizerContextTypes.Attributes] = { tagName };
  state.caretPosition++;
}

function parseTagEnd(state: TokenizerState, tokens: Token[]) {
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
