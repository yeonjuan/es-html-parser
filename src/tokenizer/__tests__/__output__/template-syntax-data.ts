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
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
    loc: {
      start: {
        line: 1,
        column: 4,
      },
      end: {
        line: 1,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "  ",
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
    type: TokenTypes.TemplateSyntaxStart,
    value: "${",
    range: [7, 9],
    loc: {
      start: {
        line: 1,
        column: 7,
      },
      end: {
        line: 1,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxContent,
    value: " data  ",
    range: [9, 16],
    loc: {
      start: {
        line: 1,
        column: 9,
      },
      end: {
        line: 1,
        column: 16,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxEnd,
    value: "}",
    range: [16, 17],
    loc: {
      start: {
        line: 1,
        column: 16,
      },
      end: {
        line: 1,
        column: 17,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: " text ",
    range: [17, 23],
    loc: {
      start: {
        line: 1,
        column: 17,
      },
      end: {
        line: 1,
        column: 23,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [23, 29],
    loc: {
      start: {
        line: 1,
        column: 23,
      },
      end: {
        line: 1,
        column: 29,
      },
    },
  },
];
