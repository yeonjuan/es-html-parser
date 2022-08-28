import { NodeTypes, TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.DoctypeStart,
    content: "<!DOCTYPE",
    range: [0, 8],
  },
  {
    type: TokenTypes.DoctypeEnd,
    content: ">",
    range: [9, 9],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [10, 11],
  },
  {
    type: TokenTypes.DoctypeStart,
    content: "<!DOCTYPE",
    range: [24, 32],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    content: '"',
    range: [34, 34],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "some attribute",
    range: [35, 48],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    content: '"',
    range: [49, 49],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    content: "'",
    range: [51, 51],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "another-one",
    range: [52, 62],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    content: "'",
    range: [63, 63],
  },
  {
    type: TokenTypes.DoctypeEnd,
    content: ">",
    range: [65, 65],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [66, 67],
  },
  {
    type: TokenTypes.DoctypeStart,
    content: "<!DOCTYPE",
    range: [68, 76],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "html",
    range: [78, 81],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "PUBLIC",
    range: [83, 88],
  },
  {
    type: TokenTypes.DoctypeEnd,
    content: ">",
    range: [89, 89],
  },
  {
    type: TokenTypes.Text,
    content: "\n\n",
    range: [90, 91],
  },
  {
    type: TokenTypes.DoctypeStart,
    content: "<!DOCTYPE",
    range: [92, 100],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "HTML",
    range: [102, 105],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "PUBLIC",
    range: [107, 112],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    content: '"',
    range: [114, 114],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "-//W3C//DTD HTML 4.01 Frameset//EN",
    range: [115, 148],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    content: '"',
    range: [149, 149],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    content: '"',
    range: [151, 151],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    content: "http://www.w3.org/TR/html4/frameset.dtd",
    range: [152, 190],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    content: '"',
    range: [191, 191],
  },
  {
    type: TokenTypes.DoctypeEnd,
    content: ">",
    range: [192, 192],
  },
  {
    type: TokenTypes.Text,
    content: "\n",
    range: [303, 303],
  },
];
