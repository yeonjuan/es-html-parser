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
    value: "\n  dummy content\n\n  ",
    range: [5, 25],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [25, 32],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [33, 37],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [37, 38],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [38, 39],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [39, 54],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [54, 55],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "some-custom",
    range: [56, 67],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [68, 69],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [71, 72],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "thing",
    range: [72, 77],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [77, 78],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [79, 80],
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('test 1')\n  ",
    range: [80, 109],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [109, 118],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n  ",
    range: [118, 122],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [122, 129],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [134, 138],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [138, 139],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [139, 140],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [140, 155],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [155, 156],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [161, 166],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [169, 170],
  },
  {
    type: TokenTypes.Text,
    value: "\n    let a = '<div></div>'\n    console.log(a)\n  ",
    range: [170, 218],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [218, 227],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [227, 228],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [228, 234],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [234, 236],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [236, 243],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [244, 249],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [250, 254],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [254, 255],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [255, 256],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [256, 271],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [271, 272],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [272, 273],
  },
  {
    type: TokenTypes.Text,
    value: "\n  console.log('test 2')\n",
    range: [273, 298],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [298, 307],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [307, 308],
  },
];
