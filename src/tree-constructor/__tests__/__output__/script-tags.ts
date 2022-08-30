import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 221],
  children: [
    { type: NodeTypes.Text, value: "\n", range: [0, 1] },
    {
      type: NodeTypes.Tag,
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [9, 31],
          key: { type: TokenTypes.AttributeKey, value: "src", range: [9, 12] },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [13, 14],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "./some/script.js",
            range: [14, 30],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [30, 31],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [32, 37],
          key: {
            type: TokenTypes.AttributeKey,
            value: "async",
            range: [32, 37],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<script",
        range: [1, 8],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [37, 38] },
      close: { type: TokenTypes.CloseTag, value: "</script>", range: [38, 47] },
      value: { type: NodeTypes.Text, value: "", range: [38, 38] },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [47, 49] },
    {
      type: NodeTypes.Tag,
      range: [49, 144],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [49, 53],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [53, 54] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</div>", range: [138, 144] },
      children: [
        { type: NodeTypes.Text, value: "\n  test\n  \n  ", range: [54, 67] },
        {
          type: NodeTypes.Tag,
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [75, 97],
              key: {
                type: TokenTypes.AttributeKey,
                value: "type",
                range: [75, 79],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [80, 81],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "text/javascript",
                range: [81, 96],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [96, 97],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<script",
            range: [67, 74],
          },
          openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [97, 98] },
          close: {
            type: TokenTypes.CloseTag,
            value: "</script>",
            range: [128, 137],
          },
          value: {
            type: NodeTypes.Text,
            value: "\n    console.log('hello!') \n  ",
            range: [98, 128],
          },
        },
        { type: NodeTypes.Text, value: "\n", range: [137, 138] },
      ],
    },
    { type: NodeTypes.Text, value: "\n\n", range: [144, 146] },
    {
      type: NodeTypes.Tag,
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [154, 176],
          key: {
            type: TokenTypes.AttributeKey,
            value: "type",
            range: [154, 158],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [159, 160],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "text/javascript",
            range: [160, 175],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [175, 176],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<script",
        range: [146, 153],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [176, 177] },
      close: {
        type: TokenTypes.CloseTag,
        value: "</script>",
        range: [211, 220],
      },
      value: {
        type: NodeTypes.Text,
        value: "\n  console.log('another hello!') \n",
        range: [177, 211],
      },
    },
    { type: NodeTypes.Text, value: "\n", range: [220, 221] },
  ],
};
