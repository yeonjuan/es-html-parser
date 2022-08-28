import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "key",
    range: [5, 7],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [10, 10],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "value",
    range: [11, 15],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "and-another",
    range: [18, 28],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [29, 29],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "value",
    range: [32, 36],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [37, 37],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [38, 43],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [44, 45],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [46, 50],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "some",
    range: [52, 55],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [56, 56],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "custom-attribute",
    range: [57, 72],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [73, 73],
  },
  {
    type: TokenTypes.Text,
    content: "\n  some text\n\n  ",
    range: [74, 89],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-element",
    range: [90, 104],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "and",
    range: [106, 108],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [109, 109],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "here",
    range: [110, 113],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "and-even",
    range: [119, 126],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [128, 128],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "here",
    range: [130, 133],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [137, 137],
  },
  {
    type: TokenTypes.Text,
    content: "\n    custom element\n    text\n  ",
    range: [138, 168],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-element>",
    range: [169, 185],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [186, 186],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [187, 193],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [194, 194],
  },
];
