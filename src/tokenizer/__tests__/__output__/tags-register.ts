import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 4],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [5, 5],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</DIV>",
    range: [6, 11],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [12, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<DIV",
    range: [14, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [19, 24],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [25, 26],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [27, 31],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [32, 32],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [33, 33],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [34, 40],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [41, 42],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SPAN",
    range: [43, 47],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [48, 48],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SPAN>",
    range: [49, 55],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [56, 57],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [58, 64],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [65, 65],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [66, 74],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [75, 75],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SCRIPT",
    range: [76, 82],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [83, 83],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [84, 84],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SCRIPT>",
    range: [85, 93],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [94, 94],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SCRIPT",
    range: [95, 101],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [102, 102],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [103, 111],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [112, 112],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [113, 119],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [120, 120],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [121, 121],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SCRIPT>",
    range: [122, 130],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [131, 132],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [133, 138],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [139, 139],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [140, 147],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [148, 148],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<STYLE",
    range: [149, 154],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [155, 155],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [156, 156],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</STYLE>",
    range: [157, 164],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [165, 165],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<STYLE",
    range: [166, 171],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [172, 172],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [173, 180],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [181, 181],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [182, 187],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [188, 188],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</STYLE>",
    range: [189, 196],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [197, 197],
  },
];
