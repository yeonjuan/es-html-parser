import { constructTree } from "../tree-constructor";
import { tokenize } from "../tokenizer";
import { AnyToken, DocumentNode } from "../types";
import { clearParent } from "../utils";

export function parse(html: string): { ast: DocumentNode; tokens: AnyToken[] } {
  const { tokens } = tokenize(html, undefined);
  const { ast } = constructTree(tokens, undefined);
  return {
    ast: clearParent(ast),
    tokens,
  };
}
