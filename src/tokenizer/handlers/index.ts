import { TokenizeHandler } from "../../types";

export * as attributeKey from "./attribute-key";
export * as attributeValueBare from "./attribute-value-bare";
export * as attributeValueWrapped from "./attribute-value-wrapped";
export * as attributeValue from "./attribute-value";
export * as attributes from "./attributes";
export * as closeTag from "./close-tag";
export * as commentContent from "./comment-content";
export * as data from "./data";
export * as doctypeAttributeBare from "./doctype-attribute-bare";
export * as doctypeAttributeWrapped from "./doctype-attribute-wrapped";
export * as doctypeAttributes from "./doctype-attributes";
export * as DoctypeClose from "./doctype-end";
export * as DoctypeOpen from "./doctype-start";
export * as openTagEnd from "./open-tag-end";
export * as openTagStart from "./open-tag-start";
export * as scriptTagContent from "./script-tag-content";
export * as styleTagContent from "./style-tag-content";
export * as customTagRawContent from "./custom-tag-raw-content";
export const noop: TokenizeHandler = {
  parse: () => void 0,
};
