export function initChildrenIfNone(node: { children: unknown[] }) {
  /* istanbul ignore next */
  if (!node.children) {
    node.children = [];
  }
}

export function initAttributesIfNone(node: { attributes: unknown[] }) {
  /* istanbul ignore next */
  if (!node.attributes) {
    node.attributes = [];
  }
}
