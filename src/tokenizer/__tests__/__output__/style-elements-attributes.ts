import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [0, 5],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [7, 10],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [11, 11],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [12, 12],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/css",
    range: [13, 20],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [21, 21],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "custom",
    range: [23, 28],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [29, 29],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [30, 30],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "attribute",
    range: [31, 39],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [40, 40],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [41, 41],
  },
  {
    type: TokenTypes.Text,
    content: "\n  body {\n    background-color: white;\n  }\n",
    range: [42, 84],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [85, 92],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [93, 94],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [95, 98],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [99, 99],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [100, 102],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<style",
    range: [103, 108],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "custom",
    range: [114, 119],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [125, 128],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [129, 129],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [130, 130],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/css",
    range: [131, 138],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [139, 139],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "another-custom",
    range: [146, 159],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [163, 163],
  },
  {
    type: TokenTypes.Text,
    content: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [164, 212],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</style>",
    range: [213, 220],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [221, 221],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [222, 227],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [228, 228],
  },
];
