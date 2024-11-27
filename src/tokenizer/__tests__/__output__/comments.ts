import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
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
    type: TokenTypes.CommentContent,
    value: " some comment ",
    range: [4, 18],
    loc: {
      start: {
        column: 4,
        line: 1,
      },
      end: {
        line: 1,
        column: 18,
      },
    },
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [18, 21],
    loc: {
      start: {
        column: 18,
        line: 1,
      },
      end: {
        line: 1,
        column: 21,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [21, 23],
    loc: {
      start: {
        line: 1,
        column: 21,
      },
      end: {
        line: 3,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [23, 27],
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
    range: [27, 28],
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
    type: TokenTypes.Text,
    value: "\n  ",
    range: [28, 31],
    loc: {
      start: {
        line: 3,
        column: 5,
      },
      end: {
        line: 4,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [31, 36],
    loc: {
      start: {
        line: 4,
        column: 2,
      },
      end: {
        line: 4,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [36, 37],
    loc: {
      start: {
        line: 4,
        column: 7,
      },
      end: {
        line: 4,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    ",
    range: [37, 42],
    loc: {
      start: {
        line: 4,
        column: 8,
      },
      end: {
        line: 5,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
    range: [42, 46],
    loc: {
      start: {
        line: 5,
        column: 4,
      },
      end: {
        line: 5,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.CommentContent,
    value: "another-one",
    range: [46, 57],
    loc: {
      start: {
        line: 5,
        column: 8,
      },
      end: {
        line: 5,
        column: 19,
      },
    },
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [57, 60],
    loc: {
      start: {
        line: 5,
        column: 19,
      },
      end: {
        line: 5,
        column: 22,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [60, 63],
    loc: {
      start: {
        line: 5,
        column: 22,
      },
      end: {
        line: 6,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [63, 70],
    loc: {
      start: {
        line: 6,
        column: 2,
      },
      end: {
        line: 6,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n  ",
    range: [70, 74],
    loc: {
      start: {
        line: 6,
        column: 9,
      },
      end: {
        line: 8,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
    range: [74, 78],
    loc: {
      start: {
        line: 8,
        column: 2,
      },
      end: {
        line: 8,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.CommentContent,
    value: "\n\n  multi\n\n  line\n  ",
    range: [78, 98],
    loc: {
      start: {
        line: 8,
        column: 6,
      },
      end: {
        line: 13,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [98, 101],
    loc: {
      start: {
        line: 13,
        column: 2,
      },
      end: {
        line: 13,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [101, 102],
    loc: {
      start: {
        line: 13,
        column: 5,
      },
      end: {
        line: 14,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [102, 108],
    loc: {
      start: {
        line: 14,
        column: 0,
      },
      end: {
        line: 14,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [108, 110],
    loc: {
      start: {
        line: 14,
        column: 6,
      },
      end: {
        line: 16,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
    range: [110, 114],
    loc: {
      start: {
        line: 16,
        column: 0,
      },
      end: {
        line: 16,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.CommentContent,
    value: " closing\n\ncomment ",
    range: [114, 132],
    loc: {
      start: {
        line: 16,
        column: 4,
      },
      end: {
        line: 18,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [132, 135],
    loc: {
      start: {
        line: 18,
        column: 8,
      },
      end: {
        line: 18,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [135, 137],
    loc: {
      start: {
        line: 18,
        column: 11,
      },
      end: {
        line: 20,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
    range: [137, 141],
    loc: {
      start: {
        line: 20,
        column: 0,
      },
      end: {
        line: 20,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.CommentContent,
    value: "         spaces here          ",
    range: [141, 171],
    loc: {
      start: {
        line: 20,
        column: 4,
      },
      end: {
        line: 20,
        column: 34,
      },
    },
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [171, 174],
    loc: {
      start: {
        line: 20,
        column: 34,
      },
      end: {
        line: 20,
        column: 37,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [174, 175],
    loc: {
      start: {
        line: 20,
        column: 37,
      },
      end: {
        line: 21,
        column: 0,
      },
    },
  },
];
