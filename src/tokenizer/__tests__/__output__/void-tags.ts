import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<img",
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
    value: "/>",
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
    value: "\n\n",
    range: [7, 9],
    loc: {
      start: {
        line: 1,
        column: 7,
      },
      end: {
        line: 3,
        column: 0,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<img",
    range: [9, 13],
    loc: {
      start: {
        line: 3,
        column: 0,
      },
      end: {
        line: 3,
        column: 4,
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
        column: 0,
      },
      end: {
        line: 4,
        column: 2,
      },
    },
  },
];

export default OUTPUT;
