import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [0, 5],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [6, 7],
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [7, 23],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [23, 38],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [42, 43],
  },
  {
    type: TokenTypes.Text,
    value: "\n    custom element\n    text\n  ",
    range: [43, 74],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [74, 91],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [91, 92],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [92, 99],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [99, 100],
  },
];
