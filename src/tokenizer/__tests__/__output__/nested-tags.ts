import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 4],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [5, 7],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [8, 12],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [13, 13],
  },
  {
    type: TokenTypes.Text,
    value: "\n    some text\n\n    ",
    range: [14, 33],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [34, 38],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 39],
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n    ",
    range: [40, 63],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [64, 70],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [71, 73],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [74, 80],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [81, 81],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [82, 87],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [88, 88],
  },
];
