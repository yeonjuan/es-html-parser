import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [0, 6],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [7, 11],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [11, 12],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [12, 13],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/css",
    range: [13, 21],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [21, 22],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom",
    range: [23, 29],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [29, 30],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [30, 31],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "attribute",
    range: [31, 40],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [40, 41],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [41, 42],
  },
  {
    type: TokenTypes.Text,
    value: "\n  body {\n    background-color: white;\n  }\n",
    range: [42, 85],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [85, 93],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [93, 95],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [95, 99],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [99, 100],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [100, 103],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [103, 109],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom",
    range: [114, 120],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [125, 129],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [129, 130],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [130, 131],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/css",
    range: [131, 139],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [139, 140],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "another-custom",
    range: [146, 160],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [163, 164],
  },
  {
    type: TokenTypes.Text,
    value: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [164, 213],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [213, 221],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [221, 222],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [222, 228],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [228, 229],
  },
];
