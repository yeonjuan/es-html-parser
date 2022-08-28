import { TokenTypes } from "../../../constants";
import { Token } from "../../../types";

export default [
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [0, 0],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [1, 4],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [6, 10],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [11, 11],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [12, 12],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "test",
    range: [13, 16],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [17, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [19, 21],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-elem",
    range: [22, 33],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "required",
    range: [35, 42],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [43, 43],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [44, 44],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "requered",
    range: [45, 52],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [53, 53],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "data-some",
    range: [55, 63],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [64, 64],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [65, 65],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "thing",
    range: [66, 70],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [71, 71],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [72, 72],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-elem>",
    range: [73, 86],
  },
  {
    type: TokenTypes.Text,
    value: "\n  \n  ",
    range: [87, 92],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<button",
    range: [93, 99],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "disabled",
    range: [101, 108],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [110, 114],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [115, 115],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [116, 116],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "button",
    range: [117, 122],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [123, 123],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "required",
    range: [125, 132],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [133, 133],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</button>",
    range: [134, 142],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [143, 145],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<button",
    range: [146, 152],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "disabled",
    range: [154, 161],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "required",
    range: [163, 170],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [171, 171],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</button>",
    range: [172, 180],
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [181, 183],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<button",
    range: [184, 190],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "disabled",
    range: [197, 204],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [211, 215],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [216, 216],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [217, 217],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "button disabled",
    range: [218, 232],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [233, 233],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "test",
    range: [240, 243],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [244, 244],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [245, 245],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "attribute",
    range: [246, 254],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [255, 255],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "another",
    range: [261, 267],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [268, 268],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [269, 269],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "attribute",
    range: [270, 278],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [279, 279],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom-one",
    range: [285, 294],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [298, 298],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</button>",
    range: [299, 307],
  },
  {
    type: TokenTypes.Text,
    value: "\n  \n  ",
    range: [308, 313],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [314, 317],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [319, 319],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: "'",
    range: [320, 320],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "only value",
    range: [321, 330],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: "'",
    range: [331, 331],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "'only-key'",
    range: [333, 342],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "another",
    range: [344, 350],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [351, 351],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [352, 352],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "attr",
    range: [353, 356],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [357, 357],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [359, 359],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [360, 360],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "only-value-2",
    range: [361, 372],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [373, 373],
  },
  {
    type: TokenTypes.AttributeKey,
    value: '"only-key-2"',
    range: [375, 386],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [387, 387],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [388, 393],
  },
  {
    type: TokenTypes.Text,
    value: "\n  \n  ",
    range: [394, 399],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [400, 403],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [409, 409],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: "'",
    range: [410, 410],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "more spaces",
    range: [411, 421],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: "'",
    range: [422, 422],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "'key'",
    range: [428, 432],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "spaced",
    range: [434, 439],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [442, 442],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [448, 448],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [449, 453],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [454, 454],
  },
  {
    type: TokenTypes.AttributeKey,
    value: '"key-2"',
    range: [461, 467],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [471, 471],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [472, 477],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [478, 478],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [479, 484],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [485, 486],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [487, 491],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [493, 497],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [498, 498],
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [499, 499],
  },
  {
    type: TokenTypes.AttributeValue,
    value: "another class",
    range: [500, 512],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [513, 513],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom-attr",
    range: [515, 525],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [526, 526],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [527, 533],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [534, 534],
  },
];
