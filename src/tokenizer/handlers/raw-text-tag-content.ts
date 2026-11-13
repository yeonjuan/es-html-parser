import {
  TokenizerContextTypes,
  INCOMPLETE_CLOSING_TAG_PATTERN,
  TokenTypes,
} from "../../constants";
import { calculateTokenPosition, createParts } from "../../utils";
import { Range, TokenizerState } from "../../types";
import { CharsBuffer } from "../chars-buffer";

/**
 * Content of textarea, title and the other raw text elements:
 * everything up to the matching end tag is text, even if it looks like a tag or a comment.
 */
export function parse(chars: CharsBuffer, state: TokenizerState) {
  if (
    chars.value() === "<" ||
    chars.value() === "</" ||
    INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())
  ) {
    state.sourceCode.next();
    return;
  }

  const tagName =
    state.contextParams[TokenizerContextTypes.RawTextTagContent]?.tagName!;
  if (new RegExp("^</" + tagName + "\\s*>$", "i").test(chars.value())) {
    return parseClosingTag(state);
  }

  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  state.sourceCode.next();
}

export function handleContentEnd(state: TokenizerState) {
  state.accumulatedContent.concatBuffer(state.decisionBuffer);
  state.decisionBuffer.clear();
  pushTextToken(state);
}

function pushTextToken(state: TokenizerState) {
  if (state.accumulatedContent.value() === "") {
    return;
  }
  const position = calculateTokenPosition(state, { keepBuffer: false });
  state.tokens.push({
    type: TokenTypes.Text,
    value: state.accumulatedContent.value(),
    range: position.range,
    loc: position.loc,
    parts: createParts(state, TokenTypes.Text),
  });
}

function parseClosingTag(state: TokenizerState) {
  pushTextToken(state);

  const range: Range = [
    state.sourceCode.index() - (state.decisionBuffer.length() - 1),
    state.sourceCode.index() + 1,
  ];

  state.tokens.push({
    type: TokenTypes.CloseTag,
    value: state.decisionBuffer.value(),
    range,
    loc: state.sourceCode.getLocationOf(range),
  });

  state.accumulatedContent.clear();
  state.decisionBuffer.clear();
  state.contextParams[TokenizerContextTypes.RawTextTagContent] = undefined;
  state.currentContext = TokenizerContextTypes.Data;
  state.sourceCode.next();
}
