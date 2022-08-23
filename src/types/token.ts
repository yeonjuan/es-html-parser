import { TokenTypes } from "../constants";

export interface Token {
  type: TokenTypes;
  content: string;
  startPosition: any;
  endPosition: any;
}
