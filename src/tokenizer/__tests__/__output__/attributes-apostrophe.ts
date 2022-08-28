import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 4],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [5, 7],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [8, 12],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [14, 18],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [19, 19],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: "'",
    range: [20, 20],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "test class",
    range: [21, 30],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: "'",
    range: [31, 31],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "data-test",
    range: [33, 41],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [42, 42],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: "'",
    range: [43, 43],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "data<test>",
    range: [44, 53],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: "'",
    range: [54, 54],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [55, 55],
  },
  {
    type: TokenTypes.Text,
    value: "\n    some text\n\n    ",
    range: [56, 75],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [76, 79],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [80, 80],
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n\n      ",
    range: [81, 107],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [108, 122],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom-attr",
    range: [132, 142],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [143, 143],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: "'",
    range: [144, 144],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "custom >test",
    range: [145, 156],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: "'",
    range: [157, 157],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "with-spaces",
    range: [167, 177],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [181, 181],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: "'",
    range: [184, 184],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "spaces test",
    range: [185, 195],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: "'",
    range: [196, 196],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [204, 204],
  },
  {
    type: TokenTypes.Text,
    value: "\n        custom element\n        text\n      ",
    range: [205, 247],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [248, 264],
  },
  {
    type: TokenTypes.Text,
    value: "\n    ",
    range: [265, 269],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [270, 275],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [276, 278],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [279, 285],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [286, 286],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [287, 292],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [293, 293],
  },
];
