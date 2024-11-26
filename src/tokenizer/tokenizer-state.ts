import { TokenizerContextTypes } from "../constants";
import {
  AnyToken,
  ContextParams,
  TemplateSytaxTokenOption,
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
    private templateSyntaxTokens: TemplateSytaxTokenOption[]
  ) {}

  public getTokens() {
    return this._tokens;
  }
}
