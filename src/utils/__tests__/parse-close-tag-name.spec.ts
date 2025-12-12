import { parseCloseTagName } from "../parse-close-tag-name";

describe("parseCloseTagName", () => {
  it("Should return close tag name", () => {
    expect(parseCloseTagName("</div>")).toBe("div");
  });

  it("Should return close tag name when close tag has LF newline before closing caret", () => {
    const closeTag = `</div\n>`;
    expect(parseCloseTagName(closeTag)).toBe("div");
  });

  it("Should return close tag name when close tag has CRLF newline before closing caret", () => {
    const closeTag = `</div\r\n>`;
    expect(parseCloseTagName(closeTag)).toBe("div");
  });

  it("Should throw error", () => {
    expect(() => parseCloseTagName("<div>")).toThrow();
  });
});
