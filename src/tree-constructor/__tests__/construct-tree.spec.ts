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
  ])("%s", (name: string, inputTokens: any) => {
    const { ast } = constructTree(inputTokens, undefined);
    expect(JSON.stringify(clearParent(ast), null, 2)).toMatchFile(undefined, {
      fileExtension: ".json",
    });
  });
});
