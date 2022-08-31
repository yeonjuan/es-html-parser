import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-one",
    range: [0, 11],
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
    value: ">",
    range: [11, 12],
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
    value: "\n  some text\n\n  ",
    range: [12, 28],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-two",
    range: [28, 39],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
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
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    another text\n  ",
    range: [40, 60],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 6,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-two>",
    range: [60, 73],
    loc: {
      start: {
        line: 6,
      },
      end: {
        line: 6,
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
      },
      end: {
        line: 7,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-one>",
    range: [74, 87],
    loc: {
      start: {
        line: 7,
      },
      end: {
        line: 7,
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
      },
      end: {
        line: 8,
      },
    },
  },
];
