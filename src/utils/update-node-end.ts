import { BaseNode, Token } from "../types";

export function updateNodeEnd(node: BaseNode, token: Token): void {
  node.range[1] = token.range[1];
  node.loc.end = { ...token.loc.end };
}
