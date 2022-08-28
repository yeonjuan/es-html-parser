import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [1, 7],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "src",
    range: [9, 11],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [12, 12],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [13, 13],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "./some/script.js",
    range: [14, 29],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [30, 30],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [32, 36],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [37, 37],
  },
  {
    type: TokenTypes.Text,
    value: "",
    range: [38, 37],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [38, 46],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [47, 48],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [49, 52],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [53, 53],
  },
  {
    type: TokenTypes.Text,
    value: "\n  test\n  \n  ",
    range: [54, 66],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [67, 73],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [75, 78],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [79, 79],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [80, 80],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [81, 95],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [96, 96],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [97, 97],
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('hello!') \n  ",
    range: [98, 127],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [128, 136],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [137, 137],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [138, 143],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [144, 145],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [146, 152],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [154, 157],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [158, 158],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [159, 159],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [160, 174],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [175, 175],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [176, 176],
  },
  {
    type: TokenTypes.Text,
    value: "\n  console.log('another hello!') \n",
    range: [177, 210],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [211, 219],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [220, 220],
  },
];
