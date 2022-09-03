import { TokenTypes } from "../constants";
import { SourceLocation } from "./source-location";
import { Range } from "./range";

export interface Token {
  type: TokenTypes;
  value: string;
  range: Range;
  loc: SourceLocation;
}
