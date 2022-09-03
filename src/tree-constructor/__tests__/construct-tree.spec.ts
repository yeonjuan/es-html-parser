import { constructTree } from "../construct-tree";
import OPENING_CLOSING_TEXT_INPUT from "./__input__/opening-closing-text";
import OPENING_CLOSING_TEXT_OUTPUT from "./__output__/opening-closing-text";
import VOID_TAGS_INPUT from "./__input__/void-tags";
import VOID_TAGS_OUTPUT from "./__output__/void-tags";
import SCRIPT_ELEMENTS_INPUT from "./__input__/script-elements";
import SCRIPT_ELEMENTS_OUTPUT from "./__output__/script-elements";
import { clearParent } from "../../utils";

describe("construct-tree", () => {
  test.each([
    // [
    //   "Attributes apostrophe",
    //   ATTRIBUTES_APOSTROPHE_INPUT,
    //   ATTRIBUTES_APOSTROPHE_OUTPUT,
    // ],
    [
      "Opening closing text",
      OPENING_CLOSING_TEXT_INPUT,
      OPENING_CLOSING_TEXT_OUTPUT,
    ],
    ["Void tags", VOID_TAGS_INPUT, VOID_TAGS_OUTPUT],
    ["Script elements", SCRIPT_ELEMENTS_INPUT, SCRIPT_ELEMENTS_OUTPUT],
    // ["Doctypes", DOCTYPES_TOKENS, DOCTYPES_OUTPUT],
    // ["Nested tags", NESTED_TAGS_TOKENS, NESTED_TAGS_OUTPUT],
    // ["Script tags", SCRIPT_TAGS_TOKENS, SCRIPT_TAGS_OUTPUT],
    // ["Style tags", STYLE_TAGS_TOKENS, STYLE_TAGS_OUTPUT],
    // ["Tag register", TAG_REGISTER_TOKENS, TAG_REGISTER_OUTPUT],
  ])("%s", (name: string, inputTokens: any[], output: any) => {
    const { ast } = constructTree(inputTokens);
    expect(clearParent(ast)).toEqual(output);
  });
});
