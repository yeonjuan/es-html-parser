import { ContextualDocumentNode, DocumentNode } from "../types";

export function clearParent(ast: ContextualDocumentNode): DocumentNode {
  const cleanAst = ast;

  delete cleanAst.parentRef;

  if (Array.isArray(ast.children)) {
    // @ts-ignore
    cleanAst.children = ast.children.map((node: any) => {
      return clearParent(node);
    });
  }

  return cleanAst as DocumentNode;
}
