import { TokenTypes } from "../constants";
import { Range } from "../types";

export interface Token {
  type: TokenTypes;
  value: string;
  range: Range;
}
