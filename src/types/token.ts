import { TokenTypes } from "../constants";
import { Range, CodeLocation } from "../types";

export interface Token {
  type: TokenTypes;
  value: string;
  range: Range;
  loc?: CodeLocation;
}
