import { ContextualDocumentNode, DocumentNode } from "../types";

export function clearParent(ast: ContextualDocumentNode): DocumentNode {
  const cleanAst = ast;

  delete cleanAst.parentRef;

  if (Array.isArray(ast.children)) {
    // @ts-ignore
    ast.children.forEach((node: any) => {
      clearParent(node);
    });
  }

  return cleanAst as DocumentNode;
}
