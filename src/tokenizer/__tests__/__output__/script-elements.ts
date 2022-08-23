import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "opening text\n\n",
    startPosition: 0,
    endPosition: 13,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    startPosition: 14,
    endPosition: 17,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 18,
    endPosition: 18,
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    startPosition: 19,
    endPosition: 21,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    startPosition: 22,
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
    content: "\n    console.log('')\n  ",
    startPosition: 30,
    endPosition: 52,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    startPosition: 53,
    endPosition: 61,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 62,
    endPosition: 62,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    startPosition: 63,
    endPosition: 68,
  },
  {
    type: TokenTypes.Text,
    content: "\n\nclosing text\n",
    startPosition: 69,
    endPosition: 83,
  },
];
