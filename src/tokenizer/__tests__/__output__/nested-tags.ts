import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
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
    value: ">",
    range: [4, 5],
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
    value: "\n  ",
    range: [5, 8],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 2,
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
      },
      end: {
        line: 2,
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
      },
      end: {
        line: 2,
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
      },
      end: {
        line: 5,
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
      },
      end: {
        line: 5,
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
      },
      end: {
        line: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n    ",
    range: [40, 64],
    loc: {
      start: {
        line: 5,
      },
      end: {
        line: 7,
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
      },
      end: {
        line: 7,
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
      },
      end: {
        line: 8,
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
      },
      end: {
        line: 8,
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
      },
      end: {
        line: 9,
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
      },
      end: {
        line: 9,
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
      },
      end: {
        line: 10,
      },
    },
  },
];
