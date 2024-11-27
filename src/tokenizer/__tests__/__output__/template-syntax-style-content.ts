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
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [6, 7],
    loc: {
      start: {
        line: 1,
        column: 6,
      },
      end: {
        line: 1,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    value: " ",
    isTemplate: false,
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
    type: TokenTypes.StyleTagContent,
    value: "${content}",
    isTemplate: true,
    range: [8, 18],
    loc: {
      start: {
        line: 1,
        column: 8,
      },
      end: {
        line: 1,
        column: 18,
      },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    value: " ",
    isTemplate: false,
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
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [19, 27],
    loc: {
      start: {
        line: 1,
        column: 19,
      },
      end: {
        line: 1,
        column: 27,
      },
    },
  },
];
