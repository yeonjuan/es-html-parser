import { Range } from "../types";
import { getLineInfo } from "./get-line-info";

export function calculateTokenLocation(source: string, range: Range) {
  return {
    start: getLineInfo(source, range[0]),
    end: getLineInfo(source, range[1]),
  };
}
