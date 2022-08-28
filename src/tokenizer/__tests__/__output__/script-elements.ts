import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "opening text\n\n",
    range: [0, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [14, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [19, 21],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    range: [22, 28],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [29, 29],
  },
  {
    type: TokenTypes.Text,
    content: "\n    console.log('')\n  ",
    range: [30, 52],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    range: [53, 61],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [62, 62],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [63, 68],
  },
  {
    type: TokenTypes.Text,
    content: "\n\nclosing text\n",
    range: [69, 83],
  },
];
