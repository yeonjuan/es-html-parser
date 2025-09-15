import { toMatchFile } from "jest-file-snapshot";
import fs from "fs";
import path from "path";
import { tokenize } from "../../tokenizer";
import { defaultTokenAdapter } from "../../token-adapter";
import { TokenizeOptions } from "../../tokenizer/tokenize";
import { Range, TemplateInfo } from "../../types";
expect.extend({ toMatchFile });

const readFixture = (name: string) =>
  fs.readFileSync(path.join(__dirname, "../__fixtures__", name), "utf-8");

const expectMatchSnapshot = (tokens: any[]) => {
  expect(JSON.stringify(tokens, null, 2)).toMatchFile(undefined, {
    fileExtension: ".json",
  });
};

const testTokenize = (name: string, options?: TokenizeOptions) => {
  test(name, () => {
    const input = readFixture(name);
    const { tokens } = tokenize(input, defaultTokenAdapter, options);
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
  testTokenize("void-tags.html");

  testTokenize("templates-attributes-key.html", {
    templateInfos: [
      {
        open: [5, 7],
        close: [10, 11],
      },
    ] as TemplateInfo[],
  });
  testTokenize("templates-attributes-value-bare.html", {
    templateInfos: [[8, 13]] as Range[],
  });
  testTokenize("templates-attributes-value-wrapped-2.html", {
    templateInfos: [
      [16, 22],
      [23, 31],
    ] as Range[],
  });
  testTokenize("templates-attributes-value-wrapped.html", {
    templateInfos: [[9, 14]] as Range[],
  });
  testTokenize("templates-comment.html", {
    templateInfos: [[4, 14]] as Range[],
  });
  testTokenize("templates-content-end.html", {
    templateInfos: [[0, 10]] as Range[],
  });
  testTokenize("templates-data.html", {
    templateInfos: [[5, 16]] as Range[],
  });
  testTokenize("templates-script-content.html", {
    templateInfos: [[8, 18]] as Range[],
  });
  testTokenize("templates-style-content.html", {
    templateInfos: [[7, 17]] as Range[],
  });

  it("parsing error", () => {
    const html = readFixture("parsing-error-no-open-end.html");
    expect(() =>
      tokenize(html, defaultTokenAdapter)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Unexpected end of tag. Expected '>' to close the opening tag. (2:2)"`
    );
  });
});
