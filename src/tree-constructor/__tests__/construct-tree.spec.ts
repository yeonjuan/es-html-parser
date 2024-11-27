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

import SVG_INPUT from "../../tokenizer/__tests__/__output__/svg";
import SVG_OUTPUT from "./__output__/svg";

import ATTRIBUTES_MULTILINE_CRLF_INPUT from "../../tokenizer/__tests__/__output__/attributes-multiline-crlf";
import ATTRIBUTES_MULTILINE_CRLF_OUTPUT from "./__output__/attributes-multiline-crlf";

import ATTRIBUTES_BARE_WRONG_QUOTE_INPUT from "../../tokenizer/__tests__/__output__/attributes-bare-wrong-quote";
import ATTRIBUTES_BARE_WRONG_QUOTE_OUTPUT from "./__output__/attributes-bare-wrong-quote";

import TEMPLATE_SYNTAX_ATTRIBUTES_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-attributes";
import TEMPLATE_SYNTAX_ATTRIBUTES_OUTPUT from "./__output__/template-syntax-attributes";

import TEMPLATE_SYNTAX_ATTRIBUTES_KEY_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-attributes-key";
import TEMPLATE_SYNTAX_ATTRIBUTES_KEY_OUTPUT from "./__output__/template-syntax-attributes-key";

import TEMPLATE_SYNTAX_DATA_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-data";
import TEMPLATE_SYNTAX_DATA_OUTPUT from "./__output__/template-syntax-data";

import TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_BARE_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-attributes-value-bare";
import TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_BARE_OUTPUT from "./__output__/template-syntax-attributes-value-bare";

import TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_QUOTE_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-attributes-value-quote";
import TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_QUOTE_OUTPUT from "./__output__/template-syntax-attributes-value-quote";

import TEMPLATE_SYNTAX_SCRIPT_ATTRIBUTES_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-script-attributes";
import TEMPLATE_SYNTAX_SCRIPT_ATTRIBUTES_OUTPUT from "./__output__/template-syntax-script-attributes";

import TEMPLATE_SYNTAX_ATTRIBUTES_KEY_VALUE_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-attributes-key-value";
import TEMPLATE_SYNTAX_ATTRIBUTES_KEY_VALUE_OUTPUT from "./__output__/template-syntax-attributes-key-value";

import TEMPLATE_SYNTAX_SCRIPT_CONTENT_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-script-content";
import TEMPLATE_SYNTAX_SCRIPT_CONTENT_OUTPUT from "./__output__/template-syntax-script-content";

import TEMPLATE_SYNTAX_STYLE_CONTENT_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-style-content";
import TEMPLATE_SYNTAX_STYLE_CONTENT_OUTPUT from "./__output__/template-syntax-style-content";

import TEMPLATE_SYNTAX_COMMENT_CONTENT_INPUT from "../../tokenizer/__tests__/__output__/template-syntax-comment-content";
import TEMPLATE_SYNTAX_COMMENT_CONTENT_OUTPUT from "./__output__/template-syntax-comment-content";

import { clearParent } from "../../utils";

describe("construct-tree", () => {
  test.each([
    [
      "Attributes apostrophe",
      ATTRIBUTES_APOSTROPHE_INPUT,
      ATTRIBUTES_APOSTROPHE_OUTPUT,
    ],
    ["Attributes empty", ATTRIBUTES_EMPTY_INPUT, ATTRIBUTES_EMPTY_OUTPUT],
    [
      "Attributes bare wrong quote",
      ATTRIBUTES_BARE_WRONG_QUOTE_INPUT,
      ATTRIBUTES_BARE_WRONG_QUOTE_OUTPUT,
    ],
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
    ["Svg", SVG_INPUT, SVG_OUTPUT],
    [
      "Attributes multiline (CRLF)",
      ATTRIBUTES_MULTILINE_CRLF_INPUT,
      ATTRIBUTES_MULTILINE_CRLF_OUTPUT,
    ],
    [
      "Template Syntax Attributes",
      TEMPLATE_SYNTAX_ATTRIBUTES_INPUT,
      TEMPLATE_SYNTAX_ATTRIBUTES_OUTPUT,
    ],
    [
      "Template Syntax Attributes Key",
      TEMPLATE_SYNTAX_ATTRIBUTES_KEY_INPUT,
      TEMPLATE_SYNTAX_ATTRIBUTES_KEY_OUTPUT,
    ],
    [
      "Template Syntax Data",
      TEMPLATE_SYNTAX_DATA_INPUT,
      TEMPLATE_SYNTAX_DATA_OUTPUT,
    ],
    [
      "Template Syntax Attributes Value Bare",
      TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_BARE_INPUT,
      TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_BARE_OUTPUT,
    ],
    [
      "Template Syntax Attributes Quote Input",
      TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_QUOTE_INPUT,
      TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_QUOTE_OUTPUT,
    ],
    [
      "Template Syntax Script Attributes",
      TEMPLATE_SYNTAX_SCRIPT_ATTRIBUTES_INPUT,
      TEMPLATE_SYNTAX_SCRIPT_ATTRIBUTES_OUTPUT,
    ],
    [
      "Template Syntax Attributes Key Value",
      TEMPLATE_SYNTAX_ATTRIBUTES_KEY_VALUE_INPUT,
      TEMPLATE_SYNTAX_ATTRIBUTES_KEY_VALUE_OUTPUT,
    ],
    [
      "Template Syntax Script Content Input",
      TEMPLATE_SYNTAX_SCRIPT_CONTENT_INPUT,
      TEMPLATE_SYNTAX_SCRIPT_CONTENT_OUTPUT,
    ],
    [
      "Template Syntax Style Content",
      TEMPLATE_SYNTAX_STYLE_CONTENT_INPUT,
      TEMPLATE_SYNTAX_STYLE_CONTENT_OUTPUT,
    ],
    [
      "Template Syntax Comment Content",
      TEMPLATE_SYNTAX_COMMENT_CONTENT_INPUT,
      TEMPLATE_SYNTAX_COMMENT_CONTENT_OUTPUT,
    ],
  ])("%s", (name: string, inputTokens: any, output: any) => {
    const { ast } = constructTree(inputTokens, undefined);
    expect(clearParent(ast)).toEqual(output);
  });
});
