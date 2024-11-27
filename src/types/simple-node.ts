import { NodeTypes } from "../constants";
import { BaseNode } from "./base-node";

export interface SimpleNode<T extends NodeTypes> extends BaseNode {
  type: T;
  value: string;
}
