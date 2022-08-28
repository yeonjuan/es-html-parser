import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [14, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [19, 21],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [22, 28],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [29, 29],
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('')\n  ",
    range: [30, 52],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [53, 61],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [62, 62],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [63, 68],
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [69, 83],
  },
];
