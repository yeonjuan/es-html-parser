import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [1, 4],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [5, 5],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [6, 6],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</DIV>",
    range: [7, 12],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [13, 14],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<DIV",
    range: [15, 18],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [19, 19],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [20, 25],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [26, 27],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [28, 32],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [33, 33],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [34, 34],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [35, 41],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [42, 43],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SPAN",
    range: [44, 48],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [49, 49],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SPAN>",
    range: [50, 56],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [57, 57],
  },
];
