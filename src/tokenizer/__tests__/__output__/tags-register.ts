import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [5, 6],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</DIV>",
    range: [6, 12],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [12, 14],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<DIV",
    range: [14, 18],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 19],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [19, 25],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [25, 27],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [27, 32],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [32, 33],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [33, 34],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [34, 41],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [41, 43],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SPAN",
    range: [43, 48],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [48, 49],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SPAN>",
    range: [49, 56],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [56, 58],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [58, 65],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [65, 66],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [66, 75],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [75, 76],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SCRIPT",
    range: [76, 83],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [83, 84],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [84, 85],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SCRIPT>",
    range: [85, 94],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [94, 95],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SCRIPT",
    range: [95, 102],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [102, 103],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [103, 112],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [112, 113],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [113, 120],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [120, 121],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [121, 122],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SCRIPT>",
    range: [122, 131],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [131, 133],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [133, 139],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [139, 140],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [140, 148],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [148, 149],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<STYLE",
    range: [149, 155],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [155, 156],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [156, 157],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</STYLE>",
    range: [157, 165],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [165, 166],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<STYLE",
    range: [166, 172],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [172, 173],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [173, 181],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [181, 182],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [182, 188],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [188, 189],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</STYLE>",
    range: [189, 197],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [197, 198],
  },
];
