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
  AttributeValueWrapperStart = "AttributeValueWrapperStart",
  AttributeValueWrapperEnd = "AttributeValueWrapperEnd",
  CloseTag = "CloseTag",
  OpenTagEnd = "OpenTagEnd",
  OpenTagStart = "OpenTagStart",
  DoctypeStart = "DoctypeStart",
  DoctypeAttribute = "DoctypeAttribute",
  DoctypeEnd = "DoctypeEnd",

  ScriptTag = "ScriptTag",
  OpenScriptTagStart = "OpenScriptTagStart",
  OpenScriptTagEnd = "OpenScriptTagEnd",
  ScriptTagContent = "ScriptTagContent",

  StyleTag = "StyleTag",
  OpenStyleTagStart = "OpenStyleTagStart",
  OpenStyleTagEnd = "OpenStyleTagEnd",
  StyleTagContent = "StyleTagContent",
  CloseStyleTag = "CloseStyleTag",

  CloseScriptTag = "CloseScriptTag",
  DoctypeAttributeValue = "DoctypeAttributeValue",
  DoctypeAttributeWrapperStart = "DoctypeAttributeWrapperStart",
  DoctypeAttributeWrapperEnd = "DoctypeAttributeWrapperEnd",
}
