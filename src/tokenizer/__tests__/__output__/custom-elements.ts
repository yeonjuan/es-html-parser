import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-one",
    range: [0, 11],
    loc: {
      start: {
        column: 0,
        line: 1,
      },
      end: {
        line: 1,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
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
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [12, 28],
    loc: {
      start: {
        column: 12,
        line: 1,
      },
      end: {
        line: 4,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-two",
    range: [28, 39],
    loc: {
      start: {
        column: 2,
        line: 4,
      },
      end: {
        line: 4,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 40],
    loc: {
      start: {
        line: 4,
        column: 13,
      },
      end: {
        line: 4,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    another text\n  ",
    range: [40, 60],
    loc: {
      start: {
        column: 14,
        line: 4,
      },
      end: {
        line: 6,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-two>",
    range: [60, 73],
    loc: {
      start: {
        line: 6,
        column: 2,
      },
      end: {
        line: 6,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [73, 74],
    loc: {
      start: {
        line: 6,
        column: 15,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-one>",
    range: [74, 87],
    loc: {
      start: {
        column: 0,
        line: 7,
      },
      end: {
        line: 7,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [87, 88],
    loc: {
      start: {
        line: 7,
        column: 13,
      },
      end: {
        line: 8,
        column: 0,
      },
    },
    parts: [],
  },
];

export default OUTPUT;
