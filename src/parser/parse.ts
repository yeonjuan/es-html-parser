import { constructTree } from "../tree-constructor";
import { tokenize } from "../tokenizer";
import { ParseResult, Options } from "../types";
import { clearParent } from "../utils";
import { defaultTokenAdapter } from "../token-adapter";

export function parse(html: string, options?: Options): ParseResult {
  const tokenAdapter = (options && options.tokenAdapter) || defaultTokenAdapter;
  const templateSyntax = (options && options.templateSyntax) || [];
  const { tokens } = tokenize(html, tokenAdapter, templateSyntax);
  const { ast } = constructTree(tokens, undefined);
  return {
    ast: clearParent(ast),
    tokens,
  };
}
