import { constructTree } from "../tree-constructor";
import { tokenize } from "../tokenizer";
import { DocumentNode, Token } from "../types";
import { clearParent } from "../utils";

export function parse(html: string): { ast: DocumentNode; tokens: Token[] } {
  const { tokens } = tokenize(html, undefined);
  const { ast } = constructTree(tokens, undefined);
  clearParent(ast);
  return {
    ast,
    tokens,
  };
}
