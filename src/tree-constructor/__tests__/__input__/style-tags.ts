import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [1, 6],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [7, 7],
  },
  {
    type: TokenTypes.Text,
    content: "\n  body {\n    background-color: red;\n  }\n",
    range: [8, 48],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [49, 56],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [57, 58],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [59, 62],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [63, 63],
  },
  {
    type: TokenTypes.Text,
    content: "\n  test\n  \n  ",
    range: [64, 76],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [77, 82],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [84, 87],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [88, 88],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [89, 89],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/css",
    range: [90, 97],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [98, 98],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "rel",
    range: [100, 102],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [103, 103],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [104, 104],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "stylesheet",
    range: [105, 114],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [115, 115],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [116, 116],
  },
  {
    type: TokenTypes.Text,
    content: "\n    body {\n      background-color: white;\n    }\n  ",
    range: [117, 167],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [168, 175],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [176, 176],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [177, 182],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [183, 184],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [185, 190],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [192, 195],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [196, 196],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [197, 197],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/css",
    range: [198, 205],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [206, 206],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "rel",
    range: [208, 210],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [211, 211],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [212, 212],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "stylesheet",
    range: [213, 222],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [223, 223],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [224, 224],
  },
  {
    type: TokenTypes.Text,
    content: "\n  body {\n    background-color: black;\n  }\n",
    range: [225, 267],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [268, 275],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [276, 276],
  },
];
