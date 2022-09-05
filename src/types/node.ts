import { NodeTypes } from "../constants";
import { SimpleNode } from "./simple-node";
import { BaseNode } from "./base-node";

export interface DocumentNode extends BaseNode {
  type: NodeTypes.Document;
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
}

export type TextNode = SimpleNode<NodeTypes.Text>;

export interface TagNode extends BaseNode {
  type: NodeTypes.Tag;
  selfClosing: boolean;
  name: string;
  openStart: OpenTagStartNode;
  openEnd: OpenTagEndNode;
  close?: CloseTagNode;
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
  attributes: Array<AttributeNode>;
}

export type OpenTagStartNode = SimpleNode<NodeTypes.OpenTagStart>;

export type OpenTagEndNode = SimpleNode<NodeTypes.OpenTagEnd>;

export type CloseTagNode = SimpleNode<NodeTypes.CloseTag>;

export interface AttributeNode extends BaseNode {
  type: NodeTypes.Attribute;
  key: AttributeKeyNode;
  value?: AttributeValueNode;
  startWrapper?: AttributeValueWrapperStartNode;
  endWrapper?: AttributeValueWrapperEndNode;
}

export type AttributeKeyNode = SimpleNode<NodeTypes.AttributeKey>;

export type AttributeValueNode = SimpleNode<NodeTypes.AttributeValue>;

export type AttributeValueWrapperStartNode =
  SimpleNode<NodeTypes.AttributeValueWrapperStart>;

export type AttributeValueWrapperEndNode =
  SimpleNode<NodeTypes.AttributeValueWrapperEnd>;

export interface ScriptNode extends BaseNode {
  type: NodeTypes.ScriptTag;
  attributes: Array<AttributeNode>;
  openStart: OpenTagStartScriptNode;
  openEnd: OpenTagEndScriptNode;
  close: CloseTagScriptNode;
  value?: ScriptTagContentNode;
}

export type OpenTagStartStyleNode = SimpleNode<NodeTypes.OpenTagStartStyle>;

export type OpenTagEndStyleNode = SimpleNode<NodeTypes.OpenTagEndStyle>;

export type OpenTagStartScriptNode = SimpleNode<NodeTypes.OpenTagStartScript>;

export type OpenTagEndScriptNode = SimpleNode<NodeTypes.OpenTagEndScript>;

export type CommentStartNode = SimpleNode<NodeTypes.CommentStart>;

export type CommentEndNode = SimpleNode<NodeTypes.CommentEnd>;

export type CommentContentNode = SimpleNode<NodeTypes.CommentContent>;

export type ScriptTagContentNode = SimpleNode<NodeTypes.ScriptTagContent>;

export type StyleTagContentNode = SimpleNode<NodeTypes.StyleTagContent>;

export type DoctypeStartNode = SimpleNode<NodeTypes.DoctypeStart>;

export type DoctypeEndNode = SimpleNode<NodeTypes.DoctypeEnd>;

export type CloseTagScriptNode = SimpleNode<NodeTypes.CloseTagScript>;

export type CloseTagStyleNode = SimpleNode<NodeTypes.CloseTagStyle>;

export type DoctypeAttributeValueNode =
  SimpleNode<NodeTypes.DoctypeAttributeValue>;

export type DoctypeAttributeWrapperStart =
  SimpleNode<NodeTypes.DoctypeAttributeWrapperStart>;

export type DoctypeAttributeWrapperEnd =
  SimpleNode<NodeTypes.DoctypeAttributeWrapperEnd>;

export interface StyleNode extends BaseNode {
  type: NodeTypes.StyleTag;
  attributes: Array<AttributeNode>;
  openStart: OpenTagStartStyleNode;
  openEnd: OpenTagEndStyleNode;
  close: CloseTagStyleNode;
  value?: StyleTagContentNode;
}

export interface DoctypeAttributeNode extends BaseNode {
  type: NodeTypes.Attribute;
  key: AttributeKeyNode;
  startWrapper?: DoctypeAttributeWrapperStart;
  value?: DoctypeAttributeValueNode;
  endWrapper?: DoctypeAttributeWrapperEnd;
}

export interface DoctypeNode extends BaseNode {
  type: NodeTypes.Doctype;
  start: DoctypeStartNode;
  end: DoctypeEndNode;
}

export interface CommentNode extends BaseNode {
  type: NodeTypes.Comment;
  start: CommentStartNode;
  end: CommentEndNode;
  value: CommentContentNode;
}
