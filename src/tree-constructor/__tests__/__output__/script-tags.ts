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
            range: [0, 0],
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<script",
            range: [1, 7],
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "src",
                range: [9, 11],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                range: [13, 13],
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "./some/script.js",
                range: [14, 29],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                range: [30, 30],
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "async",
                range: [32, 36],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [37, 37],
          },
          value: {
            type: NodeTypes.Text,
            content: "",
            range: [38, 37],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</script>",
            range: [38, 46],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [47, 48],
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
            range: [49, 52],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [53, 53],
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  test\n  \n  ",
                  range: [54, 66],
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<script",
                  range: [67, 73],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "type",
                      range: [75, 78],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [80, 80],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "text/javascript",
                      range: [81, 95],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [96, 96],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [97, 97],
                },
                value: {
                  type: TokenTypes.Text,
                  content: "\n    console.log('hello!') \n  ",
                  range: [98, 127],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</script>",
                  range: [128, 136],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [137, 137],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            range: [138, 143],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [144, 145],
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<script",
            range: [146, 152],
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "type",
                range: [154, 157],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                range: [159, 159],
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "text/javascript",
                range: [160, 174],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                range: [175, 175],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [176, 176],
          },
          value: {
            type: TokenTypes.Text,
            content: "\n  console.log('another hello!') \n",
            range: [177, 210],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</script>",
            range: [211, 219],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [220, 220],
          },
        },
      },
    ],
  },
};
