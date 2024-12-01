import { TokenTypes } from "../constants";
import { TemplatableToken, TokenizerState } from "../types";

export function createTemplates<T extends TokenTypes>(
  state: TokenizerState,
  type: T
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
          range: state.tokenAdapter.finalizeRange(token),
          loc: state.tokenAdapter.finalizeLocation(token),
        };
      })
    : [];
}
