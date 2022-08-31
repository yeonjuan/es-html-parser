import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [0, 5],
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
    range: [6, 7],
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
    range: [7, 23],
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
    value: "<custom-element",
    range: [23, 38],
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
    range: [42, 43],
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
    value: "\n    custom element\n    text\n  ",
    range: [43, 74],
    loc: {
      start: {
        line: 6,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [74, 91],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [91, 92],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [92, 99],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [99, 100],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 11,
      },
    },
  },
];
