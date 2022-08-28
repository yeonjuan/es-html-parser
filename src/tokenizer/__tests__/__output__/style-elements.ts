import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [14, 19],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [20, 20],
  },
  {
    type: TokenTypes.Text,
    value: "\n  body {\n    background-color: white;\n  }\n",
    range: [21, 63],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [64, 71],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [72, 73],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [74, 77],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [78, 78],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [79, 81],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [82, 87],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [88, 88],
  },
  {
    type: TokenTypes.Text,
    value: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [89, 137],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [138, 145],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [146, 146],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [147, 152],
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [153, 167],
  },
];
