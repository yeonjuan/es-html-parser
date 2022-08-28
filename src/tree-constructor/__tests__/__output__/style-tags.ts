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
            content: "\n",
            range: [0, 0],
          },
        },
      },
      {
        type: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<style",
            range: [1, 6],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [7, 7],
          },
          value: {
            type: NodeTypes.Text,
            content: "\n  body {\n    background-color: red;\n  }\n",
            range: [8, 48],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</style>",
            range: [49, 56],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [57, 58],
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
            content: "<div",
            range: [59, 62],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [63, 63],
          },
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  test\n  \n  ",
                  range: [64, 76],
                },
              },
            },
            {
              type: NodeTypes.Tag,
              content: {
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<style",
                  range: [77, 82],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "type",
                      range: [84, 87],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [89, 89],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "text/css",
                      range: [90, 97],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [98, 98],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "rel",
                      range: [100, 102],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [104, 104],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "stylesheet",
                      range: [105, 114],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [115, 115],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [116, 116],
                },
                value: {
                  type: NodeTypes.Text,
                  content:
                    "\n    body {\n      background-color: white;\n    }\n  ",
                  range: [117, 167],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</style>",
                  range: [168, 175],
                },
              },
            },
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [176, 176],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            range: [177, 182],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [183, 184],
          },
        },
      },
      {
        type: NodeTypes.Tag,
        content: {
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<style",
            range: [185, 190],
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "type",
                range: [192, 195],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                range: [197, 197],
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "text/css",
                range: [198, 205],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                range: [206, 206],
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "rel",
                range: [208, 210],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                range: [212, 212],
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "stylesheet",
                range: [213, 222],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                range: [223, 223],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [224, 224],
          },
          value: {
            type: TokenTypes.Text,
            content: "\n  body {\n    background-color: black;\n  }\n",
            range: [225, 267],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</style>",
            range: [268, 275],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [276, 276],
          },
        },
      },
    ],
  },
};
