import { AnyNode, Token } from "../types";
import { SourceLocation } from "../types/source-location";

export function updateNodeEnd(node: AnyNode, token: Token) {
  node.range[1] = token.range[1];
  node.loc.end = { ...token.loc.end };
}
