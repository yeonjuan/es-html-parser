import { Token } from "../../types";
import { clearParent } from "../../utils";
import { constructTree } from "../construct-tree";
import { construct } from "../handlers/attribute-value";
import VOID_TAGS_INPUT from "./__input__/void-tags";
import VOID_TAGS_OUTPUT from "./__output__/void-tags";

describe("attribute-apostrophe", () => {
  test("snapshot", () => {
    const { ast } = constructTree(VOID_TAGS_INPUT as Token[]);
    expect(clearParent(ast)).toStrictEqual(VOID_TAGS_OUTPUT);
  });
});
