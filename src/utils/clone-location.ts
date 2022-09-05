import { SourceLocation } from "../types/source-location";

export function cloneLocation(loc: SourceLocation): SourceLocation {
  return {
    start: {
      line: loc.start.line,
      column: loc.start.column,
    },
    end: {
      line: loc.end.line,
      column: loc.end.column,
    },
  };
}
