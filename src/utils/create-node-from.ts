import { AnyToken } from "../types";
import { cloneLocation } from "./clone-location";
import { cloneRange } from "./clone-range";

export function createNodeFrom<T extends AnyToken>(token: T): unknown {
  const loc = cloneLocation(token.loc);
  const range = cloneRange(token.range);

  const ret = {
    type: token.type,
    value: token.value,
    loc,
    range,
    // @ts-ignore
    isTemplate: token["isTemplate"],
  };

  if (ret.isTemplate === undefined) {
    delete ret.isTemplate;
  }
  return ret as unknown;
}
