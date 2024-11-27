import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 1,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "id",
    range: [5, 7],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 1,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [7, 8],
    loc: {
      start: {
        line: 1,
        column: 7,
      },
      end: {
        line: 1,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxStart,
    value: "${",
    range: [8, 10],
    loc: {
      start: {
        line: 1,
        column: 8,
      },
      end: {
        line: 1,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxContent,
    value: "id",
    range: [10, 12],
    loc: {
      start: {
        line: 1,
        column: 10,
      },
      end: {
        line: 1,
        column: 12,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxEnd,
    value: "}",
    range: [12, 13],
    loc: {
      start: {
        line: 1,
        column: 12,
      },
      end: {
        line: 1,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [13, 14],
    loc: {
      start: {
        line: 1,
        column: 13,
      },
      end: {
        line: 1,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [14, 20],
    loc: {
      start: {
        line: 1,
        column: 14,
      },
      end: {
        line: 1,
        column: 20,
      },
    },
  },
];
