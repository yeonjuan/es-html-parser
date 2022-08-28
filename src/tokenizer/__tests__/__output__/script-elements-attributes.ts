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
    value: "\n  dummy content\n\n  ",
    range: [5, 24],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [25, 31],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [33, 36],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [37, 37],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [38, 38],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [39, 53],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [54, 54],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "some-custom",
    range: [56, 66],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [68, 68],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [71, 71],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "thing",
    range: [72, 76],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [77, 77],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [79, 79],
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('test 1')\n  ",
    range: [80, 108],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [109, 117],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n  ",
    range: [118, 121],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [122, 128],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [134, 137],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [138, 138],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [139, 139],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [140, 154],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [155, 155],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [161, 165],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [169, 169],
  },
  {
    type: TokenTypes.Text,
    value: "\n    let a = '<div></div>'\n    console.log(a)\n  ",
    range: [170, 217],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [218, 226],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [227, 227],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [228, 233],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [234, 235],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [236, 242],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [244, 248],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [250, 253],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [254, 254],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [255, 255],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [256, 270],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [271, 271],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [272, 272],
  },
  {
    type: TokenTypes.Text,
    value: "\n  console.log('test 2')\n",
    range: [273, 297],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [298, 306],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [307, 307],
  },
];
