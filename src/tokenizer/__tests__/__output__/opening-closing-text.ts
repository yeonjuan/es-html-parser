import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 14],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 3,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [14, 18],
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
    value: ">",
    range: [18, 19],
    loc: {
      start: {
        line: 3,
        column: 4,
      },
      end: {
        line: 3,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [19, 25],
    loc: {
      start: {
        line: 3,
        column: 5,
      },
      end: {
        line: 3,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [25, 40],
    loc: {
      start: {
        line: 3,
        column: 11,
      },
      end: {
        line: 6,
        column: 0,
      },
    },
    parts: [],
  },
];

export default OUTPUT;
