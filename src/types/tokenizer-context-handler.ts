import { TokenizerState } from "./tokenizer-state";

export interface TokenizeHandler {
  parse(chars: string, state: TokenizerState, charIndex: number): void;
  handleContentEnd?: (state: TokenizerState) => void;
}
