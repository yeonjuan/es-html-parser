import { TokenTypes } from "../constants";
import { SourceLocation } from "./source-location";
import { Range } from "./range";

export interface Token<T extends TokenTypes> {
  type: T;
  value: string;
  range: Range;
  loc: SourceLocation;
}

export type AnyToken = Token<TokenTypes>;
