import { TokenTypes } from "../../../constants";

export default [
  { type: TokenTypes.Text, value: "\n", range: [0, 1] },
  { type: TokenTypes.CommentStart, value: "<!--", range: [1, 5] },
  { type: TokenTypes.CommentContent, value: " start comment ", range: [5, 20] },
  { type: TokenTypes.CommentEnd, value: "-->", range: [20, 23] },
  { type: TokenTypes.Text, value: "\n\n", range: [23, 25] },
  { type: TokenTypes.OpenTagStart, value: "<div", range: [25, 29] },
  { type: TokenTypes.OpenTagEnd, value: ">", range: [29, 30] },
  { type: TokenTypes.Text, value: "\n  ", range: [30, 33] },
  { type: TokenTypes.CommentStart, value: "<!--", range: [33, 37] },
  {
    type: TokenTypes.CommentContent,
    value: " \n    nested \n    comment \n   ",
    range: [37, 67],
  },
  { type: TokenTypes.CommentEnd, value: "-->", range: [67, 70] },
  { type: TokenTypes.Text, value: "\n", range: [70, 71] },
  { type: TokenTypes.CloseTag, value: "</div>", range: [71, 77] },
  { type: TokenTypes.Text, value: "\n\n", range: [77, 79] },
  { type: TokenTypes.CommentStart, value: "<!--", range: [79, 83] },
  { type: TokenTypes.CommentContent, value: " end comment ", range: [83, 96] },
  { type: TokenTypes.CommentEnd, value: "-->", range: [96, 99] },
  { type: TokenTypes.Text, value: "\n", range: [99, 100] },
];
