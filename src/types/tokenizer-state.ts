import { TokenizerContextTypes } from "../constants";
// import { CharPointer } from "../tokenizer/char-pointer";
import { CharsBuffer } from "../tokenizer/chars-buffer";
import { SourceCode } from "../tokenizer/source-code";
import { Range } from "./range";
import { AnyToken } from "./token";

type ContextParams = {
  [TokenizerContextTypes.AttributeValueWrapped]?: {
    wrapper: string;
  };
  [TokenizerContextTypes.Attributes]?: {
    tagName: string;
  };
  [TokenizerContextTypes.OpenTagEnd]?: {
    tagName: string;
  };
  [TokenizerContextTypes.DoctypeAttributeWrapped]?: {
    wrapper: string;
  };
};

export type TokenizerState = {
  mode: "template" | "default";
  currentContext: TokenizerContextTypes;
  contextParams: ContextParams;
  decisionBuffer: CharsBuffer;
  accumulatedContent: CharsBuffer;
  // pointer: CharPointer;
  templateRanges: Range[];
  sourceCode: SourceCode;
  tokens: {
    push(token: AnyToken): void;
  };
};
