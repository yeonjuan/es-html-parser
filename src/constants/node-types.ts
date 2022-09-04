import { TokenTypes } from "./token-types";

export enum NodeTypes {
  Document = "Document",
  Tag = "Tag",
  Text = "Text",
  Doctype = "Doctype",

  Comment = "Comment",
  CommentStart = "CommentStart",
  CommentEnd = "CommentEnd",
  CommentContent = "CommentContent",

  Attribute = "Attribute",
  AttributeKey = "AttributeKey",
  AttributeValue = "AttributeValue",
  AttributeAssignment = "AttributeAssignment",
  AttributeValueWrapperStart = "AttributeValueWrapperStart",
  AttributeValueWrapperEnd = "AttributeValueWrapperEnd",
  CloseTag = "CloseTag",
  OpenTagEnd = "OpenTagEnd",
  OpenTagStart = "OpenTagStart",
  DoctypeStart = "DoctypeStart",
  DoctypeEnd = "DoctypeEnd",

  ScriptTag = "ScriptTag",
  OpenTagStartScript = "OpenTagStartScript",
  OpenTagEndScript = "OpenTagEndScript",
  ScriptTagContent = "ScriptTagContent",

  StyleTag = "StyleTag",
  OpenTagStartStyle = "OpenTagStartStyle",
  OpenTagEndStyle = "OpenTagEndStyle",
  StyleTagContent = "StyleTagContent",
  CloseTagStyle = "CloseTagStyle",

  CloseTagScript = "CloseTagScript",
  DoctypeAttribute = "DoctypeAttribute",
  DoctypeAttributeWrapperStart = "DoctypeAttributeWrapperStart",
  DoctypeAttributeWrapperEnd = "DoctypeAttributeWrapperEnd",
}
