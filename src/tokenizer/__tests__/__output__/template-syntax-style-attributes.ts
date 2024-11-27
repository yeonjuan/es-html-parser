import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<style",
    range: [0, 6],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 1,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    isTemplate: false,
    range: [7, 11],
    loc: {
      start: {
        line: 1,
        column: 7,
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
    value: "${type}",
    isTemplate: true,
    range: [12, 19],
    loc: {
      start: {
        line: 1,
        column: 12,
      },
      end: {
        line: 1,
        column: 19,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
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
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [21, 29],
    loc: {
      start: {
        line: 1,
        column: 21,
      },
      end: {
        line: 1,
        column: 29,
      },
    },
  },
];
