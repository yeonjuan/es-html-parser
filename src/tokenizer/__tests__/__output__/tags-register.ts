import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [4, 4],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [5, 5],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</DIV>",
    range: [6, 11],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [12, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<DIV",
    range: [14, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [19, 24],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [25, 26],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [27, 31],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [32, 32],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [33, 33],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [34, 40],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [41, 42],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<SPAN",
    range: [43, 47],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [48, 48],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</SPAN>",
    range: [49, 55],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [56, 57],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    range: [58, 64],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [65, 65],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    range: [66, 74],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [75, 75],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<SCRIPT",
    range: [76, 82],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [83, 83],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [84, 84],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</SCRIPT>",
    range: [85, 93],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [94, 94],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<SCRIPT",
    range: [95, 101],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [102, 102],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    range: [103, 111],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [112, 112],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    range: [113, 119],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [120, 120],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [121, 121],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</SCRIPT>",
    range: [122, 130],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [131, 132],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [133, 138],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [139, 139],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [140, 147],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [148, 148],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<STYLE",
    range: [149, 154],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [155, 155],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [156, 156],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</STYLE>",
    range: [157, 164],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [165, 165],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<STYLE",
    range: [166, 171],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [172, 172],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [173, 180],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [181, 181],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [182, 187],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [188, 188],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</STYLE>",
    range: [189, 196],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [197, 197],
  },
];
