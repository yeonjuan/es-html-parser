export enum TokenTypes {
  Text = "Text",
  OpenTagStart = "OpenTagStart",
  OpenTagEnd = "OpenTagEnd",
  CloseTag = "CloseTag",
  AttributeKey = "AttributeKey",
  AttributeAssignment = "AttributeAssignment",
  AttributeValueWrapperStart = "AttributeValueWrapperStart",
  AttributeValue = "AttributeValue",
  AttributeValueWrapperEnd = "AttributeValueWrapperEnd",
  DoctypeOpen = "DoctypeOpen",
  DoctypeAttributeValue = "DoctypeAttributeValue",
  DoctypeAttributeWrapperStart = "DoctypeAttributeWrapperStart",
  DoctypeAttributeWrapperEnd = "DoctypeAttributeWrapperEnd",
  DoctypeClose = "DoctypeClose",
  CommentOpen = "CommentOpen",
  CommentContent = "CommentContent",
  CommentClose = "CommentClose",
  OpenScriptTagStart = "OpenScriptTagStart",
  OpenScriptTagEnd = "OpenScriptTagEnd",
  ScriptTagContent = "ScriptTagContent",
  CloseScriptTag = "CloseScriptTag",
  OpenStyleTagStart = "OpenStyleTagStart",
  OpenStyleTagEnd = "OpenStyleTagEnd",
  StyleTagContent = "StyleTagContent",
  CloseStyleTag = "CloseStyleTag",
  TemplateSyntaxStart = "TemplateSyntaxStart",
  TemplateSyntaxEnd = "TemplateSyntaxEnd",
}
