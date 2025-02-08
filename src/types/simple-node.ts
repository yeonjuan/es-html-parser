import { NodeTypes } from "../constants";
import { BaseNode } from "./base-node";

export interface SimpleNode<T extends NodeTypes> extends BaseNode {
  type: T;
  value: string;
}

export interface PartNode<T extends NodeTypes> extends BaseNode {
  type: NodeTypes.Part;
  partOf: T;
  value: string;
}

export interface TemplateNode<T extends NodeTypes> extends BaseNode {
  type: NodeTypes.Template;
  partOf: T;
  open?: SimpleNode<NodeTypes.OpenTemplate>;
  close?: SimpleNode<NodeTypes.CloseTemplate>;
}

export interface CompositeNode<T extends NodeTypes> extends BaseNode {
  parts: (PartNode<T> | TemplateNode<T>)[];
  value: string;
}
