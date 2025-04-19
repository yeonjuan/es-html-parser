import { Range } from "../types";
import { SourceLocation } from "../types/source-location";

export function raise(
  position: {
    loc: SourceLocation;
    range: Range;
  },
  message: string
): never {
  const errorMessage =
    message +
    " (" +
    position.loc.start.line +
    ":" +
    position.loc.start.column +
    ")";
  const error: any = new SyntaxError(errorMessage);
  error.pos = position.range[0];
  error.loc = position.loc;
  error.raiseAt = position.range[0];
  throw error;
}
