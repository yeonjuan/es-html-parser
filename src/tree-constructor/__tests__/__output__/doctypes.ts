import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 303],
  children: [
    {
      type: NodeTypes.Doctype,
      range: [0, 9],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [0, 8],
      },
      end: {
        type: TokenTypes.DoctypeEnd,
        value: ">",
        range: [9, 9],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [10, 11],
    },
    {
      type: NodeTypes.Doctype,
      range: [24, 65],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [34, 49],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [34, 34],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "some attribute",
            range: [35, 48],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [49, 49],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [51, 63],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: "'",
            range: [51, 51],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "another-one",
            range: [52, 62],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: "'",
            range: [63, 63],
          },
        },
      ],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [24, 32],
      },
      end: {
        type: TokenTypes.DoctypeEnd,
        value: ">",
        range: [65, 65],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [66, 67],
    },
    {
      type: NodeTypes.Doctype,
      range: [68, 89],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [78, 81],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "html",
            range: [78, 81],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [83, 88],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [83, 88],
          },
        },
      ],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [68, 76],
      },
      end: {
        type: TokenTypes.DoctypeEnd,
        value: ">",
        range: [89, 89],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [90, 91],
    },
    {
      type: NodeTypes.Doctype,
      range: [92, 192],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [102, 105],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "HTML",
            range: [102, 105],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [107, 112],
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [107, 112],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [114, 149],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [114, 114],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "-//W3C//DTD HTML 4.01 Frameset//EN",
            range: [115, 148],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [149, 149],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [151, 191],
          startWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [151, 151],
          },
          value: {
            type: TokenTypes.DoctypeAttribute,
            value: "http://www.w3.org/TR/html4/frameset.dtd",
            range: [152, 190],
          },
          endWrapper: {
            type: TokenTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [191, 191],
          },
        },
      ],
      start: {
        type: TokenTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [92, 100],
      },
      end: {
        type: TokenTypes.DoctypeEnd,
        value: ">",
        range: [192, 192],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [303, 303],
    },
  ],
};
