import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  nodeType: NodeTypes.Document,
  content: {
    children: [
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 0,
            endPosition: 0,
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<style",
            startPosition: 1,
            endPosition: 6,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 7,
            endPosition: 7,
          },
          value: {
            type: NodeTypes.Text,
            content: "\n  body {\n    background-color: red;\n  }\n",
            startPosition: 8,
            endPosition: 48,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</style>",
            startPosition: 49,
            endPosition: 56,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 57,
            endPosition: 58,
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            startPosition: 59,
            endPosition: 62,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 63,
            endPosition: 63,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  test\n  \n  ",
                  startPosition: 64,
                  endPosition: 76,
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<style",
                  startPosition: 77,
                  endPosition: 82,
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "type",
                      startPosition: 84,
                      endPosition: 87,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 89,
                      endPosition: 89,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "text/css",
                      startPosition: 90,
                      endPosition: 97,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 98,
                      endPosition: 98,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "rel",
                      startPosition: 100,
                      endPosition: 102,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 104,
                      endPosition: 104,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "stylesheet",
                      startPosition: 105,
                      endPosition: 114,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 115,
                      endPosition: 115,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 116,
                  endPosition: 116,
                },
                value: {
                  type: NodeTypes.Text,
                  content:
                    "\n    body {\n      background-color: white;\n    }\n  ",
                  startPosition: 117,
                  endPosition: 167,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</style>",
                  startPosition: 168,
                  endPosition: 175,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 176,
                  endPosition: 176,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            startPosition: 177,
            endPosition: 182,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 183,
            endPosition: 184,
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<style",
            startPosition: 185,
            endPosition: 190,
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "type",
                startPosition: 192,
                endPosition: 195,
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                startPosition: 197,
                endPosition: 197,
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "text/css",
                startPosition: 198,
                endPosition: 205,
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                startPosition: 206,
                endPosition: 206,
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "rel",
                startPosition: 208,
                endPosition: 210,
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                startPosition: 212,
                endPosition: 212,
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "stylesheet",
                startPosition: 213,
                endPosition: 222,
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                startPosition: 223,
                endPosition: 223,
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 224,
            endPosition: 224,
          },
          value: {
            type: TokenTypes.Text,
            content: "\n  body {\n    background-color: black;\n  }\n",
            startPosition: 225,
            endPosition: 267,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</style>",
            startPosition: 268,
            endPosition: 275,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 276,
            endPosition: 276,
          },
        },
      },
    ],
  },
};
