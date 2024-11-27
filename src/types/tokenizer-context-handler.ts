import { AnyToken } from "./token";
import { TokenizerState } from "./tokenizer-state";

export interface TokenizeHandler {
  parse(chars: string, state: TokenizerState, tokens: AnyToken[]): void;
  handleContentEnd?: (state: TokenizerState, tokens: AnyToken[]) => void;
}
