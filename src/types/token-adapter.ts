import type { SourceLocation } from "./source-location";
import type { Range } from "./range";
import type { AnyToken } from "./token";

export interface TokenAdapter {
  finalizeRange(token: Omit<AnyToken, "loc">): Range;
  finalizeLocation(token: Omit<AnyToken, "range">): SourceLocation;
}
