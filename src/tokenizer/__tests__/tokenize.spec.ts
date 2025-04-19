import * as fs from "fs";
import * as path from "path";
import { tokenize } from "../tokenize";
import OPENING_CLOSING_TEXT from "./__output__/opening-closing-text";
import NESTED_TAGS from "./__output__/nested-tags";
import COMMENTS from "./__output__/comments";
import ATTRIBUTES_EMPTY from "./__output__/attributes-empty";
import ATTRIBUTES_BARE from "./__output__/attributes-bare";
import ATTRIBUTES_APOSTROPHE from "./__output__/attributes-apostrophe";
import ATTRIBUTES_QUOTE from "./__output__/attributes-quote";
import CUSTOM_ELEMENTS from "./__output__/custom-elements";
import DOCTYPES from "./__output__/doctypes";
import SCRIPT_ELEMENTS_ATTRIBUTES from "./__output__/script-elements-attributes";
import SCRIPT_ELEMENTS from "./__output__/script-elements";
import STYLE_ELEMENTS_ATTRIBUTES from "./__output__/style-elements-attributes";
import STYLE_ELEMENTS from "./__output__/style-elements";
import TAGS_REGISTER from "./__output__/tags-register";
import VOID_TAGS from "./__output__/void-tags";
import EMPTY from "./__output__/empty";
import SVG from "./__output__/svg";
import ATTRIBUTES_MULTILINE_CRLF from "./__output__/attributes-multiline-crlf";
import ATTRIBUTES_BARE_WRONG_QUOTE from "./__output__/attributes-bare-wrong-quote";
import TEMPLATE_ATTRIBUTES_KEY from "./__output__/templates-attributes-key";
import TEMPLATE_ATTRIBUTES_KEY_WRAPPER from "./__output__/templates-attributes-key-wrapper";
import TEMPLATE_ATTRIBUTES_VALUE_BARE from "./__output__/templates-attributes-value-bare";
import TEMPLATE_ATTRIBUTES_VALUE_WRAPPED from "./__output__/templates-attributes-value-wrapped";
import TEMPLATE_ATTRIBUTES_VALUE_WRAPPED_2 from "./__output__/templates-attributes-value-wrapped-2";
import TEMPLATE_DATA from "./__output__/templates-data";
import TEMPLATE_COMMENT from "./__output__/templates-comment";
import TEMPLATE_SCRIPT_CONTENT from "./__output__/templates-script-content";
import TEMPLATE_STYLE_CONTENT from "./__output__/templates-style-content";
import TEMPLATE_CONTENT_END from "./__output__/templates-content-end";

import { defaultTokenAdapter } from "../../token-adapter";
import { Range, TemplateInfo } from "../../types";

