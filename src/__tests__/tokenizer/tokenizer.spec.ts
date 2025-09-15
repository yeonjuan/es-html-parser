import { toMatchFile } from "jest-file-snapshot";
import fs from "fs";
import path from "path";
import { tokenize } from "../../tokenizer";
import { defaultTokenAdapter } from "../../token-adapter";
expect.extend({ toMatchFile });

const readFixture = (name: string) =>
  fs.readFileSync(path.join(__dirname, "../__fixtures__", name), "utf-8");

const expectMatchSnapshot = (tokens: any[]) => {
  expect(JSON.stringify(tokens, null, 2)).toMatchFile(undefined, {
    fileExtension: ".json",
  });
};

const testTokenize = (name: string) => {
  test(name, () => {
    const input = readFixture(name);
    const { tokens } = tokenize(input, defaultTokenAdapter);
    expectMatchSnapshot(tokens);
  });
};

describe("Tokenizer", () => {
  testTokenize("attributes-apostrophe.html");
  testTokenize("attributes-bare-wrong-quote.html");
  testTokenize("attributes-bare.html");
  testTokenize("attributes-empty.html");
  testTokenize("attributes-multiline.html");
  testTokenize("attributes-quote.html");
  testTokenize("comments.html");
  testTokenize("custom-elements.html");
  testTokenize("custom-tag-raw-content.html");
  testTokenize("doctypes.html");
  testTokenize("empty.html");
  testTokenize("nested-tags.html");
  testTokenize("opening-closing-text.html");
  testTokenize("script-elements-attributes.html");
  testTokenize("script-elements.html");
  testTokenize("style-elements-attributes.html");
  testTokenize("style-elements.html");
  testTokenize("svg.html");
  testTokenize("tags-register.html");
  testTokenize("templates-attributes-key.html");
  testTokenize("templates-attributes-value-bare.html");
  testTokenize("templates-attributes-value-wrapped-2.html");
  testTokenize("templates-attributes-value-wrapped.html");
  testTokenize("templates-comment.html");
  testTokenize("templates-content-end.html");
  testTokenize("templates-data.html");
  testTokenize("templates-script-content.html");
  testTokenize("templates-style-content.html");
  testTokenize("void-tags.html");

  it("parsing error", () => {
    const html = readFixture("parsing-error-no-open-end.html");
    expect(() =>
      tokenize(html, defaultTokenAdapter)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Unexpected end of tag. Expected '>' to close the opening tag. (2:2)"`
    );
  });
});
