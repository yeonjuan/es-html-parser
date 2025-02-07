import { NodeTypes } from "../constants";
import { BaseNode } from "./base-node";

export interface SimpleNode<T extends NodeTypes> extends BaseNode {
  type: T;
  value: string;
}

export interface PartNode<T extends NodeTypes> extends BaseNode {
  type: T;
  value: string;
}

export interface CompositeNode<T extends NodeTypes> extends BaseNode {
  parts: PartNode<T>[];
  value: string;
}
