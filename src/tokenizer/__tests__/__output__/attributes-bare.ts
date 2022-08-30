import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "key",
    range: [5, 8],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [10, 11],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [11, 16],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and-another",
    range: [18, 29],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [29, 30],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [32, 37],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [37, 38],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [38, 44],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [44, 46],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [46, 51],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "some",
    range: [52, 56],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [56, 57],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "custom-attribute",
    range: [57, 73],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [73, 74],
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [74, 90],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [90, 105],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and",
    range: [106, 109],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [109, 110],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "here",
    range: [110, 114],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and-even",
    range: [119, 127],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [128, 129],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "here",
    range: [130, 134],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [137, 138],
  },
  {
    type: TokenTypes.Text,
    value: "\n    custom element\n    text\n  ",
    range: [138, 169],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [169, 186],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [186, 187],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [187, 194],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [194, 195],
  },
];
