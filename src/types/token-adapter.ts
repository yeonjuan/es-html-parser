import type { SourceLocation } from "./source-location";
import type { Range } from "./range";
import type { AnyToken } from "./token";
import { TokenTypes } from "../constants";

export type TemplateSyntaxInfo = {
  type:
    | TokenTypes.TemplateSyntaxStart
    | TokenTypes.TemplateSyntaxContent
    | TokenTypes.TemplateSyntaxEnd;
  range: Range;
};

export interface TokenAdapter {
  finalizeRange(token: Omit<AnyToken, "loc">): Range;
  finalizeLocation(token: Omit<AnyToken, "range">): SourceLocation;
}
