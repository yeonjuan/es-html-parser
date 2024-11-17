import { TokenizerContextTypes } from "../constants";
import { AnyToken } from "./token";
import { TokenAdapter } from "./token-adapter";

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
  linePosition: number;
  source: string;
  tokenAdapter: TokenAdapter;
  tokens: {
    push(token: AnyToken): void;
  };
};
