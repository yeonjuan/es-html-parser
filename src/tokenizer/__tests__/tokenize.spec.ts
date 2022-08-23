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
import STYLE_ELEMENTS from "./__output__/style-elements";
import TAGS_REGISTER from "./__output__/tags-register";

describe("tokenize", () => {
  test.each(
    // prettier-ignore
    [
      [
        "Attributes apostrophe",
        "attributes-apostrophe.html",
        ATTRIBUTES_APOSTROPHE
      ],
      [
        "Attributes bare",
        "attributes-bare.html",
        ATTRIBUTES_BARE
      ],
      [
        "Attributes empty",
        "attributes-empty.html",
        ATTRIBUTES_EMPTY
      ],
      [
        "Attributes quote",
        "attributes-quote.html",
        ATTRIBUTES_QUOTE
      ],
      [
        "Comments",
        "comments.html",
        COMMENTS
      ],
      [
        "Custom elements",
        "custom-elements.html",
        CUSTOM_ELEMENTS
      ],
      [
        "Doctypes",
        "doctypes.html",
        DOCTYPES
      ],
      [
        "Nested tags",
        "nested-tags.html",
        NESTED_TAGS
      ],
      [
        "Opening and closing text",
        "opening-closing-text.html",
        OPENING_CLOSING_TEXT,
      ],
      [
        "Script elements attributes",
        "script-elements-attributes.html",
        SCRIPT_ELEMENTS_ATTRIBUTES
      ],
      [
        "Script element",
        "script-elements.html",
        SCRIPT_ELEMENTS
      ],
      [
        "Tags register",
        "tags-register.html",
        TAGS_REGISTER
      ],
      [
        "Style elements",
        "style-elements.html",
        STYLE_ELEMENTS,
      ]
    ]
  )("%s", (name, input, output) => {
    const inputPath = path.join(__dirname, "__input__", input);
    const html = fs.readFileSync(inputPath, "utf-8");
    const { tokens } = tokenize(html, undefined);
    expect(tokens).toEqual(output);
  });
});
