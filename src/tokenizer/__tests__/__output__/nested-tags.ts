import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    startPosition: 0,
    endPosition: 3,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 4,
    endPosition: 4,
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    startPosition: 5,
    endPosition: 7,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    startPosition: 8,
    endPosition: 12,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 13,
    endPosition: 13,
  },
  {
    type: TokenTypes.Text,
    content: "\n    some text\n\n    ",
    startPosition: 14,
    endPosition: 33,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    startPosition: 34,
    endPosition: 38,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 39,
    endPosition: 39,
  },
  {
    type: TokenTypes.Text,
    content: "\n      another text\n    ",
    startPosition: 40,
    endPosition: 63,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    startPosition: 64,
    endPosition: 70,
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    startPosition: 71,
    endPosition: 73,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    startPosition: 74,
    endPosition: 80,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 81,
    endPosition: 81,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    startPosition: 82,
    endPosition: 87,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 88,
    endPosition: 88,
  },
];
