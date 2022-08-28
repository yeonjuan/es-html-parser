import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [1, 4],
  },
  {
    type: TokenTypes.CommentContent,
    value: " start comment ",
    range: [5, 19],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [20, 22],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [23, 24],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [25, 28],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [29, 29],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [30, 32],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [33, 36],
  },
  {
    type: TokenTypes.CommentContent,
    value: " \n    nested \n    comment \n   ",
    range: [37, 66],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [67, 69],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [70, 70],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [71, 76],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [77, 78],
  },
  {
    type: TokenTypes.CommentStart,
    value: "<!--",
    range: [79, 82],
  },
  {
    type: TokenTypes.CommentContent,
    value: " end comment ",
    range: [83, 95],
  },
  {
    type: TokenTypes.CommentEnd,
    value: "-->",
    range: [96, 98],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [99, 99],
  },
];