describe("tokenize", () => {
  test.each([
    [
      "Attributes apostrophe",
      "attributes-apostrophe.html",
      ATTRIBUTES_APOSTROPHE,
      null,
      null,
    ],
    ["Attributes bare", "attributes-bare.html", ATTRIBUTES_BARE, null, null],
    [
      "Attributes bare wrong quotes",
      "attributes-bare-wrong-quote.html",
      ATTRIBUTES_BARE_WRONG_QUOTE,
      null,
      null,
    ],
    ["Attributes empty", "attributes-empty.html", ATTRIBUTES_EMPTY, null, null],
    ["Attributes quote", "attributes-quote.html", ATTRIBUTES_QUOTE, null, null],
    ["Comments", "comments.html", COMMENTS, null, null],
    ["Custom elements", "custom-elements.html", CUSTOM_ELEMENTS, null, null],
    ["Doctypes", "doctypes.html", DOCTYPES, null, null],
    ["Nested tags", "nested-tags.html", NESTED_TAGS, null, null],
    [
      "Opening and closing text",
      "opening-closing-text.html",
      OPENING_CLOSING_TEXT,
      null,
      null,
    ],
    [
      "Script elements attributes",
      "script-elements-attributes.html",
      SCRIPT_ELEMENTS_ATTRIBUTES,
      null,
      null,
    ],
    ["Script element", "script-elements.html", SCRIPT_ELEMENTS, null, null],
    ["Tags register", "tags-register.html", TAGS_REGISTER, null, null],
    [
      "Style elements attributes",
      "style-elements-attributes.html",
      STYLE_ELEMENTS_ATTRIBUTES,
      null,
      null,
    ],
    ["Style elements", "style-elements.html", STYLE_ELEMENTS, null, null],
    ["Void tags", "void-tags.html", VOID_TAGS, null, null],
    ["Empty", "empty.html", EMPTY, null, null],
    ["Svg", "svg.html", SVG, null, null],
    [
      "Attributes multiline CRLF",
      "attributes-multiline.html",
      ATTRIBUTES_MULTILINE_CRLF,
      (html: string) => {
        return html.replace(/\n/gi, "\r\n");
      },
      null,
    ],
    [
      "Template Attributes Key",
      "templates-attributes-key.html",
      TEMPLATE_ATTRIBUTES_KEY,
      null,
      [[5, 11]] as Range[],
    ],
    [
      "Template Attributes Key (wrapper)",
      "templates-attributes-key.html",
      TEMPLATE_ATTRIBUTES_KEY_WRAPPER,
      null,
      [
        {
          open: [5, 7],
          close: [10, 11],
        },
      ] as TemplateInfo[],
    ],
    [
      "Template Attributes Value Bare",
      "templates-attributes-value-bare.html",
      TEMPLATE_ATTRIBUTES_VALUE_BARE,
      null,
      [[8, 13]] as Range[],
    ],
    [
      "Template Attributes Value Wrapped",
      "templates-attributes-value-wrapped.html",
      TEMPLATE_ATTRIBUTES_VALUE_WRAPPED,
      null,
      [[9, 14]] as Range[],
    ],
    [
      "Template Attributes Value Wrapped 2",
      "templates-attributes-value-wrapped-2.html",
      TEMPLATE_ATTRIBUTES_VALUE_WRAPPED_2,
      null,
      [
        [16, 22],
        [23, 31],
      ] as Range[],
    ],
    [
      "Templates Data",
      "templates-data.html",
      TEMPLATE_DATA,
      null,
      [[5, 16]] as Range[],
    ],
    [
      "Templates Comment",
      "templates-comment.html",
      TEMPLATE_COMMENT,
      null,
      [[4, 14]] as Range[],
    ],
    [
      "Templates Script Content",
      "templates-script-content.html",
      TEMPLATE_SCRIPT_CONTENT,
      null,
      [[8, 18]] as Range[],
    ],
    [
      "Templates Style Content",
      "templates-style-content.html",
      TEMPLATE_STYLE_CONTENT,
      null,
      [[7, 17]] as Range[],
    ],
    [
      "Templates Content End",
      "templates-content-end.html",
      TEMPLATE_CONTENT_END,
      null,
      [[0, 10]] as Range[],
    ],
  ])(
    "%s",
    (
      name,
      input,
      output,
      process: null | ((html: string) => string) = null,
      ranges: null | TemplateInfo[]
    ) => {
      const inputPath = path.join(__dirname, "__input__", input);
      let html = fs.readFileSync(inputPath, "utf-8");
      if (process) {
        html = process(html);
      }
      const { tokens } = tokenize(
        html,
        defaultTokenAdapter,
        ranges ?? undefined
      );
      expect(tokens).toEqual(output);
    }
  );

  it("parsing error", () => {
    const html = fs.readFileSync(
      path.join(__dirname, "__input__", "parsing-error-no-open-end.html"),
      "utf-8"
    );
    expect(() =>
      tokenize(html, defaultTokenAdapter)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Unexpected end of tag. Expected '>' to close the opening tag. (2:2)"`
    );
  });
});
