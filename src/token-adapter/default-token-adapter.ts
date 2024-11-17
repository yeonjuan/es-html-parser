import type { TokenAdapter } from "../types";

export const defaultTokenAdapter: TokenAdapter = {
  finalizeRange(token) {
    return token.range;
  },
  finalizeLocation(token) {
    return token.loc;
  },
};
