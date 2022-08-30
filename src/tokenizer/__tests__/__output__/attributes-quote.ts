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
    value: "\n  ",
    range: [5, 8],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [8, 13],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [14, 19],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [19, 20],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [20, 21],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "test class",
    range: [21, 31],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [31, 32],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "data-test",
    range: [33, 42],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [42, 43],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [43, 44],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "data<test>",
    range: [44, 54],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [54, 55],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [55, 56],
  },
  {
    type: TokenTypes.Text,
    value: "\n    some text\n\n    ",
    range: [56, 76],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [76, 80],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [80, 81],
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n\n      ",
    range: [81, 108],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [108, 123],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom-attr",
    range: [132, 143],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [143, 144],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [144, 145],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "custom >test",
    range: [145, 157],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [157, 158],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "with-spaces",
    range: [167, 178],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [181, 182],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [184, 185],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "spaces test",
    range: [185, 196],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [196, 197],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [204, 205],
  },
  {
    type: TokenTypes.Text,
    value: "\n        custom element\n        text\n      ",
    range: [205, 248],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [248, 265],
  },
  {
    type: TokenTypes.Text,
    value: "\n    ",
    range: [265, 270],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [270, 276],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [276, 279],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [279, 286],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [286, 287],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [287, 293],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [293, 294],
  },
];
