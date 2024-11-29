import { constructTree } from "../construct-tree";

import OPENING_CLOSING_TEXT_INPUT from "../../tokenizer/__tests__/__output__/opening-closing-text";

import NESTED_TAGS_INPUT from "../../tokenizer/__tests__/__output__/nested-tags";

import VOID_TAGS_INPUT from "../../tokenizer/__tests__/__output__/void-tags";

import SCRIPT_ELEMENTS_INPUT from "../../tokenizer/__tests__/__output__/script-elements";

import CUSTOM_ELEMENTS_INPUT from "../../tokenizer/__tests__/__output__/custom-elements";

import DOCTYPES_INPUT from "../../tokenizer/__tests__/__output__/doctypes";

import STYLE_ELEMENTS_INPUT from "../../tokenizer/__tests__/__output__/style-elements";

import COMMENTS_INPUT from "../../tokenizer/__tests__/__output__/comments";

import STYLE_ELEMENTS_ATTRIBUTES_INPUT from "../../tokenizer/__tests__/__output__/style-elements-attributes";

import TAGS_REGISTER_INPUT from "../../tokenizer/__tests__/__output__/tags-register";

import ATTRIBUTES_APOSTROPHE_INPUT from "../../tokenizer/__tests__/__output__/attributes-apostrophe";

import ATTRIBUTES_EMPTY_INPUT from "../../tokenizer/__tests__/__output__/attributes-empty";

import SCRIPT_ELEMENTS_ATTRIBUTES_INPUT from "../../tokenizer/__tests__/__output__/script-elements-attributes";

import EMPTY_INPUT from "../../tokenizer/__tests__/__output__/empty";

import SVG_INPUT from "../../tokenizer/__tests__/__output__/svg";

import ATTRIBUTES_MULTILINE_CRLF_INPUT from "../../tokenizer/__tests__/__output__/attributes-multiline-crlf";

import ATTRIBUTES_BARE_WRONG_QUOTE_INPUT from "../../tokenizer/__tests__/__output__/attributes-bare-wrong-quote";

import TEMPLATE_ATTRIBUTES_KEY from "../../tokenizer/__tests__/__output__/templates-attributes-key";
import TEMPLATE_ATTRIBUTES_VALUE_BARE from "../../tokenizer/__tests__/__output__/templates-attributes-value-bare";
import TEMPLATE_ATTRIBUTES_VALUE_WRAPPED from "../../tokenizer/__tests__/__output__/templates-attributes-value-wrapped";
import TEMPLATE_ATTRIBUTES_VALUE_WRAPPED_2 from "../../tokenizer/__tests__/__output__/templates-attributes-value-wrapped-2";
import TEMPLATE_DATA from "../../tokenizer/__tests__/__output__/templates-data";
import TEMPLATE_COMMENT from "../../tokenizer/__tests__/__output__/templates-comment";
import TEMPLATE_SCRIPT_CONTENT from "../../tokenizer/__tests__/__output__/templates-script-content";
import TEMPLATE_STYLE_CONTENT from "../../tokenizer/__tests__/__output__/templates-style-content";
import TEMPLATE_CONTENT_END from "../../tokenizer/__tests__/__output__/templates-content-end";

import { clearParent } from "../../utils";
import { toMatchFile } from "jest-file-snapshot";

expect.extend({ toMatchFile });
describe("construct-tree", () => {
  test.each([
    ["Attributes apostrophe", ATTRIBUTES_APOSTROPHE_INPUT],
    ["Attributes empty", ATTRIBUTES_EMPTY_INPUT],
    ["Attributes bare wrong quote", ATTRIBUTES_BARE_WRONG_QUOTE_INPUT],
    ["Comments", COMMENTS_INPUT],
    ["Opening closing text", OPENING_CLOSING_TEXT_INPUT],
    ["Void tags", VOID_TAGS_INPUT],
    ["Script elements", SCRIPT_ELEMENTS_INPUT],
    ["Script elements attributes", SCRIPT_ELEMENTS_ATTRIBUTES_INPUT],
    ["Nested tags", NESTED_TAGS_INPUT],
    ["Custom elements", CUSTOM_ELEMENTS_INPUT],
    ["Doctypes", DOCTYPES_INPUT],
    ["Style elements", STYLE_ELEMENTS_INPUT],
    ["Style elements attributes", STYLE_ELEMENTS_ATTRIBUTES_INPUT],
    ["Tag register", TAGS_REGISTER_INPUT],
    ["Empty", EMPTY_INPUT],
    ["Svg", SVG_INPUT],
    ["Attributes multiline (CRLF)", ATTRIBUTES_MULTILINE_CRLF_INPUT],
    ["Templates Attributes Key", TEMPLATE_ATTRIBUTES_KEY],
    ["Templates Attributes Value Bare", TEMPLATE_ATTRIBUTES_VALUE_BARE],
    ["Templates Attributes Value Wrapped", TEMPLATE_ATTRIBUTES_VALUE_WRAPPED],
    [
      "Templates Attributes Value Wrapped 2",
      TEMPLATE_ATTRIBUTES_VALUE_WRAPPED_2,
    ],
    ["Templates Data", TEMPLATE_DATA],
    ["Templates Comment", TEMPLATE_COMMENT],
    ["Templates Script Content", TEMPLATE_SCRIPT_CONTENT],
    ["Templates Style Content", TEMPLATE_STYLE_CONTENT],
    ["Templates Content End", TEMPLATE_CONTENT_END],
  ])("%s", (name: string, inputTokens: any) => {
    const { ast } = constructTree(inputTokens);
    expect(JSON.stringify(clearParent(ast), null, 2)).toMatchFile(undefined, {
      fileExtension: ".json",
    });
  });
});
