import { constructTree } from "../construct-tree";

import OPENING_CLOSING_TEXT_INPUT from "../../tokenizer/__tests__/__output__/opening-closing-text";
import OPENING_CLOSING_TEXT_OUTPUT from "./__output__/opening-closing-text";

import NESTED_TAGS_INPUT from "../../tokenizer/__tests__/__output__/nested-tags";
import NESTED_TAGS_OUTPUT from "./__output__/nested-tags";

import VOID_TAGS_INPUT from "../../tokenizer/__tests__/__output__/void-tags";
import VOID_TAGS_OUTPUT from "./__output__/void-tags";

import SCRIPT_ELEMENTS_INPUT from "../../tokenizer/__tests__/__output__/script-elements";
import SCRIPT_ELEMENTS_OUTPUT from "./__output__/script-elements";

import CUSTOM_ELEMENTS_INPUT from "../../tokenizer/__tests__/__output__/custom-elements";
import CUSTOM_ELEMENTS_OUTPUT from "./__output__/custom-elements";

import DOCTYPES_INPUT from "../../tokenizer/__tests__/__output__/doctypes";
import DOCTYPES_OUTPUT from "./__output__/doctypes";

import STYLE_ELEMENTS_INPUT from "../../tokenizer/__tests__/__output__/style-elements";
import STYLE_ELEMENTS_OUTPUT from "./__output__/style-elements";

import COMMENTS_INPUT from "../../tokenizer/__tests__/__output__/comments";
import COMMENTS_OUTPUT from "./__output__/comments";

import STYLE_ELEMENTS_ATTRIBUTES_INPUT from "../../tokenizer/__tests__/__output__/style-elements-attributes";
import STYLE_ELEMENTS_ATTRIBUTES_OUTPUT from "./__output__/style-elements-attributes";

import TAGS_REGISTER_INPUT from "../../tokenizer/__tests__/__output__/tags-register";
import TAGS_REGISTERS_OUTPUT from "./__output__/tags-register";

import ATTRIBUTES_APOSTROPHE_INPUT from "../../tokenizer/__tests__/__output__/attributes-apostrophe";
import ATTRIBUTES_APOSTROPHE_OUTPUT from "./__output__/attributes-apostrophe";

import ATTRIBUTES_EMPTY_INPUT from "../../tokenizer/__tests__/__output__/attributes-empty";
import ATTRIBUTES_EMPTY_OUTPUT from "./__output__/attributes-empty";

import SCRIPT_ELEMENTS_ATTRIBUTES_INPUT from "../../tokenizer/__tests__/__output__/script-elements-attributes";
import SCRIPT_ELEMENTS_ATTRIBUTES_OUTPUT from "./__output__/script-elements-attributes";

import EMPTY_INPUT from "../../tokenizer/__tests__/__output__/empty";
import EMPTY_OUTPUT from "./__output__/empty";

import { clearParent } from "../../utils";

describe("construct-tree", () => {
  test.each([
    [
      "Attributes apostrophe",
      ATTRIBUTES_APOSTROPHE_INPUT,
      ATTRIBUTES_APOSTROPHE_OUTPUT,
    ],
    ["Attributes empty", ATTRIBUTES_EMPTY_INPUT, ATTRIBUTES_EMPTY_OUTPUT],
    ["Comments", COMMENTS_INPUT, COMMENTS_OUTPUT],
    [
      "Opening closing text",
      OPENING_CLOSING_TEXT_INPUT,
      OPENING_CLOSING_TEXT_OUTPUT,
    ],
    ["Void tags", VOID_TAGS_INPUT, VOID_TAGS_OUTPUT],
    ["Script elements", SCRIPT_ELEMENTS_INPUT, SCRIPT_ELEMENTS_OUTPUT],
    [
      "Script elements attributes",
      SCRIPT_ELEMENTS_ATTRIBUTES_INPUT,
      SCRIPT_ELEMENTS_ATTRIBUTES_OUTPUT,
    ],
    ["Nested tags", NESTED_TAGS_INPUT, NESTED_TAGS_OUTPUT],
    ["Custom elements", CUSTOM_ELEMENTS_INPUT, CUSTOM_ELEMENTS_OUTPUT],
    ["Doctypes", DOCTYPES_INPUT, DOCTYPES_OUTPUT],
    ["Style elements", STYLE_ELEMENTS_INPUT, STYLE_ELEMENTS_OUTPUT],
    [
      "Style elements attributes",
      STYLE_ELEMENTS_ATTRIBUTES_INPUT,
      STYLE_ELEMENTS_ATTRIBUTES_OUTPUT,
    ],
    ["Tag register", TAGS_REGISTER_INPUT, TAGS_REGISTERS_OUTPUT],
    ["Empty", EMPTY_INPUT, EMPTY_OUTPUT],
  ])("%s", (name: string, inputTokens: any[], output: any) => {
    const { ast } = constructTree(inputTokens, undefined);
    expect(clearParent(ast)).toEqual(output);
  });
});
