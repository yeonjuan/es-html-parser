import { SourceLocation } from "../types/source-location";

export function cloneLocation(loc: SourceLocation): SourceLocation {
  return {
    start: {
      line: loc.start.line,
    },
    end: {
      line: loc.end.line,
    },
  };
}
