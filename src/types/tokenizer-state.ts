import { TokenizerContextTypes } from "../constants";
import { TemplateSyntaxOption } from "./parse";
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

interface TokenArray {
  push(token: AnyToken): void;
}

function toTemplateSyntaxStarterMap(options: TemplateSyntaxOption[]) {
  const map = new Map<string, TemplateSyntaxOption>(
    options.map(({ start, ...rest }) => [start, { start, ...rest }])
  );
  return map;
}

export class TokenizerState {
  public tokens: TokenArray;
  private _tokens: AnyToken[] = [];
  public currentContext = TokenizerContextTypes.Data;
  public contextParams: ContextParams = {};
  public decisionBuffer = "";
  public accumulatedContent = "";
  public caretPosition = 0;
  public linePosition = 1;
  private templateSyntaxStarterMap: Map<string, TemplateSyntaxOption>;
  constructor(
    public readonly source: string,
    private readonly templateSyntax: TemplateSyntaxOption[],
    private readonly tokenAdapter: TokenAdapter
  ) {
    this.templateSyntaxStarterMap = toTemplateSyntaxStarterMap(templateSyntax);
    this.tokens = {
      push: (token) => {
        this._tokens.push({
          ...token,
          range: this.tokenAdapter.finalizeRange(token),
          loc: this.tokenAdapter.finalizeLocation(token),
        });
      },
    };
  }

  public isIncompleteTemplateSyntaxStart(chars: string) {
    return Array.from(this.templateSyntaxStarterMap.keys()).some(
      (start) => start !== chars && chars.indexOf(start) == 0
    );
  }

  public isCompleteTemplateSyntaxStart(chars: string) {
    return Array.from(this.templateSyntaxStarterMap.keys()).some(
      (start) => chars === start
    );
  }

  public getCompleteMatchedTemplateSyntaxStart(chars: string) {
    return Array.from(this.templateSyntaxStarterMap.keys()).find(
      (start) => chars === start
    );
  }

  public getTokens(): AnyToken[] {
    return this._tokens;
  }
}
