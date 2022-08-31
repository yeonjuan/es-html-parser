import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
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
    type: TokenTypes.CommentContent,
    value: " some comment ",
    range: [4, 18],
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
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [18, 21],
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
    range: [21, 23],
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
    value: "<div",
    range: [23, 27],
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
    value: ">",
    range: [27, 28],
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
    type: TokenTypes.Text,
    value: "\n  ",
    range: [28, 31],
    loc: {
      start: {
        line: 3,
      },
      end: {
        line: 4,
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
      },
      end: {
        line: 4,
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
      },
      end: {
        line: 4,
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
      },
      end: {
        line: 5,
      },
    },
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [42, 46],
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
    type: TokenTypes.CommentContent,
    value: "another-one",
    range: [46, 57],
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
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [57, 60],
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
    value: "\n  ",
    range: [60, 63],
    loc: {
      start: {
        line: 5,
      },
      end: {
        line: 6,
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
      },
      end: {
        line: 6,
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
      },
      end: {
        line: 8,
      },
    },
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [74, 78],
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
    type: TokenTypes.CommentContent,
    value: "\n\n  multi\n\n  line\n  ",
    range: [78, 98],
    loc: {
      start: {
        line: 8,
      },
      end: {
        line: 13,
      },
    },
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [98, 101],
    loc: {
      start: {
        line: 13,
      },
      end: {
        line: 13,
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
      },
      end: {
        line: 14,
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
      },
      end: {
        line: 14,
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
      },
      end: {
        line: 16,
      },
    },
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [110, 114],
    loc: {
      start: {
        line: 16,
      },
      end: {
        line: 16,
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
      },
      end: {
        line: 18,
      },
    },
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [132, 135],
    loc: {
      start: {
        line: 18,
      },
      end: {
        line: 18,
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
      },
      end: {
        line: 20,
      },
    },
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [137, 141],
    loc: {
      start: {
        line: 20,
      },
      end: {
        line: 20,
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
      },
      end: {
        line: 20,
      },
    },
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [171, 174],
    loc: {
      start: {
        line: 20,
      },
      end: {
        line: 20,
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
      },
      end: {
        line: 21,
      },
    },
  },
];
