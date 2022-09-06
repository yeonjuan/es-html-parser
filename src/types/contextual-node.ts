import {
  CommentNode,
  DoctypeNode,
  ScriptTagNode,
  StyleTagNode,
  TagNode,
  DocumentNode,
  AnyNode,
  AttributeNode,
} from "./node";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ContextualNode<T extends AnyNode, K extends keyof T> = PartialBy<
  T,
  K
> & {
  parentRef?: any;
};

export type ContextualScriptTagNode = ContextualNode<
  ScriptTagNode,
  "close" | "openStart" | "value" | "openEnd"
>;

export type ContextualStyleTagNode = ContextualNode<
  StyleTagNode,
  "openStart" | "openEnd" | "value" | "close"
>;

export type ContextualDoctypeNode = ContextualNode<
  DoctypeNode,
  "start" | "end"
>;

export type ContextualCommentNode = ContextualNode<
  CommentNode,
  "start" | "end" | "value"
>;

export type ContextualTagNode = ContextualNode<
  TagNode,
  "close" | "selfClosing" | "name" | "openEnd" | "openStart"
> & {
  children: Array<
    | ContextualScriptTagNode
    | ContextualStyleTagNode
    | ContextualDoctypeNode
    | ContextualCommentNode
    | ContextualTagNode
    | TagNode["children"][number]
  >;
  attributes: ContextualAttributeNode[];
};

export type ContextualAttributeNode = ContextualNode<AttributeNode, "key">;

export type ContextualDocumentNode = Omit<
  ContextualNode<DocumentNode, never>,
  "children"
> & {
  children: Array<
    | Exclude<AnyContextualNode, ContextualDocumentNode>
    | DocumentNode["children"][number]
  >;
};

export type AnyContextualNode =
  | ContextualScriptTagNode
  | ContextualStyleTagNode
  | ContextualDoctypeNode
  | ContextualCommentNode
  | ContextualTagNode
  | ContextualDocumentNode;
