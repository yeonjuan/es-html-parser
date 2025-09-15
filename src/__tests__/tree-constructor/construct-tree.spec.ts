import { constructTree } from "../../tree-constructor/construct-tree";

import ATTRIBUTES_APOSTROPHE_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-attributes-apostrophe.html-0.json";
import ATTRIBUTES_BARE_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-attributes-bare.html-0.json";
import ATTRIBUTES_BARE_WRONG_QUOTE_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-attributes-bare-wrong-quote.html-0.json";
import ATTRIBUTES_EMPTY_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-attributes-empty.html-0.json";
import ATTRIBUTES_MULTILINE_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-attributes-multiline.html-0.json";
import ATTRIBUTES_QUOTE_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-attributes-quote.html-0.json";
import COMMENTS_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-comments.html-0.json";
import CUSTOM_ELEMENTS_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-custom-elements.html-0.json";
import CUSTOM_TAG_RAW_CONTENT from "../tokenizer/__file_snapshots__/Tokenizer-custom-tag-raw-content.html-0.json";
import DOCTYPES_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-doctypes.html-0.json";
import EMPTY_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-empty.html-0.json";
import NESTED_TAGS_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-nested-tags.html-0.json";
import OPENING_CLOSING_TEXT_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-opening-closing-text.html-0.json";
import SCRIPT_ELEMENTS_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-script-elements.html-0.json";
import SCRIPT_ELEMENTS_ATTRIBUTES_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-script-elements-attributes.html-0.json";
import STYLE_ELEMENTS_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-style-elements.html-0.json";
import STYLE_ELEMENTS_ATTRIBUTES_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-style-elements-attributes.html-0.json";
import SVG_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-svg.html-0.json";
import TAGS_REGISTER_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-tags-register.html-0.json";
import TEMPLATE_ATTRIBUTES_KEY from "../tokenizer/__file_snapshots__/Tokenizer-templates-attributes-key.html-0.json";
import TEMPLATE_ATTRIBUTES_VALUE_BARE from "../tokenizer/__file_snapshots__/Tokenizer-templates-attributes-value-bare.html-0.json";
import TEMPLATE_ATTRIBUTES_VALUE_WRAPPED from "../tokenizer/__file_snapshots__/Tokenizer-templates-attributes-value-wrapped.html-0.json";
import TEMPLATE_ATTRIBUTES_VALUE_WRAPPED_2 from "../tokenizer/__file_snapshots__/Tokenizer-templates-attributes-value-wrapped-2.html-0.json";
import TEMPLATE_COMMENT from "../tokenizer/__file_snapshots__/Tokenizer-templates-comment.html-0.json";
import TEMPLATE_CONTENT_END from "../tokenizer/__file_snapshots__/Tokenizer-templates-content-end.html-0.json";
import TEMPLATE_DATA from "../tokenizer/__file_snapshots__/Tokenizer-templates-data.html-0.json";
import TEMPLATE_SCRIPT_CONTENT from "../tokenizer/__file_snapshots__/Tokenizer-templates-script-content.html-0.json";
import TEMPLATE_STYLE_CONTENT from "../tokenizer/__file_snapshots__/Tokenizer-templates-style-content.html-0.json";
import VOID_TAGS_INPUT from "../tokenizer/__file_snapshots__/Tokenizer-void-tags.html-0.json";
import { clearParent } from "../../utils";
import { toMatchFile } from "jest-file-snapshot";

expect.extend({ toMatchFile });

describe("construct-tree", () => {
  test.each([
    ["Attributes apostrophe", ATTRIBUTES_APOSTROPHE_INPUT],
    ["Attributes bare", ATTRIBUTES_BARE_INPUT],
    ["Attributes bare wrong quote", ATTRIBUTES_BARE_WRONG_QUOTE_INPUT],
    ["Attributes empty", ATTRIBUTES_EMPTY_INPUT],
    ["Attributes multiline", ATTRIBUTES_MULTILINE_INPUT],
    ["Attributes quote", ATTRIBUTES_QUOTE_INPUT],
    ["Comments", COMMENTS_INPUT],
    ["Custom elements", CUSTOM_ELEMENTS_INPUT],
    ["Custom tag raw content", CUSTOM_TAG_RAW_CONTENT],
    ["Doctypes", DOCTYPES_INPUT],
    ["Empty", EMPTY_INPUT],
    ["Nested tags", NESTED_TAGS_INPUT],
    ["Opening closing text", OPENING_CLOSING_TEXT_INPUT],
    ["Script elements", SCRIPT_ELEMENTS_INPUT],
    ["Script elements attributes", SCRIPT_ELEMENTS_ATTRIBUTES_INPUT],
    ["Style elements", STYLE_ELEMENTS_INPUT],
    ["Style elements attributes", STYLE_ELEMENTS_ATTRIBUTES_INPUT],
    ["Svg", SVG_INPUT],
    ["Tags register", TAGS_REGISTER_INPUT],
    ["Templates attributes key", TEMPLATE_ATTRIBUTES_KEY],
    ["Templates attributes value bare", TEMPLATE_ATTRIBUTES_VALUE_BARE],
    ["Templates attributes value wrapped", TEMPLATE_ATTRIBUTES_VALUE_WRAPPED],
    [
      "Templates attributes value wrapped 2",
      TEMPLATE_ATTRIBUTES_VALUE_WRAPPED_2,
    ],
    ["Templates comment", TEMPLATE_COMMENT],
    ["Templates content end", TEMPLATE_CONTENT_END],
    ["Templates data", TEMPLATE_DATA],
    ["Templates script content", TEMPLATE_SCRIPT_CONTENT],
    ["Templates style content", TEMPLATE_STYLE_CONTENT],
    ["Void tags", VOID_TAGS_INPUT],
  ])("%s", (_name: string, inputTokens: any) => {
    const { ast } = constructTree(inputTokens);
    expect(JSON.stringify(clearParent(ast), null, 2)).toMatchFile(undefined, {
      fileExtension: ".json",
    });
  });
});
