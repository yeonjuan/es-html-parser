import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [0, 5],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 1,
        column: 5,
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
        column: 6,
      },
      end: {
        line: 1,
        column: 7,
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
        column: 7,
      },
      end: {
        line: 4,
        column: 2,
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
        column: 2,
      },
      end: {
        line: 4,
        column: 17,
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
        column: 2,
      },
      end: {
        line: 6,
        column: 3,
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
        column: 3,
      },
      end: {
        line: 9,
        column: 2,
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
        column: 2,
      },
      end: {
        line: 9,
        column: 19,
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
        column: 19,
      },
      end: {
        line: 10,
        column: 0,
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
        column: 0,
      },
      end: {
        line: 10,
        column: 7,
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
        column: 7,
      },
      end: {
        line: 11,
        column: 0,
      },
    },
  },
];
