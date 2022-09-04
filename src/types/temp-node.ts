import { BaseNode } from "./base-node";
import {
  CommentNode,
  DoctypeNode,
  ScriptNode,
  StyleNode,
  TagNode,
} from "./node";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type TempNode<T extends BaseNode, K extends keyof T = any> = PartialBy<T, K> & {
  parentRef?: any;
};

export type TempScriptNode = TempNode<
  ScriptNode,
  "close" | "openStart" | "value" | "openEnd"
>;
export type TempStyleNode = TempNode<
  StyleNode,
  "openStart" | "openEnd" | "value" | "close"
>;
export type TempDoctypeNode = TempNode<DoctypeNode>;
export type TempCommentNode = TempNode<CommentNode, "start" | "end" | "value">;
export type TempTagNode = TempNode<
  TagNode,
  "close" | "selfClosing" | "name" | "openEnd" | "openStart"
>;
