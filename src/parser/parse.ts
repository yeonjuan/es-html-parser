import { constructTree } from "../tree-constructor";
import { tokenize } from "../tokenizer";

export function parse(html: string) {
  const { tokens } = tokenize(html, undefined);
  const { ast } = constructTree(tokens);

  return ast;
}
