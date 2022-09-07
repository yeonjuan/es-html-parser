import { constructTree } from "../tree-constructor";
import { tokenize } from "../tokenizer";
import { ParseResult } from "../types";
import { clearParent } from "../utils";

export function parse(html: string): ParseResult {
  const { tokens } = tokenize(html, undefined);
  const { ast } = constructTree(tokens, undefined);
  return {
    ast: clearParent(ast),
    tokens,
  };
}
