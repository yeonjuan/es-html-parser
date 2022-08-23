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
    content: "<style",
    startPosition: 14,
    endPosition: 19,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 20,
    endPosition: 20,
  },
  {
    type: TokenTypes.Text,
    content: "\n  body {\n    background-color: white;\n  }\n",
    startPosition: 21,
    endPosition: 63,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    startPosition: 64,
    endPosition: 71,
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    startPosition: 72,
    endPosition: 73,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    startPosition: 74,
    endPosition: 77,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 78,
    endPosition: 78,
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    startPosition: 79,
    endPosition: 81,
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    startPosition: 82,
    endPosition: 87,
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    startPosition: 88,
    endPosition: 88,
  },
  {
    type: TokenTypes.Text,
    content: "\n    body {\n      background-color: red;\n    }\n  ",
    startPosition: 89,
    endPosition: 137,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    startPosition: 138,
    endPosition: 145,
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    startPosition: 146,
    endPosition: 146,
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    startPosition: 147,
    endPosition: 152,
  },
  {
    type: TokenTypes.Text,
    content: "\n\nclosing text\n",
    startPosition: 153,
    endPosition: 167,
  },
];
