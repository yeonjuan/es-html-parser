import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  content: {
    children: [
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n",
            range: [0, 0],
          },
        },
      },
      {
        type: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<script",
            range: [1, 7],
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                value: "src",
                range: [9, 11],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [13, 13],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "./some/script.js",
                range: [14, 29],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [30, 30],
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                value: "async",
                range: [32, 36],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [37, 37],
          },
          value: {
            type: NodeTypes.Text,
            value: "",
            range: [38, 37],
          },
          close: {
            type: TokenTypes.CloseTag,
            value: "</script>",
            range: [38, 46],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
            range: [47, 48],
          },
        },
      },
      {
        type: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<div",
            range: [49, 52],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [53, 53],
          },
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  value: "\n  test\n  \n  ",
                  range: [54, 66],
                },
              },
            },
            {
              type: NodeTypes.Tag,
              content: {
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  value: "<script",
                  range: [67, 73],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      value: "type",
                      range: [75, 78],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      value: '"',
                      range: [80, 80],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      value: "text/javascript",
                      range: [81, 95],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      value: '"',
                      range: [96, 96],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  value: ">",
                  range: [97, 97],
                },
                value: {
                  type: TokenTypes.Text,
                  value: "\n    console.log('hello!') \n  ",
                  range: [98, 127],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  value: "</script>",
                  range: [128, 136],
                },
              },
            },
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  value: "\n",
                  range: [137, 137],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [138, 143],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
            range: [144, 145],
          },
        },
      },
      {
        type: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<script",
            range: [146, 152],
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                value: "type",
                range: [154, 157],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [159, 159],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "text/javascript",
                range: [160, 174],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [175, 175],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [176, 176],
          },
          value: {
            type: TokenTypes.Text,
            value: "\n  console.log('another hello!') \n",
            range: [177, 210],
          },
          close: {
            type: TokenTypes.CloseTag,
            value: "</script>",
            range: [211, 219],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n",
            range: [220, 220],
          },
        },
      },
    ],
  },
};
