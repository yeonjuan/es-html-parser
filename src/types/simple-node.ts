import { NodeTypes } from "../constants";
import { BaseNode } from "./base-node";

export interface SimpleNode<T extends NodeTypes> extends BaseNode {
  type: T;
  value: string;
}

export interface TemplatableNode<T extends NodeTypes> extends BaseNode {
  type: T;
  value: string;
  isTemplate?: boolean;
}

export interface TemplatesContainerNode<T extends NodeTypes> extends BaseNode {
  templates: TemplatableNode<T>;
}
