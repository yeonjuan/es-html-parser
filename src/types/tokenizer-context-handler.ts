import { TokenizerState } from "./tokenizer-state";

export interface TokenizeHandler {
  parse(chars: string, state: TokenizerState): void;
  handleContentEnd?: (state: TokenizerState) => void;
}
