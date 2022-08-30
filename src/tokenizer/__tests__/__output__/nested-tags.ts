import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [5, 8],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [8, 13],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [13, 14],
  },
  {
    type: TokenTypes.Text,
    value: "\n    some text\n\n    ",
    range: [14, 34],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [34, 39],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 40],
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n    ",
    range: [40, 64],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [64, 71],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [71, 74],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [74, 81],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [81, 82],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [82, 88],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [88, 89],
  },
];
