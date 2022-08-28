import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [0, 4],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [6, 6],
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [7, 22],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [23, 37],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [42, 42],
  },
  {
    type: TokenTypes.Text,
    value: "\n    custom element\n    text\n  ",
    range: [43, 73],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [74, 90],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [91, 91],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [92, 98],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [99, 99],
  },
];
