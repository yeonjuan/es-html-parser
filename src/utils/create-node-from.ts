import { AnyToken } from "../types";
import { cloneLocation } from "./clone-location";
import { cloneRange } from "./clone-range";

export function createNodeFrom<T extends AnyToken>(token: T): unknown {
  const loc = cloneLocation(token.loc);
  const range = cloneRange(token.range);
  const ret: any = {
    type: token.type,
    value: token.value,
    loc,
    range,
  };
  // @ts-ignore
  if (token.templates) {
    // @ts-ignore
    ret.templates = token.templates;
  }
  // @ts-ignore
  if (token.isTemplate) {
    // @ts-ignore
    ret.isTemplate = token.isTemplate;
  }

  return ret;
}
