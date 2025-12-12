import { parseOpenTagName } from "../parse-open-tag-name";

describe("parseOpenTagName", () => {
  it("Should return close tag name", () => {
    expect(parseOpenTagName("<div >")).toBe("div");
  });

  it("Should throw error", () => {
    expect(() => parseOpenTagName("> div>")).toThrow();
  });
});
