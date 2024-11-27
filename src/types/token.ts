import { TokenTypes } from "../constants";
import { SourceLocation } from "./source-location";
import { Range } from "./range";

export interface Token<T extends TokenTypes> {
  type: T;
  value: string;
  range: Range;
  loc: SourceLocation;
}
type TemplatableToken<T extends TokenTypes> = Token<T> & {
  isTemplate: boolean;
};

export type AnyToken =
  | TemplatableToken<TokenTypes.Text>
  | Token<TokenTypes.OpenTagStart>
  | Token<TokenTypes.OpenTagEnd>
  | Token<TokenTypes.CloseTag>
  | TemplatableToken<TokenTypes.AttributeKey>
  | Token<TokenTypes.AttributeAssignment>
  | Token<TokenTypes.AttributeValueWrapperStart>
  | TemplatableToken<TokenTypes.AttributeValue>
  | Token<TokenTypes.AttributeValueWrapperEnd>
  | Token<TokenTypes.DoctypeOpen>
  | Token<TokenTypes.DoctypeAttributeValue>
  | Token<TokenTypes.DoctypeAttributeWrapperStart>
  | Token<TokenTypes.DoctypeAttributeWrapperEnd>
  | Token<TokenTypes.DoctypeClose>
  | Token<TokenTypes.CommentOpen>
  | TemplatableToken<TokenTypes.CommentContent>
  | Token<TokenTypes.CommentClose>
  | Token<TokenTypes.OpenScriptTagStart>
  | Token<TokenTypes.OpenScriptTagEnd>
  | TemplatableToken<TokenTypes.ScriptTagContent>
  | Token<TokenTypes.CloseScriptTag>
  | Token<TokenTypes.OpenStyleTagStart>
  | Token<TokenTypes.OpenStyleTagEnd>
  | TemplatableToken<TokenTypes.StyleTagContent>
  | Token<TokenTypes.CloseStyleTag>;
