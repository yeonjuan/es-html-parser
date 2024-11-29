import { TokenTypes } from "../constants";
import { SourceLocation } from "./source-location";
import { Range } from "./range";

export interface Token<T extends TokenTypes> {
  type: T;
  value: string;
  range: Range;
  loc: SourceLocation;
}

export interface TemplatableToken<T extends TokenTypes> extends Token<T> {
  isTemplate?: boolean;
}

export interface TemplatesContainerToken<T extends TokenTypes>
  extends Token<T> {
  templates: TemplatableToken<T>[];
}

export type AnyToken =
  | TemplatesContainerToken<TokenTypes.Text>
  | Token<TokenTypes.OpenTagStart>
  | Token<TokenTypes.OpenTagEnd>
  | Token<TokenTypes.CloseTag>
  | TemplatesContainerToken<TokenTypes.AttributeKey>
  | Token<TokenTypes.AttributeAssignment>
  | Token<TokenTypes.AttributeValueWrapperStart>
  | TemplatesContainerToken<TokenTypes.AttributeValue>
  | Token<TokenTypes.AttributeValueWrapperEnd>
  | Token<TokenTypes.DoctypeOpen>
  | Token<TokenTypes.DoctypeAttributeValue>
  | Token<TokenTypes.DoctypeAttributeWrapperStart>
  | Token<TokenTypes.DoctypeAttributeWrapperEnd>
  | Token<TokenTypes.DoctypeClose>
  | Token<TokenTypes.CommentOpen>
  | TemplatesContainerToken<TokenTypes.CommentContent>
  | Token<TokenTypes.CommentClose>
  | Token<TokenTypes.OpenScriptTagStart>
  | Token<TokenTypes.OpenScriptTagEnd>
  | TemplatesContainerToken<TokenTypes.ScriptTagContent>
  | Token<TokenTypes.CloseScriptTag>
  | Token<TokenTypes.OpenStyleTagStart>
  | Token<TokenTypes.OpenStyleTagEnd>
  | TemplatesContainerToken<TokenTypes.StyleTagContent>
  | Token<TokenTypes.CloseStyleTag>;
