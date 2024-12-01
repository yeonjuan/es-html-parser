import { TokenTypes } from "../constants";
import { TemplatableToken, TokenAdapter, TokenizerState } from "../types";

export function createTemplates<T extends TokenTypes>(
  state: TokenizerState,
  type: T,
  tokenAdapter: TokenAdapter
): TemplatableToken<T>[] {
  return state.mode === "template" && state.accumulatedContent.hasTemplate()
    ? state.accumulatedContent.getTemplates().map((chars) => {
        const token = {
          type: type,
          range: chars.range,
          loc: state.sourceCode.getLocationOf(chars.range),
          isTemplate: chars.isTemplate,
          value: chars.value,
        };
        return {
          ...token,
          range: tokenAdapter.finalizeRange(token),
          loc: tokenAdapter.finalizeLocation(token),
        };
      })
    : [];
}
