import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 14],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [14, 18],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 19],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [19, 22],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [22, 29],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [29, 30],
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('')\n  ",
    range: [30, 53],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [53, 62],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [62, 63],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [63, 69],
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [69, 84],
  },
];
