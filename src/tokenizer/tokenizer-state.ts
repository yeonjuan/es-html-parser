import { TokenizerContextTypes } from "../constants";
import {
  AnyToken,
  ContextParams,
  TemplateSytaxToken,
  TokenAdapter,
  TokenizerState,
} from "../types";

export class HTMLTokenizerState implements TokenizerState {
  private _tokens: AnyToken[] = [];
  public currentContext = TokenizerContextTypes.Data;
  public contextParams: ContextParams = {};
  public decisionBuffer = "";
  public accumulatedContent = "";
  public caretPosition = 0;
  public linePosition = 1;
  public tokens = {
    push: (token: AnyToken) => {
      this._tokens.push({
        ...token,
        range: this.tokenAdapter.finalizeRange(token),
        loc: this.tokenAdapter.finalizeLocation(token),
      });
    },
  };

  constructor(
    public source: string,
    private tokenAdapter: TokenAdapter,
    private templateSyntaxTokens: TemplateSytaxToken[]
  ) {}

  consumeTemplateSyntaxTokenAt(charIndex: number) {
    const index = this.templateSyntaxTokens.findIndex(
      (token) => token.range[0] <= charIndex && charIndex < token.range[1]
    );
    if (index < 0) {
      return null;
    }
    return this.templateSyntaxTokens.splice(index, 1)[0];
  }

  getTemplateSyntaxTokenAt(charIndex: number) {
    const index = this.templateSyntaxTokens.findIndex(
      (token) => token.range[0] <= charIndex && charIndex < token.range[1]
    );
    if (index < 0) {
      return null;
    }
    return this.templateSyntaxTokens[index];
  }

  public getTokens() {
    return this._tokens;
  }
}
