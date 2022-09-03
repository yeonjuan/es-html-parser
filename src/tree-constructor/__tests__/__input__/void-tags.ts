import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<img",
    range: [0, 4],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: "/>",
    range: [5, 7],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [7, 9],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 3,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<img",
    range: [9, 13],
    loc: {
      start: {
        line: 3,
      },
      end: {
        line: 3,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: "/>",
    range: [14, 16],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
];
