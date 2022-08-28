import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [0, 4],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [6, 6],
  },
  {
    type: TokenTypes.Text,
    content: "\n  some text\n\n  ",
    range: [7, 22],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-element",
    range: [23, 37],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [42, 42],
  },
  {
    type: TokenTypes.Text,
    content: "\n    custom element\n    text\n  ",
    range: [43, 73],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-element>",
    range: [74, 90],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [91, 91],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [92, 98],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [99, 99],
  },
];
