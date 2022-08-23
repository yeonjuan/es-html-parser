import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-one",
    startPosition: 0,
    endPosition: 10,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 11,
    endPosition: 11,
  },
  {
    type: TokenTypes.Text,
    content: "\n  some text\n\n  ",
    startPosition: 12,
    endPosition: 27,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-two",
    startPosition: 28,
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
    content: "\n    another text\n  ",
    startPosition: 40,
    endPosition: 59,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-two>",
    startPosition: 60,
    endPosition: 72,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 73,
    endPosition: 73,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-one>",
    startPosition: 74,
    endPosition: 86,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 87,
    endPosition: 87,
  },
];
