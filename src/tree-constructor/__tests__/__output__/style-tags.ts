import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,

  children: [
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [0, 0],
    },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<style",
        range: [1, 6],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [7, 7],
      },
      close: {
        type: TokenTypes.CloseTag,
        value: "</style>",
        range: [49, 56],
      },
      value: {
        type: NodeTypes.Text,
        value: "\n  body {\n    background-color: red;\n  }\n",
        range: [8, 48],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [57, 58],
    },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [59, 62],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [63, 63],
      },
      name: "div",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</div>",
        range: [177, 182],
      },

      children: [
        {
          type: NodeTypes.Text,
          value: "\n  test\n  \n  ",
          range: [64, 76],
        },
        {
          type: NodeTypes.Tag,
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                value: "type",
                range: [84, 87],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [89, 89],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "text/css",
                range: [90, 97],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [98, 98],
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                value: "rel",
                range: [100, 102],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [104, 104],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "stylesheet",
                range: [105, 114],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [115, 115],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<style",
            range: [77, 82],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [116, 116],
          },
          close: {
            type: TokenTypes.CloseTag,
            value: "</style>",
            range: [168, 175],
          },
          value: {
            type: NodeTypes.Text,
            value: "\n    body {\n      background-color: white;\n    }\n  ",
            range: [117, 167],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [176, 176],
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [183, 184],
    },
    {
      type: NodeTypes.Tag,
      attributes: [
        {
          key: {
            type: TokenTypes.AttributeKey,
            value: "type",
            range: [192, 195],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [197, 197],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "text/css",
            range: [198, 205],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [206, 206],
          },
        },
        {
          key: {
            type: TokenTypes.AttributeKey,
            value: "rel",
            range: [208, 210],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [212, 212],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "stylesheet",
            range: [213, 222],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [223, 223],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<style",
        range: [185, 190],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [224, 224],
      },
      close: {
        type: TokenTypes.CloseTag,
        value: "</style>",
        range: [268, 275],
      },
      value: {
        type: TokenTypes.Text,
        value: "\n  body {\n    background-color: black;\n  }\n",
        range: [225, 267],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [276, 276],
    },
  ],
};
