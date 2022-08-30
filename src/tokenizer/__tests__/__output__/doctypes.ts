import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [0, 9],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [9, 10],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [10, 12],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!doctype",
    range: [12, 21],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [21, 22],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [22, 24],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [24, 33],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [34, 35],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "some attribute",
    range: [35, 49],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [49, 50],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: "'",
    range: [51, 52],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "another-one",
    range: [52, 63],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: "'",
    range: [63, 64],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [65, 66],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [66, 68],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [68, 77],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "html",
    range: [78, 82],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "PUBLIC",
    range: [83, 89],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [89, 90],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [90, 92],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [92, 101],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "HTML",
    range: [102, 106],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "PUBLIC",
    range: [107, 113],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [114, 115],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "-//W3C//DTD HTML 4.01 Frameset//EN",
    range: [115, 149],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [149, 150],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [151, 152],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "http://www.w3.org/TR/html4/frameset.dtd",
    range: [152, 191],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [191, 192],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [192, 193],
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [193, 195],
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [195, 204],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "HTML",
    range: [207, 211],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "PUBLIC",
    range: [212, 218],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: "'",
    range: [221, 222],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "-//W3C//DTD HTML 4.01 Frameset//EN",
    range: [222, 256],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: "'",
    range: [256, 257],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [260, 261],
  },
  {
    type: TokenTypes.DoctypeAttribute,
    value: "http://www.w3.org/TR/html4/frameset.dtd",
    range: [261, 300],
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [300, 301],
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [302, 303],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [303, 304],
  },
];
