import { TokenTypes } from "../constants";
import { SourceLocation } from "./source-location";
import { Range } from "./range";

export interface Token<T extends TokenTypes> {
  type: T;
  value: string;
  range: Range;
  loc: SourceLocation;
}

export type AnyToken =
  | Token<TokenTypes.Text>
  | Token<TokenTypes.OpenTagStart>
  | Token<TokenTypes.OpenTagEnd>
  | Token<TokenTypes.CloseTag>
  | Token<TokenTypes.AttributeKey>
  | Token<TokenTypes.AttributeAssignment>
  | Token<TokenTypes.AttributeValueWrapperStart>
  | Token<TokenTypes.AttributeValue>
  | Token<TokenTypes.AttributeValueWrapperEnd>
  | Token<TokenTypes.DoctypeStart>
  | Token<TokenTypes.DoctypeAttributeValue>
  | Token<TokenTypes.DoctypeAttributeWrapperStart>
  | Token<TokenTypes.DoctypeAttributeWrapperEnd>
  | Token<TokenTypes.DoctypeEnd>
  | Token<TokenTypes.CommentStart>
  | Token<TokenTypes.CommentContent>
  | Token<TokenTypes.CommentEnd>
  | Token<TokenTypes.OpenScriptTagStart>
  | Token<TokenTypes.OpenScriptTagEnd>
  | Token<TokenTypes.ScriptTagContent>
  | Token<TokenTypes.CloseScriptTag>
  | Token<TokenTypes.OpenStyleTagStart>
  | Token<TokenTypes.OpenStyleTagEnd>
  | Token<TokenTypes.StyleTagContent>
  | Token<TokenTypes.CloseStyleTag>;
