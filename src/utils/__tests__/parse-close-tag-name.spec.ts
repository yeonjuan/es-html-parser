import { parseCloseTagName } from "../parse-close-tag-name";

describe("parseCloseTagName", () => {
  it("Should return close tag name", () => {
    expect(parseCloseTagName("</div>")).toBe("div");
  });

  it("Should throw error", () => {
    expect(() => parseCloseTagName("<div>")).toThrowError();
  });
});
