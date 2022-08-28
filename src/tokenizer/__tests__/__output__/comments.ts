import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [0, 3],
  },
  {
    type: TokenTypes.CommentContent,
    value: " some comment ",
    range: [4, 17],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [18, 20],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [21, 22],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [23, 26],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [27, 27],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [28, 30],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [31, 35],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [36, 36],
  },
  {
    type: TokenTypes.Text,
    value: "\n    ",
    range: [37, 41],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [42, 45],
  },
  {
    type: TokenTypes.CommentContent,
    value: "another-one",
    range: [46, 56],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [57, 59],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [60, 62],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [63, 69],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n  ",
    range: [70, 73],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [74, 77],
  },
  {
    type: TokenTypes.CommentContent,
    value: "\n\n  multi\n\n  line\n  ",
    range: [78, 97],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [98, 100],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [101, 101],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [102, 107],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [108, 109],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [110, 113],
  },
  {
    type: TokenTypes.CommentContent,
    value: " closing\n\ncomment ",
    range: [114, 131],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [132, 134],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [135, 136],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [137, 140],
  },
  {
    type: TokenTypes.CommentContent,
    value: "         spaces here          ",
    range: [141, 170],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [171, 173],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [174, 174],
  },
];
