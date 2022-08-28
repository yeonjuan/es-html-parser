export function clearParent(ast: any) {
  const cleanAst = ast;

  delete cleanAst.parentRef;

  if (Array.isArray(ast.content?.children)) {
    cleanAst.content.children = ast.content.children.map((node: any) => {
      return clearParent(node);
    });
  }

  return cleanAst;
}
