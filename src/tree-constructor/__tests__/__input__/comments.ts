import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.CommentStart,
    content: "<!--",
    range: [1, 4],
  },
  {
    type: TokenTypes.CommentContent,
    content: " start comment ",
    range: [5, 19],
  },
  {
    type: TokenTypes.CommentEnd,
    content: "-->",
    range: [20, 22],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [23, 24],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [25, 28],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [29, 29],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [30, 32],
  },
  {
    type: TokenTypes.CommentStart,
    content: "<!--",
    range: [33, 36],
  },
  {
    type: TokenTypes.CommentContent,
    content: " \n    nested \n    comment \n   ",
    range: [37, 66],
  },
  {
    type: TokenTypes.CommentEnd,
    content: "-->",
    range: [67, 69],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [70, 70],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [71, 76],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [77, 78],
  },
  {
    type: TokenTypes.CommentStart,
    content: "<!--",
    range: [79, 82],
  },
  {
    type: TokenTypes.CommentContent,
    content: " end comment ",
    range: [83, 95],
  },
  {
    type: TokenTypes.CommentEnd,
    content: "-->",
    range: [96, 98],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [99, 99],
  },
];
