export enum NodeTypes {
  Document = "Document",
  Tag = "Tag",
  Text = "Text",
  Doctype = "Doctype",

  Comment = "Comment",
  CommentOpen = "CommentOpen",
  CommentClose = "CommentClose",
  CommentContent = "CommentContent",

  Attribute = "Attribute",
  AttributeKey = "AttributeKey",
  AttributeValue = "AttributeValue",
  AttributeValueWrapperStart = "AttributeValueWrapperStart",
  AttributeValueWrapperEnd = "AttributeValueWrapperEnd",
  CloseTag = "CloseTag",
  OpenTagEnd = "OpenTagEnd",
  OpenTagStart = "OpenTagStart",
  DoctypeOpen = "DoctypeOpen",
  DoctypeAttribute = "DoctypeAttribute",
  DoctypeClose = "DoctypeClose",

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

  OpenTemplate = "OpenTemplate",
  Template = "Template",
  CloseTemplate = "CloseTemplate",
  Part = "Part",
}
