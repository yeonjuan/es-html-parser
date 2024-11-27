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
    isTemplate: true,
    value: "${key}",
    range: [5, 11],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 1,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [11, 12],
    loc: {
      start: {
        line: 1,
        column: 11,
      },
      end: {
        line: 1,
        column: 12,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    isTemplate: true,
    value: "${value}",
    range: [12, 20],
    loc: {
      start: {
        line: 1,
        column: 12,
      },
      end: {
        line: 1,
        column: 20,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [20, 21],
    loc: {
      start: {
        line: 1,
        column: 20,
      },
      end: {
        line: 1,
        column: 21,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [21, 27],
    loc: {
      start: {
        line: 1,
        column: 21,
      },
      end: {
        line: 1,
        column: 27,
      },
    },
  },
];
