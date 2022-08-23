import { TokenTypes } from "../../../constants";
import { Token } from "../../../types";

export default [
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 0,
    endPosition: 0,
  },
  {
    type: TokenTypes.CommentStart,
    content: "<!--",
    startPosition: 1,
    endPosition: 4,
  },
  {
    type: TokenTypes.CommentContent,
    content: " start comment ",
    startPosition: 5,
    endPosition: 19,
  },
  {
    type: TokenTypes.CommentEnd,
    content: "-->",
    startPosition: 20,
    endPosition: 22,
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    startPosition: 23,
    endPosition: 24,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    startPosition: 25,
    endPosition: 28,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 29,
    endPosition: 29,
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    startPosition: 30,
    endPosition: 32,
  },
  {
    type: TokenTypes.CommentStart,
    content: "<!--",
    startPosition: 33,
    endPosition: 36,
  },
  {
    type: TokenTypes.CommentContent,
    content: " \n    nested \n    comment \n   ",
    startPosition: 37,
    endPosition: 66,
  },
  {
    type: TokenTypes.CommentEnd,
    content: "-->",
    startPosition: 67,
    endPosition: 69,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 70,
    endPosition: 70,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    startPosition: 71,
    endPosition: 76,
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    startPosition: 77,
    endPosition: 78,
  },
  {
    type: TokenTypes.CommentStart,
    content: "<!--",
    startPosition: 79,
    endPosition: 82,
  },
  {
    type: TokenTypes.CommentContent,
    content: " end comment ",
    startPosition: 83,
    endPosition: 95,
  },
  {
    type: TokenTypes.CommentEnd,
    content: "-->",
    startPosition: 96,
    endPosition: 98,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 99,
    endPosition: 99,
  },
];
