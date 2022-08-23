import { TokenizerState } from "./tokenizer-state";

export interface TokenizeHandler {
  parse(chars: string, state: TokenizerState, tokens: any[]): void;
  handleContentEnd?: (state: TokenizerState, tokens: any[]) => void;
}
