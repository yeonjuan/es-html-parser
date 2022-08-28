import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [0, 8],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [9, 9],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [10, 11],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [24, 32],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [34, 34],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "some attribute",
    range: [35, 48],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [49, 49],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: "'",
    range: [51, 51],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "another-one",
    range: [52, 62],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: "'",
    range: [63, 63],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [65, 65],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [66, 67],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [68, 76],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "html",
    range: [78, 81],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "PUBLIC",
    range: [83, 88],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [89, 89],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [90, 91],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [92, 100],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "HTML",
    range: [102, 105],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "PUBLIC",
    range: [107, 112],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [114, 114],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "-//W3C//DTD HTML 4.01 Frameset//EN",
    range: [115, 148],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [149, 149],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [151, 151],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "http://www.w3.org/TR/html4/frameset.dtd",
    range: [152, 190],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [191, 191],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [192, 192],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [303, 303],
  },
];
