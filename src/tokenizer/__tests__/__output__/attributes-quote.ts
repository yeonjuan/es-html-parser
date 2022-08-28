import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [0, 3],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [4, 4],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [5, 7],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [8, 12],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "class",
    range: [14, 18],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [19, 19],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [20, 20],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "test class",
    range: [21, 30],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [31, 31],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "data-test",
    range: [33, 41],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [42, 42],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [43, 43],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "data<test>",
    range: [44, 53],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [54, 54],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [55, 55],
  },
  {
    type: TokenTypes.Text,
    content: "\n    some text\n\n    ",
    range: [56, 75],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [76, 79],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [80, 80],
  },
  {
    type: TokenTypes.Text,
    content: "\n      another text\n\n      ",
    range: [81, 107],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-element",
    range: [108, 122],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "custom-attr",
    range: [132, 142],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [143, 143],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [144, 144],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "custom >test",
    range: [145, 156],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [157, 157],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "with-spaces",
    range: [167, 177],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [181, 181],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [184, 184],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "spaces test",
    range: [185, 195],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [196, 196],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [204, 204],
  },
  {
    type: TokenTypes.Text,
    content: "\n        custom element\n        text\n      ",
    range: [205, 247],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-element>",
    range: [248, 264],
  },
  {
    type: TokenTypes.Text,
    content: "\n    ",
    range: [265, 269],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [270, 275],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [276, 278],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [279, 285],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [286, 286],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [287, 292],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [293, 293],
  },
];
