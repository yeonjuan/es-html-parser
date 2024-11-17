import { parse } from "../parse";

describe("parse", () => {
  it("basic", () => {
    expect(parse("<div>content</div>")).toMatchSnapshot();
  });

  it("token adapter", () => {
    expect(
      parse("<div>content</div>", {
        tokenAdapter: {
          finalizeRange(token) {
            return [token.range[0] + 1, token.range[1] + 1];
          },
          finalizeLocation(token) {
            return {
              start: {
                line: token.loc.start.line + 1,
                column: token.loc.start.column,
              },
              end: {
                line: token.loc.end.line + 1,
                column: token.loc.end.column,
              },
            };
          },
        },
      })
    ).toMatchSnapshot();
  });
});
