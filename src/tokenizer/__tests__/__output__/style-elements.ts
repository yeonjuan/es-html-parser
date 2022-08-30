import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 14],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [14, 20],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [20, 21],
  },
  {
    type: TokenTypes.Text,
    value: "\n  body {\n    background-color: white;\n  }\n",
    range: [21, 64],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [64, 72],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [72, 74],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [74, 78],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [78, 79],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [79, 82],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [82, 88],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [88, 89],
  },
  {
    type: TokenTypes.Text,
    value: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [89, 138],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [138, 146],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [146, 147],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [147, 153],
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [153, 168],
  },
];
