import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [0, 4],
  },
  {
    type: TokenTypes.CommentContent,
    value: " some comment ",
    range: [4, 18],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [18, 21],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [21, 23],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [23, 27],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [27, 28],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [28, 31],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [31, 36],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [36, 37],
  },
  {
    type: TokenTypes.Text,
    value: "\n    ",
    range: [37, 42],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [42, 46],
  },
  {
    type: TokenTypes.CommentContent,
    value: "another-one",
    range: [46, 57],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [57, 60],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [60, 63],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [63, 70],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n  ",
    range: [70, 74],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [74, 78],
  },
  {
    type: TokenTypes.CommentContent,
    value: "\n\n  multi\n\n  line\n  ",
    range: [78, 98],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [98, 101],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [101, 102],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [102, 108],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [108, 110],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [110, 114],
  },
  {
    type: TokenTypes.CommentContent,
    value: " closing\n\ncomment ",
    range: [114, 132],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [132, 135],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [135, 137],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [137, 141],
  },
  {
    type: TokenTypes.CommentContent,
    value: "         spaces here          ",
    range: [141, 171],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [171, 174],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [174, 175],
  },
];
