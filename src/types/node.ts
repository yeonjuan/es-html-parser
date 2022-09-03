import { NodeTypes } from "../constants";
import { Range } from "./range";
import { SourceLocation } from "./source-location";

interface BaseNode {
  type: NodeTypes;
  range: Range;
  loc: SourceLocation;
  parentRef?: any;
}

export interface DocumentNode extends BaseNode {
  type: NodeTypes.Document;
  children: Array<TextNode | TagNode>;
}

export interface TextNode extends BaseNode {
  type: NodeTypes.Text;
  value: string;
}

export interface TagNode extends BaseNode {
  type: NodeTypes.Tag;
  selfClosing: boolean;
  close?: CloseTagNode;
  openEnd?: OpenTagEndNode;
  openStart?: OpenTagStartNode;
  children: Array<TextNode | TagNode>;
  attributes: Array<AttributeNode>;
}

export interface CloseTagNode extends BaseNode {
  type: NodeTypes.CloseTag;
  value: string;
}

export interface OpenTagStartNode extends BaseNode {
  type: NodeTypes.OpenTagStart;
  value: string;
}

export interface OpenTagEndNode extends BaseNode {
  type: NodeTypes.OpenTagEnd;
  value: string;
}

export interface AttributeNode extends BaseNode {
  type: NodeTypes.Attribute;
  key: AttributeKeyNode;
  startWrapper?: AttributeValueWrapperStartNode;
  value?: AttributeValue;
  endWrapper?: AttributeValueWrapperEndNode;
}

export interface AttributeKeyNode extends BaseNode {
  type: NodeTypes.AttributeKey;
  value: string;
}

export interface AttributeValue extends BaseNode {
  type: NodeTypes.Attribute;
  value: string;
}

export interface AttributeValueWrapperStartNode {
  type: NodeTypes.AttributeValueWrapperStart;
  value: string;
}

export interface AttributeValueWrapperEndNode {
  type: NodeTypes.AttributeValueWrapperEnd;
  value: string;
}

export interface DoctypeNode {
  type: NodeTypes.Doctype;
}

export type AnyNode = DocumentNode | TextNode | TagNode;
