import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "key",
    range: [5, 7],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [10, 10],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [11, 15],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and-another",
    range: [18, 28],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [29, 29],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [32, 36],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [37, 37],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [38, 43],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [44, 45],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [46, 50],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "some",
    range: [52, 55],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [56, 56],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "custom-attribute",
    range: [57, 72],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [73, 73],
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [74, 89],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [90, 104],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and",
    range: [106, 108],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [109, 109],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "here",
    range: [110, 113],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and-even",
    range: [119, 126],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [128, 128],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "here",
    range: [130, 133],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [137, 137],
  },
  {
    type: TokenTypes.Text,
    value: "\n    custom element\n    text\n  ",
    range: [138, 168],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [169, 185],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [186, 186],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [187, 193],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [194, 194],
  },
];
