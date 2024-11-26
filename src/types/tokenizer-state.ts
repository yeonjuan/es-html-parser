import { TokenTypes, TokenizerContextTypes } from "../constants";
import { Range } from "./range";
import { AnyToken } from "./token";
export type ContextParams = {
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

export type TemplateSytaxTokenOption = {
  type:
    | TokenTypes.TemplateSyntaxStart
    | TokenTypes.TemplateSyntaxContent
    | TokenTypes.TemplateSyntaxEnd;
  range: Range;
};

export interface TokenizerState {
  currentContext: TokenizerContextTypes;
  contextParams: ContextParams;
  decisionBuffer: string;
  accumulatedContent: string;
  caretPosition: number;
  linePosition: number;
  source: string;
  tokens: {
    push(token: AnyToken): void;
  };
}
