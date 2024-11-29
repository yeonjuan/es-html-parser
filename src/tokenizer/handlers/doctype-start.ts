import { TokenizerContextTypes, TokenTypes } from "../../constants";
import { calculateTokenPosition, isWhitespace } from "../../utils";
import { AnyToken, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

export function parse(chars: CharsBuffer, state: TokenizerState) {
  const value = chars.value();
  if (isWhitespace(value)) {
    return parseWhitespace(state);
  }

  if (value === ">") {
    return parseClosingCornerBrace(state);
  }

  state.decisionBuffer.clear();
  state.sourceCode.next();
}

function generateDoctypeOpenToken(state: TokenizerState): AnyToken {
  const position = calculateTokenPosition(state, { keepBuffer: false });

  return {
    type: TokenTypes.DoctypeOpen,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
  };
}

function parseWhitespace(state: TokenizerState) {
  state.tokens.push(generateDoctypeOpenToken(state));

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.DoctypeAttributes;
}

function parseClosingCornerBrace(state: TokenizerState) {
  state.tokens.push(generateDoctypeOpenToken(state));

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.currentContext = TokenizerContextTypes.DoctypeClose;
}
