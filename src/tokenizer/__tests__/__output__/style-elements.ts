import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "opening text\n\n",
    range: [0, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [14, 19],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [20, 20],
  },
  {
    type: TokenTypes.Text,
    content: "\n  body {\n    background-color: white;\n  }\n",
    range: [21, 63],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [64, 71],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [72, 73],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [74, 77],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [78, 78],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [79, 81],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [82, 87],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [88, 88],
  },
  {
    type: TokenTypes.Text,
    content: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [89, 137],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [138, 145],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [146, 146],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [147, 152],
  },
  {
    type: TokenTypes.Text,
    content: "\n\nclosing text\n",
    range: [153, 167],
  },
];
