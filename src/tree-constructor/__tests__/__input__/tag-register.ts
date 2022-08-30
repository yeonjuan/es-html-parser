import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  { type: TokenTypes.Text, value: "\n", range: [0, 1] },
  { type: TokenTypes.OpenTagStart, value: "<div", range: [1, 5] },
  { type: TokenTypes.OpenTagEnd, value: ">", range: [5, 6] },
  { type: TokenTypes.Text, value: "\n", range: [6, 7] },
  { type: TokenTypes.CloseTag, value: "</DIV>", range: [7, 13] },
  { type: TokenTypes.Text, value: "\n\n", range: [13, 15] },
  { type: TokenTypes.OpenTagStart, value: "<DIV", range: [15, 19] },
  { type: TokenTypes.OpenTagEnd, value: ">", range: [19, 20] },
  { type: TokenTypes.CloseTag, value: "</div>", range: [20, 26] },
  { type: TokenTypes.Text, value: "\n\n", range: [26, 28] },
  { type: TokenTypes.OpenTagStart, value: "<span", range: [28, 33] },
  { type: TokenTypes.OpenTagEnd, value: ">", range: [33, 34] },
  { type: TokenTypes.Text, value: "\n", range: [34, 35] },
  { type: TokenTypes.CloseTag, value: "</span>", range: [35, 42] },
  { type: TokenTypes.Text, value: "\n\n", range: [42, 44] },
  { type: TokenTypes.OpenTagStart, value: "<SPAN", range: [44, 49] },
  { type: TokenTypes.OpenTagEnd, value: ">", range: [49, 50] },
  { type: TokenTypes.CloseTag, value: "</SPAN>", range: [50, 57] },
  { type: TokenTypes.Text, value: "\n", range: [57, 58] },
];
