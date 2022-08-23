import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  nodeType: NodeTypes.Document,
  content: {
    children: [
      {
        nodeType: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            startPosition: 0,
            endPosition: 8,
          },
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            startPosition: 9,
            endPosition: 9,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 10,
            endPosition: 11,
          },
        },
      },
      {
        nodeType: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            startPosition: 24,
            endPosition: 32,
          },
          attributes: [
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: '"',
                startPosition: 34,
                endPosition: 34,
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "some attribute",
                startPosition: 35,
                endPosition: 48,
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: '"',
                startPosition: 49,
                endPosition: 49,
              },
            },
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: "'",
                startPosition: 51,
                endPosition: 51,
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "another-one",
                startPosition: 52,
                endPosition: 62,
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: "'",
                startPosition: 63,
                endPosition: 63,
              },
            },
          ],
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            startPosition: 65,
            endPosition: 65,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 66,
            endPosition: 67,
          },
        },
      },
      {
        nodeType: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            startPosition: 68,
            endPosition: 76,
          },
          attributes: [
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "html",
                startPosition: 78,
                endPosition: 81,
              },
            },
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "PUBLIC",
                startPosition: 83,
                endPosition: 88,
              },
            },
          ],
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            startPosition: 89,
            endPosition: 89,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 90,
            endPosition: 91,
          },
        },
      },
      {
        nodeType: NodeTypes.Doctype,
        content: {
          start: {
            type: TokenTypes.DoctypeStart,
            content: "<!DOCTYPE",
            startPosition: 92,
            endPosition: 100,
          },
          attributes: [
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "HTML",
                startPosition: 102,
                endPosition: 105,
              },
            },
            {
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "PUBLIC",
                startPosition: 107,
                endPosition: 112,
              },
            },
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: '"',
                startPosition: 114,
                endPosition: 114,
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "-//W3C//DTD HTML 4.01 Frameset//EN",
                startPosition: 115,
                endPosition: 148,
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: '"',
                startPosition: 149,
                endPosition: 149,
              },
            },
            {
              startWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperStart,
                content: '"',
                startPosition: 151,
                endPosition: 151,
              },
              value: {
                type: TokenTypes.DoctypeAttribute,
                content: "http://www.w3.org/TR/html4/frameset.dtd",
                startPosition: 152,
                endPosition: 190,
              },
              endWrapper: {
                type: TokenTypes.DoctypeAttributeWrapperEnd,
                content: '"',
                startPosition: 191,
                endPosition: 191,
              },
            },
          ],
          end: {
            type: TokenTypes.DoctypeEnd,
            content: ">",
            startPosition: 192,
            endPosition: 192,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 303,
            endPosition: 303,
          },
        },
      },
    ],
  },
};
