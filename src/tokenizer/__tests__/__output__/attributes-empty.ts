import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    startPosition: 0,
    endPosition: 4,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 6,
    endPosition: 6,
  },
  {
    type: TokenTypes.Text,
    content: "\n  some text\n\n  ",
    startPosition: 7,
    endPosition: 22,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-element",
    startPosition: 23,
    endPosition: 37,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 42,
    endPosition: 42,
  },
  {
    type: TokenTypes.Text,
    content: "\n    custom element\n    text\n  ",
    startPosition: 43,
    endPosition: 73,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-element>",
    startPosition: 74,
    endPosition: 90,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 91,
    endPosition: 91,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    startPosition: 92,
    endPosition: 98,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 99,
    endPosition: 99,
  },
];
