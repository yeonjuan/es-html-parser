import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [1, 6],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [7, 7],
  },
  {
    type: TokenTypes.Text,
    value: "\n  body {\n    background-color: red;\n  }\n",
    range: [8, 48],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [49, 56],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [57, 58],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [59, 62],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [63, 63],
  },
  {
    type: TokenTypes.Text,
    value: "\n  test\n  \n  ",
    range: [64, 76],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [77, 82],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [84, 87],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [88, 88],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [89, 89],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/css",
    range: [90, 97],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [98, 98],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "rel",
    range: [100, 102],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [103, 103],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [104, 104],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "stylesheet",
    range: [105, 114],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [115, 115],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [116, 116],
  },
  {
    type: TokenTypes.Text,
    value: "\n    body {\n      background-color: white;\n    }\n  ",
    range: [117, 167],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [168, 175],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [176, 176],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [177, 182],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [183, 184],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [185, 190],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [192, 195],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [196, 196],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [197, 197],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/css",
    range: [198, 205],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [206, 206],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "rel",
    range: [208, 210],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [211, 211],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [212, 212],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "stylesheet",
    range: [213, 222],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [223, 223],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [224, 224],
  },
  {
    type: TokenTypes.Text,
    value: "\n  body {\n    background-color: black;\n  }\n",
    range: [225, 267],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [268, 275],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [276, 276],
  },
];
