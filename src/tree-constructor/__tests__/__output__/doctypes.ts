import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  content: {
    children: [
      {
        type: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            range: [0, 8],
          },
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            range: [9, 9],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [10, 11],
          },
        },
      },
      {
        type: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            range: [24, 32],
          },
          attributes: [
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: '"',
                range: [34, 34],
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "some attribute",
                range: [35, 48],
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: '"',
                range: [49, 49],
              },
            },
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: "'",
                range: [51, 51],
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "another-one",
                range: [52, 62],
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: "'",
                range: [63, 63],
              },
            },
          ],
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            range: [65, 65],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [66, 67],
          },
        },
      },
      {
        type: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            range: [68, 76],
          },
          attributes: [
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "html",
                range: [78, 81],
              },
            },
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "PUBLIC",
                range: [83, 88],
              },
            },
          ],
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            range: [89, 89],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [90, 91],
          },
        },
      },
      {
        type: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            range: [92, 100],
          },
          attributes: [
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "HTML",
                range: [102, 105],
              },
            },
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "PUBLIC",
                range: [107, 112],
              },
            },
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: '"',
                range: [114, 114],
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "-//W3C//DTD HTML 4.01 Frameset//EN",
                range: [115, 148],
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: '"',
                range: [149, 149],
              },
            },
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: '"',
                range: [151, 151],
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "http://www.w3.org/TR/html4/frameset.dtd",
                range: [152, 190],
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: '"',
                range: [191, 191],
              },
            },
          ],
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            range: [192, 192],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [303, 303],
          },
        },
      },
    ],
  },
};
