import { AnyContextualNode, AnyNode, AnyToken } from "../types";

export function updateNodeEnd(
  node: AnyNode | AnyContextualNode,
  token: AnyToken
): void {
  node.range[1] = token.range[1];
  node.loc.end = { ...token.loc.end };
}
