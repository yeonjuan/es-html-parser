import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 277],
  children: [
    { type: NodeTypes.Text, value: "\n", range: [0, 1] },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<style",
        range: [1, 7],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [7, 8] },
      close: { type: TokenTypes.CloseTag, value: "</style>", range: [49, 57] },
      value: {
        type: NodeTypes.Text,
        value: "\n  body {\n    background-color: red;\n  }\n",
        range: [8, 49],
      },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [57, 59] },
    {
      type: NodeTypes.Tag,
      range: [59, 183],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [59, 63],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [63, 64] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</div>", range: [177, 183] },
      children: [
        { type: NodeTypes.Text, value: "\n  test\n  \n  ", range: [64, 77] },
        {
          type: NodeTypes.Tag,
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [84, 99],
              key: {
                type: TokenTypes.AttributeKey,
                value: "type",
                range: [84, 88],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [89, 90],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "text/css",
                range: [90, 98],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [98, 99],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [100, 116],
              key: {
                type: TokenTypes.AttributeKey,
                value: "rel",
                range: [100, 103],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [104, 105],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "stylesheet",
                range: [105, 115],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [115, 116],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<style",
            range: [77, 83],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [116, 117],
          },
          close: {
            type: TokenTypes.CloseTag,
            value: "</style>",
            range: [168, 176],
          },
          value: {
            type: NodeTypes.Text,
            value: "\n    body {\n      background-color: white;\n    }\n  ",
            range: [117, 168],
          },
        },
        { type: NodeTypes.Text, value: "\n", range: [176, 177] },
      ],
    },
    { type: NodeTypes.Text, value: "\n\n", range: [183, 185] },
    {
      type: NodeTypes.Tag,
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [192, 207],
          key: {
            type: TokenTypes.AttributeKey,
            value: "type",
            range: [192, 196],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [197, 198],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "text/css",
            range: [198, 206],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [206, 207],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [208, 224],
          key: {
            type: TokenTypes.AttributeKey,
            value: "rel",
            range: [208, 211],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [212, 213],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "stylesheet",
            range: [213, 223],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [223, 224],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<style",
        range: [185, 191],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [224, 225] },
      close: {
        type: TokenTypes.CloseTag,
        value: "</style>",
        range: [268, 276],
      },
      value: {
        type: NodeTypes.Text,
        value: "\n  body {\n    background-color: black;\n  }\n",
        range: [225, 268],
      },
    },
    { type: NodeTypes.Text, value: "\n", range: [276, 277] },
  ],
};
