import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 304],
  children: [
    {
      type: NodeTypes.Doctype,
      range: [0, 10],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [0, 9],
      },
      end: { type: TokenTypes.DoctypeEnd, value: ">", range: [9, 10] },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [10, 12] },
    {
      type: NodeTypes.Doctype,
      range: [24, 66],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [34, 50],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [34, 35],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "some attribute",
            range: [35, 49],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [49, 50],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [51, 64],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: "'",
            range: [51, 52],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "another-one",
            range: [52, 63],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: "'",
            range: [63, 64],
          },
        },
      ],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [24, 33],
      },
      end: { type: TokenTypes.DoctypeEnd, value: ">", range: [65, 66] },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [66, 68] },
    {
      type: NodeTypes.Doctype,
      range: [68, 90],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [78, 82],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "html",
            range: [78, 82],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [83, 89],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [83, 89],
          },
        },
      ],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [68, 77],
      },
      end: { type: TokenTypes.DoctypeEnd, value: ">", range: [89, 90] },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [90, 92] },
    {
      type: NodeTypes.Doctype,
      range: [92, 193],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [102, 106],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "HTML",
            range: [102, 106],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [107, 113],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [107, 113],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [114, 150],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [114, 115],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "-//W3C//DTD HTML 4.01 Frameset//EN",
            range: [115, 149],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [149, 150],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [151, 192],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [151, 152],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "http://www.w3.org/TR/html4/frameset.dtd",
            range: [152, 191],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [191, 192],
          },
        },
      ],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [92, 101],
      },
      end: { type: TokenTypes.DoctypeEnd, value: ">", range: [192, 193] },
    },
    { type: NodeTypes.Text, value: "\n", range: [303, 304] },
  ],
};
