import { TempDocumentNode } from "../types";

export function clearParent(ast: TempDocumentNode) {
  const cleanAst = ast;

  delete cleanAst.parentRef;

  if (Array.isArray(ast.children)) {
    cleanAst.children = ast.children.map((node: any) => {
      return clearParent(node);
    });
  }

  return cleanAst;
}
