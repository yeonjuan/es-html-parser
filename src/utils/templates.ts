import { TemplateInfo, Token } from "../types";
import { TokenTypes } from "../constants";
import { PartToken, TemplateToken, TokenizerState } from "../types";
import { CharsType } from "../tokenizer/chars";

export const getRange = (info: TemplateInfo) => {
  return Array.isArray(info) ? info : [info.open[0], info.close[1]];
};

const toTokenType = (
  charsType: CharsType
):
  | TokenTypes.Part
  | TokenTypes.OpenTemplate
  | TokenTypes.CloseTemplate
  | TokenTypes.Template => {
  switch (charsType) {
    case CharsType.HTML:
      return TokenTypes.Part;
    case CharsType.Template:
      return TokenTypes.Template;
    case CharsType.OpenTemplate:
      return TokenTypes.OpenTemplate;
    case CharsType.CloseTemplate:
      return TokenTypes.CloseTemplate;
  }
};

export function createParts<T extends TokenTypes>(
  state: TokenizerState,
  type: T
): (PartToken<T> | TemplateToken<T>)[] {
  return state.mode === "template" && state.accumulatedContent.hasTemplate()
    ? state.accumulatedContent.getParts().map((chars) => {
        const tokenType = toTokenType(chars.type);
        if (tokenType === TokenTypes.Part) {
          const base = {
            type: TokenTypes.Part,
            range: chars.range,
            loc: state.sourceCode.getLocationOf(chars.range),
            value: chars.value,
            partOf: type,
          };
          return {
            ...base,
            range: state.tokenAdapter.finalizeRange(base),
            loc: state.tokenAdapter.finalizeLocation(base),
          } as PartToken<T>;
        }

        const open: Token<TokenTypes.OpenTemplate> | undefined = chars.wrapper
          ?.open
          ? {
              type: TokenTypes.OpenTemplate,
              range: chars.wrapper.open,
              loc: state.sourceCode.getLocationOf(chars.wrapper.open),
              value: state.sourceCode.source.slice(
                chars.wrapper.open[0],
                chars.wrapper.open[1]
              ),
            }
          : undefined;

        const close: Token<TokenTypes.CloseTemplate> | undefined = chars.wrapper
          ?.close
          ? {
              type: TokenTypes.CloseTemplate,
              range: chars.wrapper.close,
              loc: state.sourceCode.getLocationOf(chars.wrapper.close),
              value: state.sourceCode.source.slice(
                chars.wrapper.close[0],
                chars.wrapper.close[1]
              ),
            }
          : undefined;

        const base = {
          type: toTokenType(chars.type),
          range: chars.range,
          loc: state.sourceCode.getLocationOf(chars.range),
          value: chars.value,
          partOf: type,
          open: open && {
            ...open,
            range: state.tokenAdapter.finalizeRange(open),
            loc: state.tokenAdapter.finalizeLocation(open),
          },
          close: close && {
            ...close,
            range: state.tokenAdapter.finalizeRange(close),
            loc: state.tokenAdapter.finalizeLocation(close),
          },
        };
        return {
          ...base,
          range: state.tokenAdapter.finalizeRange(base),
          loc: state.tokenAdapter.finalizeLocation(base),
        } as TemplateToken<T>;
      })
    : [];
}
