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
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
    loc: {
      start: {
        line: 1,
        column: 4,
      },
      end: {
        line: 1,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [5, 8],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 2,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [8, 13],
    loc: {
      start: {
        line: 2,
        column: 2,
      },
      end: {
        line: 2,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [13, 14],
    loc: {
      start: {
        line: 2,
        column: 7,
      },
      end: {
        line: 2,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    some text\n\n    ",
    range: [14, 34],
    loc: {
      start: {
        line: 2,
        column: 8,
      },
      end: {
        line: 5,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [34, 39],
    loc: {
      start: {
        line: 5,
        column: 4,
      },
      end: {
        line: 5,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 40],
    loc: {
      start: {
        line: 5,
        column: 9,
      },
      end: {
        line: 5,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n    ",
    range: [40, 64],
    loc: {
      start: {
        column: 10,
        line: 5,
      },
      end: {
        line: 7,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [64, 71],
    loc: {
      start: {
        line: 7,
        column: 4,
      },
      end: {
        line: 7,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [71, 74],
    loc: {
      start: {
        line: 7,
        column: 11,
      },
      end: {
        line: 8,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [74, 81],
    loc: {
      start: {
        line: 8,
        column: 2,
      },
      end: {
        line: 8,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [81, 82],
    loc: {
      start: {
        line: 8,
        column: 9,
      },
      end: {
        line: 9,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [82, 88],
    loc: {
      start: {
        line: 9,
        column: 0,
      },
      end: {
        line: 9,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [88, 89],
    loc: {
      start: {
        line: 9,
        column: 6,
      },
      end: {
        line: 10,
        column: 0,
      },
    },
  },
];
