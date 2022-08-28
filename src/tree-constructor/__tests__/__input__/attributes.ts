import { TokenTypes } from "../../../constants";
import { Token } from "../../../types";

export default [
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [1, 4],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "class",
    range: [6, 10],
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
    content: "test",
    range: [13, 16],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [17, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [19, 21],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<custom-elem",
    range: [22, 33],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "required",
    range: [35, 42],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [43, 43],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [44, 44],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "requered",
    range: [45, 52],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [53, 53],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "data-some",
    range: [55, 63],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [64, 64],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [65, 65],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "thing",
    range: [66, 70],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [71, 71],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [72, 72],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</custom-elem>",
    range: [73, 86],
  },
  {
    type: TokenTypes.Text,
    content: "\n  \n  ",
    range: [87, 92],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<button",
    range: [93, 99],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "disabled",
    range: [101, 108],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "class",
    range: [110, 114],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [115, 115],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [116, 116],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "button",
    range: [117, 122],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [123, 123],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "required",
    range: [125, 132],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [133, 133],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</button>",
    range: [134, 142],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [143, 145],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<button",
    range: [146, 152],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "disabled",
    range: [154, 161],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "required",
    range: [163, 170],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [171, 171],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</button>",
    range: [172, 180],
  },
  {
    type: TokenTypes.Text,
    content: "\n  ",
    range: [181, 183],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<button",
    range: [184, 190],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "disabled",
    range: [197, 204],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "class",
    range: [211, 215],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [216, 216],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [217, 217],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "button disabled",
    range: [218, 232],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [233, 233],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "test",
    range: [240, 243],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [244, 244],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [245, 245],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "attribute",
    range: [246, 254],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [255, 255],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "another",
    range: [261, 267],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [268, 268],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [269, 269],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "attribute",
    range: [270, 278],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [279, 279],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "custom-one",
    range: [285, 294],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [298, 298],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</button>",
    range: [299, 307],
  },
  {
    type: TokenTypes.Text,
    content: "\n  \n  ",
    range: [308, 313],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [314, 317],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [319, 319],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: "'",
    range: [320, 320],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "only value",
    range: [321, 330],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: "'",
    range: [331, 331],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "'only-key'",
    range: [333, 342],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "another",
    range: [344, 350],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [351, 351],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [352, 352],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "attr",
    range: [353, 356],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [357, 357],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [359, 359],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [360, 360],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "only-value-2",
    range: [361, 372],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [373, 373],
  },
  {
    type: TokenTypes.AttributeKey,
    content: '"only-key-2"',
    range: [375, 386],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [387, 387],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [388, 393],
  },
  {
    type: TokenTypes.Text,
    content: "\n  \n  ",
    range: [394, 399],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [400, 403],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [409, 409],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: "'",
    range: [410, 410],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "more spaces",
    range: [411, 421],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: "'",
    range: [422, 422],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "'key'",
    range: [428, 432],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "spaced",
    range: [434, 439],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [442, 442],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [448, 448],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "value",
    range: [449, 453],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [454, 454],
  },
  {
    type: TokenTypes.AttributeKey,
    content: '"key-2"',
    range: [461, 467],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [471, 471],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [472, 477],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [478, 478],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [479, 484],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [485, 486],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<span",
    range: [487, 491],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "class",
    range: [493, 497],
  },
  {
    type: TokenTypes.AttributeAssignment,
    content: "=",
    range: [498, 498],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    content: '"',
    range: [499, 499],
  },
  {
    type: TokenTypes.AttributeValue,
    content: "another class",
    range: [500, 512],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    content: '"',
    range: [513, 513],
  },
  {
    type: TokenTypes.AttributeKey,
    content: "custom-attr",
    range: [515, 525],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [526, 526],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</span>",
    range: [527, 533],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [534, 534],
  },
];
