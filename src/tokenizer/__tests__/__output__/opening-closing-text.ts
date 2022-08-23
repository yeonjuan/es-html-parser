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
    type: TokenTypes.CloseTag,
    content: "</div>",
    startPosition: 19,
    endPosition: 24,
  },
  {
    type: TokenTypes.Text,
    content: "\n\nclosing text\n",
    startPosition: 25,
    endPosition: 39,
  },
];
