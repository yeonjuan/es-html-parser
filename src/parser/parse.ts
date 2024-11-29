import { constructTree } from "../tree-constructor";
import { tokenize } from "../tokenizer";
import { ParseResult } from "../types";
import { clearParent } from "../utils";
import { defaultTokenAdapter } from "../token-adapter";
import { Options } from "../types/parse";

export function parse(html: string, options?: Options): ParseResult {
  const tokenAdapter = (options && options.tokenAdapter) || defaultTokenAdapter;
  const { tokens } = tokenize(html, tokenAdapter, options?.templateRanges);
  const { ast } = constructTree(tokens);
  return {
    ast: clearParent(ast),
    tokens,
  };
}
