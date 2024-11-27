import { TokenizerContextTypes } from "../constants";
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
  currentContext: TokenizerContextTypes;
  contextParams: ContextParams;
  decisionBuffer: string;
  accumulatedContent: string;
  caretPosition: number;
  source: string;
  tokens: {
    push(token: AnyToken): void;
  };
};
