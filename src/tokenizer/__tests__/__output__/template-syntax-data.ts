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
    isTemplate: false,
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
    type: TokenTypes.Text,
    isTemplate: true,
    range: [7, 17],
    value: "${ data  }",
    loc: {
      start: {
        line: 1,
        column: 7,
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
    isTemplate: false,
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
