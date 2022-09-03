import { constructTree } from "../construct-tree";
import ATTRIBUTES_TOKENS from "./__input__/attributes";
import ATTRIBUTES_APOSTROPHE_INPUT from "./__input__/attributes-apostrophe";
import ATTRIBUTES_APOSTROPHE_OUTPUT from "./__output__/attributes-apostrophe";
import COMMENTS_TOKENS from "./__input__/comments";
import ATTRIBUTES_OUTPUT from "./__output__/attributes";
import COMMENTS_OUTPUT from "./__output__/comments";
import DOCTYPES_TOKENS from "./__input__/doctypes";
import DOCTYPES_OUTPUT from "./__output__/doctypes";
import NESTED_TAGS_TOKENS from "./__input__/nested-tags";
import NESTED_TAGS_OUTPUT from "./__output__/nested-tags";
import SCRIPT_TAGS_TOKENS from "./__input__/script-tags";
import SCRIPT_TAGS_OUTPUT from "./__output__/script-tags";
import STYLE_TAGS_TOKENS from "./__input__/style-tags";
import STYLE_TAGS_OUTPUT from "./__output__/style-tags";
import TAG_REGISTER_TOKENS from "./__input__/tag-register";
import TAG_REGISTER_OUTPUT from "./__output__/tag-register";
import { clearParent } from "../../utils";

describe("construct-tree", () => {
  test.each([
    // [
    //   "Attributes apostrophe",
    //   ATTRIBUTES_APOSTROPHE_INPUT,
    //   ATTRIBUTES_APOSTROPHE_OUTPUT,
    // ],
    ["Comments", COMMENTS_TOKENS, COMMENTS_OUTPUT],
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
