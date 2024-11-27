import { TokenizerContextTypes } from "../constants";
import {
  AnyToken,
  ContextParams,
  Range,
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
    private templateRanges: Range[]
  ) {}

  consumeTemplateRangeAt(charIndex: number) {
    const index = this.templateRanges.findIndex(
      ([start, end]) => start <= charIndex && charIndex < end
    );
    if (index < 0) {
      return null;
    }
    return this.templateRanges.splice(index, 1)[0];
  }

  getTemplateRangeAt(charIndex: number) {
    const index = this.templateRanges.findIndex(
      ([start, end]) => start <= charIndex && charIndex < end
    );
    if (index < 0) {
      return null;
    }
    return this.templateRanges[index];
  }

  public getTokens() {
    return this._tokens;
  }
}
