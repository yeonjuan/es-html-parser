import { Token } from "../types";
import { cloneLocation } from "./clone-location";
import { cloneRange } from "./clone-range";

export function createNodeFrom(token: Token) {
  const loc = cloneLocation(token.loc);
  const range = cloneRange(token.range);

  return {
    type: token.type,
    value: token.value,
    loc,
    range,
  };
}
