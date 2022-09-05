import { Token } from "./token";
import { TokenizerState } from "./tokenizer-state";

export interface TokenizeHandler {
  parse(chars: string, state: TokenizerState, tokens: Token[]): void;
  handleContentEnd?: (state: TokenizerState, tokens: Token[]) => void;
}
