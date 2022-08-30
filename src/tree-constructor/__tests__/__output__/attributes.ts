import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 535],
  children: [
    { type: NodeTypes.Text, value: "\n", range: [0, 1] },
    {
      type: NodeTypes.Tag,
      range: [1, 485],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [6, 18],
          key: {
            type: TokenTypes.AttributeKey,
            value: "class",
            range: [6, 11],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [12, 13],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "test",
            range: [13, 17],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [17, 18],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [1, 5],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [18, 19] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</div>", range: [479, 485] },
      children: [
        { type: NodeTypes.Text, value: "\n  ", range: [19, 22] },
        {
          type: NodeTypes.Tag,
          range: [22, 87],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [35, 54],
              key: {
                type: TokenTypes.AttributeKey,
                value: "required",
                range: [35, 43],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [44, 45],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "requered",
                range: [45, 53],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [53, 54],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [55, 72],
              key: {
                type: TokenTypes.AttributeKey,
                value: "data-some",
                range: [55, 64],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [65, 66],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "thing",
                range: [66, 71],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [71, 72],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<custom-elem",
            range: [22, 34],
          },
          openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [72, 73] },
          name: "custom-elem",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</custom-elem>",
            range: [73, 87],
          },
        },
        { type: NodeTypes.Text, value: "\n  \n  ", range: [87, 93] },
        {
          type: NodeTypes.Tag,
          range: [93, 143],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [101, 109],
              key: {
                type: TokenTypes.AttributeKey,
                value: "disabled",
                range: [101, 109],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [110, 124],
              key: {
                type: TokenTypes.AttributeKey,
                value: "class",
                range: [110, 115],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [116, 117],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "button",
                range: [117, 123],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [123, 124],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [125, 133],
              key: {
                type: TokenTypes.AttributeKey,
                value: "required",
                range: [125, 133],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<button",
            range: [93, 100],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [133, 134],
          },
          name: "button",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</button>",
            range: [134, 143],
          },
        },
        { type: NodeTypes.Text, value: "\n  ", range: [143, 146] },
        {
          type: NodeTypes.Tag,
          range: [146, 181],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [154, 162],
              key: {
                type: TokenTypes.AttributeKey,
                value: "disabled",
                range: [154, 162],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [163, 171],
              key: {
                type: TokenTypes.AttributeKey,
                value: "required",
                range: [163, 171],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<button",
            range: [146, 153],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [171, 172],
          },
          name: "button",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</button>",
            range: [172, 181],
          },
        },
        { type: NodeTypes.Text, value: "\n  ", range: [181, 184] },
        {
          type: NodeTypes.Tag,
          range: [184, 308],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [197, 205],
              key: {
                type: TokenTypes.AttributeKey,
                value: "disabled",
                range: [197, 205],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [211, 234],
              key: {
                type: TokenTypes.AttributeKey,
                value: "class",
                range: [211, 216],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [217, 218],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "button disabled",
                range: [218, 233],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [233, 234],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [240, 256],
              key: {
                type: TokenTypes.AttributeKey,
                value: "test",
                range: [240, 244],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [245, 246],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "attribute",
                range: [246, 255],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [255, 256],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [261, 280],
              key: {
                type: TokenTypes.AttributeKey,
                value: "another",
                range: [261, 268],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [269, 270],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "attribute",
                range: [270, 279],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [279, 280],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [285, 295],
              key: {
                type: TokenTypes.AttributeKey,
                value: "custom-one",
                range: [285, 295],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<button",
            range: [184, 191],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [298, 299],
          },
          name: "button",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</button>",
            range: [299, 308],
          },
        },
        { type: NodeTypes.Text, value: "\n  \n  ", range: [308, 314] },
        {
          type: NodeTypes.Tag,
          range: [314, 394],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [320, 332],
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: "'",
                range: [320, 321],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "only value",
                range: [321, 331],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: "'",
                range: [331, 332],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [333, 343],
              key: {
                type: TokenTypes.AttributeKey,
                value: "'only-key'",
                range: [333, 343],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [344, 358],
              key: {
                type: TokenTypes.AttributeKey,
                value: "another",
                range: [344, 351],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [352, 353],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "attr",
                range: [353, 357],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [357, 358],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [360, 374],
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [360, 361],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "only-value-2",
                range: [361, 373],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [373, 374],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [375, 387],
              key: {
                type: TokenTypes.AttributeKey,
                value: '"only-key-2"',
                range: [375, 387],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<div",
            range: [314, 318],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [387, 388],
          },
          name: "div",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [388, 394],
          },
        },
        { type: NodeTypes.Text, value: "\n  \n  ", range: [394, 400] },
        {
          type: NodeTypes.Tag,
          range: [400, 478],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [410, 423],
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: "'",
                range: [410, 411],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "more spaces",
                range: [411, 422],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: "'",
                range: [422, 423],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [428, 433],
              key: {
                type: TokenTypes.AttributeKey,
                value: "'key'",
                range: [428, 433],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [434, 455],
              key: {
                type: TokenTypes.AttributeKey,
                value: "spaced",
                range: [434, 440],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [448, 449],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "value",
                range: [449, 454],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [454, 455],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [461, 468],
              key: {
                type: TokenTypes.AttributeKey,
                value: '"key-2"',
                range: [461, 468],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<div",
            range: [400, 404],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [471, 472],
          },
          name: "div",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [472, 478],
          },
        },
        { type: NodeTypes.Text, value: "\n", range: [478, 479] },
      ],
    },
    { type: NodeTypes.Text, value: "\n\n", range: [485, 487] },
    {
      type: NodeTypes.Tag,
      range: [487, 534],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [493, 514],
          key: {
            type: TokenTypes.AttributeKey,
            value: "class",
            range: [493, 498],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [499, 500],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "another class",
            range: [500, 513],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [513, 514],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [515, 526],
          key: {
            type: TokenTypes.AttributeKey,
            value: "custom-attr",
            range: [515, 526],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<span",
        range: [487, 492],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [526, 527] },
      name: "span",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</span>", range: [527, 534] },
    },
    { type: NodeTypes.Text, value: "\n", range: [534, 535] },
  ],
};
