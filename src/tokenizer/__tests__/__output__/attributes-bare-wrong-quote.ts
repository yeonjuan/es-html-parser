import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<a",
    range: [0, 2],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 1,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "target",
    range: [3, 9],
    loc: {
      start: {
        line: 1,
        column: 3,
      },
      end: {
        line: 1,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [9, 10],
    loc: {
      start: {
        line: 1,
        column: 9,
      },
      end: {
        line: 1,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "”_blank”",
    range: [10, 18],
    loc: {
      start: {
        line: 1,
        column: 10,
      },
      end: {
        line: 1,
        column: 18,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 19],
    loc: {
      start: {
        line: 1,
        column: 18,
      },
      end: {
        line: 1,
        column: 19,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</a>",
    range: [19, 23],
    loc: {
      start: {
        line: 1,
        column: 19,
      },
      end: {
        line: 1,
        column: 23,
      },
    },
  },
];
