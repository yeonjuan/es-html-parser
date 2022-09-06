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
  DoctypeStart = "DoctypeStart",
  DoctypeAttributeValue = "DoctypeAttributeValue",
  DoctypeAttributeWrapperStart = "DoctypeAttributeWrapperStart",
  DoctypeAttributeWrapperEnd = "DoctypeAttributeWrapperEnd",
  DoctypeEnd = "DoctypeEnd",
  CommentStart = "CommentStart",
  CommentContent = "CommentContent",
  CommentEnd = "CommentEnd",
  OpenScriptTagStart = "OpenScriptTagStart",
  OpenScriptTagEnd = "OpenScriptTagEnd",
  ScriptTagContent = "ScriptTagContent",
  CloseScriptTag = "CloseScriptTag",
  OpenStyleTagStart = "OpenStyleTagStart",
  OpenStyleTagEnd = "OpenStyleTagEnd",
  StyleTagContent = "StyleTagContent",
  CloseStyleTag = "CloseStyleTag",
}
