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
            content: "<script",
            startPosition: 1,
            endPosition: 7,
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "src",
                startPosition: 9,
                endPosition: 11,
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                startPosition: 13,
                endPosition: 13,
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "./some/script.js",
                startPosition: 14,
                endPosition: 29,
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                startPosition: 30,
                endPosition: 30,
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "async",
                startPosition: 32,
                endPosition: 36,
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 37,
            endPosition: 37,
          },
          value: {
            type: NodeTypes.Text,
            content: "",
            startPosition: 38,
            endPosition: 37,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</script>",
            startPosition: 38,
            endPosition: 46,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 47,
            endPosition: 48,
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
            startPosition: 49,
            endPosition: 52,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 53,
            endPosition: 53,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  test\n  \n  ",
                  startPosition: 54,
                  endPosition: 66,
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<script",
                  startPosition: 67,
                  endPosition: 73,
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "type",
                      startPosition: 75,
                      endPosition: 78,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 80,
                      endPosition: 80,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "text/javascript",
                      startPosition: 81,
                      endPosition: 95,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 96,
                      endPosition: 96,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 97,
                  endPosition: 97,
                },
                value: {
                  type: TokenTypes.Text,
                  content: "\n    console.log('hello!') \n  ",
                  startPosition: 98,
                  endPosition: 127,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</script>",
                  startPosition: 128,
                  endPosition: 136,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 137,
                  endPosition: 137,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            startPosition: 138,
            endPosition: 143,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 144,
            endPosition: 145,
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<script",
            startPosition: 146,
            endPosition: 152,
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "type",
                startPosition: 154,
                endPosition: 157,
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                startPosition: 159,
                endPosition: 159,
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "text/javascript",
                startPosition: 160,
                endPosition: 174,
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                startPosition: 175,
                endPosition: 175,
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 176,
            endPosition: 176,
          },
          value: {
            type: TokenTypes.Text,
            content: "\n  console.log('another hello!') \n",
            startPosition: 177,
            endPosition: 210,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</script>",
            startPosition: 211,
            endPosition: 219,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 220,
            endPosition: 220,
          },
        },
      },
    ],
  },
};
