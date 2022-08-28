import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [4, 4],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [5, 7],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [8, 11],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [12, 12],
  },
  {
    type: TokenTypes.Text,
    content: "\n    some text\n\n    ",
    range: [14, 33],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [34, 37],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [38, 38],
  },
  {
    type: TokenTypes.Text,
    content: "\n      another text\n    ",
    range: [40, 63],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [64, 68],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [71, 73],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [74, 78],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [81, 81],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [82, 85],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [88, 88],
  },
];
