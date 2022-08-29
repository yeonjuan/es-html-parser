import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 534],
  children: [
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [0, 0],
    },
    {
      type: NodeTypes.Tag,
      range: [1, 484],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [6, 17],
          key: {
            type: TokenTypes.AttributeKey,
            value: "class",
            range: [6, 10],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [12, 12],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "test",
            range: [13, 16],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [17, 17],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [1, 4],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [18, 18],
      },
      name: "div",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</div>",
        range: [479, 484],
      },
      children: [
        {
          type: NodeTypes.Text,
          value: "\n  ",
          range: [19, 21],
        },
        {
          type: NodeTypes.Tag,
          range: [22, 86],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [35, 53],
              key: {
                type: TokenTypes.AttributeKey,
                value: "required",
                range: [35, 42],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [44, 44],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "requered",
                range: [45, 52],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [53, 53],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [55, 71],
              key: {
                type: TokenTypes.AttributeKey,
                value: "data-some",
                range: [55, 63],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [65, 65],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "thing",
                range: [66, 70],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [71, 71],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<custom-elem",
            range: [22, 33],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [72, 72],
          },
          name: "custom-elem",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</custom-elem>",
            range: [73, 86],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n  \n  ",
          range: [87, 92],
        },
        {
          type: NodeTypes.Tag,
          range: [93, 142],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [101, 108],
              key: {
                type: TokenTypes.AttributeKey,
                value: "disabled",
                range: [101, 108],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [110, 123],
              key: {
                type: TokenTypes.AttributeKey,
                value: "class",
                range: [110, 114],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [116, 116],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "button",
                range: [117, 122],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [123, 123],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [125, 132],
              key: {
                type: TokenTypes.AttributeKey,
                value: "required",
                range: [125, 132],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<button",
            range: [93, 99],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [133, 133],
          },
          name: "button",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</button>",
            range: [134, 142],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n  ",
          range: [143, 145],
        },
        {
          type: NodeTypes.Tag,
          range: [146, 180],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [154, 161],
              key: {
                type: TokenTypes.AttributeKey,
                value: "disabled",
                range: [154, 161],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [163, 170],
              key: {
                type: TokenTypes.AttributeKey,
                value: "required",
                range: [163, 170],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<button",
            range: [146, 152],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [171, 171],
          },
          name: "button",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</button>",
            range: [172, 180],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n  ",
          range: [181, 183],
        },
        {
          type: NodeTypes.Tag,
          range: [184, 307],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [197, 204],
              key: {
                type: TokenTypes.AttributeKey,
                value: "disabled",
                range: [197, 204],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [211, 233],
              key: {
                type: TokenTypes.AttributeKey,
                value: "class",
                range: [211, 215],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [217, 217],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "button disabled",
                range: [218, 232],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [233, 233],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [240, 255],
              key: {
                type: TokenTypes.AttributeKey,
                value: "test",
                range: [240, 243],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [245, 245],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "attribute",
                range: [246, 254],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [255, 255],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [261, 279],
              key: {
                type: TokenTypes.AttributeKey,
                value: "another",
                range: [261, 267],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [269, 269],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "attribute",
                range: [270, 278],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [279, 279],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [285, 294],
              key: {
                type: TokenTypes.AttributeKey,
                value: "custom-one",
                range: [285, 294],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<button",
            range: [184, 190],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [298, 298],
          },
          name: "button",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</button>",
            range: [299, 307],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n  \n  ",
          range: [308, 313],
        },
        {
          type: NodeTypes.Tag,
          range: [314, 393],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [320, 331],
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: "'",
                range: [320, 320],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "only value",
                range: [321, 330],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: "'",
                range: [331, 331],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [333, 342],
              key: {
                type: TokenTypes.AttributeKey,
                value: "'only-key'",
                range: [333, 342],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [344, 357],
              key: {
                type: TokenTypes.AttributeKey,
                value: "another",
                range: [344, 350],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [352, 352],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "attr",
                range: [353, 356],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [357, 357],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [360, 373],
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [360, 360],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "only-value-2",
                range: [361, 372],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [373, 373],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [375, 386],
              key: {
                type: TokenTypes.AttributeKey,
                value: '"only-key-2"',
                range: [375, 386],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<div",
            range: [314, 317],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [387, 387],
          },
          name: "div",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [388, 393],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n  \n  ",
          range: [394, 399],
        },
        {
          type: NodeTypes.Tag,
          range: [400, 477],
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [410, 422],
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: "'",
                range: [410, 410],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "more spaces",
                range: [411, 421],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: "'",
                range: [422, 422],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [428, 432],
              key: {
                type: TokenTypes.AttributeKey,
                value: "'key'",
                range: [428, 432],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [434, 454],
              key: {
                type: TokenTypes.AttributeKey,
                value: "spaced",
                range: [434, 439],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                value: '"',
                range: [448, 448],
              },
              value: {
                type: TokenTypes.AttributeValue,
                value: "value",
                range: [449, 453],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [454, 454],
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [461, 467],
              key: {
                type: TokenTypes.AttributeKey,
                value: '"key-2"',
                range: [461, 467],
              },
            },
          ],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<div",
            range: [400, 403],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [471, 471],
          },
          name: "div",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [472, 477],
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [478, 478],
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [485, 486],
    },
    {
      type: NodeTypes.Tag,
      range: [487, 533],
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [493, 513],
          key: {
            type: TokenTypes.AttributeKey,
            value: "class",
            range: [493, 497],
          },
          startWrapper: {
            type: TokenTypes.AttributeValueWrapperStart,
            value: '"',
            range: [499, 499],
          },
          value: {
            type: TokenTypes.AttributeValue,
            value: "another class",
            range: [500, 512],
          },
          endWrapper: {
            type: TokenTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [513, 513],
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [515, 525],
          key: {
            type: TokenTypes.AttributeKey,
            value: "custom-attr",
            range: [515, 525],
          },
        },
      ],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<span",
        range: [487, 491],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [526, 526],
      },
      name: "span",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</span>",
        range: [527, 533],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [534, 534],
    },
  ],
};
