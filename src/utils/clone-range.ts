import { Range } from "../types/range";

export function cloneRange(range: Range): Range {
  return [range[0], range[1]];
}
