import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 0,
    endPosition: 0,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    startPosition: 1,
    endPosition: 4,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 5,
    endPosition: 5,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 6,
    endPosition: 6,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</DIV>",
    startPosition: 7,
    endPosition: 12,
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    startPosition: 13,
    endPosition: 14,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<DIV",
    startPosition: 15,
    endPosition: 18,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 19,
    endPosition: 19,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    startPosition: 20,
    endPosition: 25,
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    startPosition: 26,
    endPosition: 27,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    startPosition: 28,
    endPosition: 32,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 33,
    endPosition: 33,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 34,
    endPosition: 34,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    startPosition: 35,
    endPosition: 41,
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    startPosition: 42,
    endPosition: 43,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<SPAN",
    startPosition: 44,
    endPosition: 48,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 49,
    endPosition: 49,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</SPAN>",
    startPosition: 50,
    endPosition: 56,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 57,
    endPosition: 57,
  },
];
