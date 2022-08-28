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
    content: "\n  dummy content\n\n  ",
    range: [5, 24],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    range: [25, 31],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [33, 36],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [37, 37],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [38, 38],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/javascript",
    range: [39, 53],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [54, 54],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "some-custom",
    range: [56, 66],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [68, 68],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [71, 71],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "thing",
    range: [72, 76],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [77, 77],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [79, 79],
  },
  {
    type: TokenTypes.Text,
    content: "\n    console.log('test 1')\n  ",
    range: [80, 108],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    range: [109, 117],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n  ",
    range: [118, 121],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    range: [122, 128],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [134, 137],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [138, 138],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [139, 139],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/javascript",
    range: [140, 154],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [155, 155],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "async",
    range: [161, 165],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [169, 169],
  },
  {
    type: TokenTypes.Text,
    content: "\n    let a = '<div></div>'\n    console.log(a)\n  ",
    range: [170, 217],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    range: [218, 226],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [227, 227],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [228, 233],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [234, 235],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<script",
    range: [236, 242],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "async",
    range: [244, 248],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "type",
    range: [250, 253],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [254, 254],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [255, 255],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "text/javascript",
    range: [256, 270],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [271, 271],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [272, 272],
  },
  {
    type: TokenTypes.Text,
    content: "\n  console.log('test 2')\n",
    range: [273, 297],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</script>",
    range: [298, 306],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [307, 307],
  },
];
