import { isWhitespace } from "../is-whitespace";

describe("isWhitespace", () => {
  it("Should return true", () => {
    expect(isWhitespace(" ")).toBe(true);
    expect(isWhitespace("\n")).toBe(true);
    expect(isWhitespace("\t")).toBe(true);
  });
});
