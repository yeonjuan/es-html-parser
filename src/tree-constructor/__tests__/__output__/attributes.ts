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
          name: "div",
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            range: [1, 4],
          },
          selfClosing: false,
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "class",
                range: [6, 10],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                range: [12, 12],
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "test",
                range: [13, 16],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                range: [17, 17],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [18, 18],
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  range: [19, 21],
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                name: "custom-elem",
                selfClosing: false,
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<custom-elem",
                  range: [22, 33],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "required",
                      range: [35, 42],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [44, 44],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "requered",
                      range: [45, 52],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [53, 53],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "data-some",
                      range: [55, 63],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [65, 65],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "thing",
                      range: [66, 70],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [71, 71],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [72, 72],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</custom-elem>",
                  range: [73, 86],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  \n  ",
                  range: [87, 92],
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                name: "button",
                selfClosing: false,
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<button",
                  range: [93, 99],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "disabled",
                      range: [101, 108],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "class",
                      range: [110, 114],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [116, 116],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "button",
                      range: [117, 122],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [123, 123],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "required",
                      range: [125, 132],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [133, 133],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</button>",
                  range: [134, 142],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  range: [143, 145],
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                name: "button",
                selfClosing: false,
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<button",
                  range: [146, 152],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "disabled",
                      range: [154, 161],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "required",
                      range: [163, 170],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [171, 171],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</button>",
                  range: [172, 180],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  range: [181, 183],
                },
              },
            },
            {
              nodeType: NodeTypes.Tag,
              content: {
                name: "button",
                selfClosing: false,
                openStart: {
                  type: TokenTypes.OpenTagStart,
                  content: "<button",
                  range: [184, 190],
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "disabled",
                      range: [197, 204],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "class",
                      range: [211, 215],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [217, 217],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "button disabled",
                      range: [218, 232],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [233, 233],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "test",
                      range: [240, 243],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [245, 245],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "attribute",
                      range: [246, 254],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [255, 255],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "another",
                      range: [261, 267],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [269, 269],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "attribute",
                      range: [270, 278],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [279, 279],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "custom-one",
                      range: [285, 294],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [298, 298],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</button>",
                  range: [299, 307],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  \n  ",
                  range: [308, 313],
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
                  range: [314, 317],
                },
                attributes: [
                  {
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: "'",
                      range: [320, 320],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "only value",
                      range: [321, 330],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: "'",
                      range: [331, 331],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "'only-key'",
                      range: [333, 342],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "another",
                      range: [344, 350],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [352, 352],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "attr",
                      range: [353, 356],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [357, 357],
                    },
                  },
                  {
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [360, 360],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "only-value-2",
                      range: [361, 372],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [373, 373],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: '"only-key-2"',
                      range: [375, 386],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [387, 387],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</div>",
                  range: [388, 393],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  \n  ",
                  range: [394, 399],
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
                  range: [400, 403],
                },
                attributes: [
                  {
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: "'",
                      range: [410, 410],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "more spaces",
                      range: [411, 421],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: "'",
                      range: [422, 422],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "'key'",
                      range: [428, 432],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "spaced",
                      range: [434, 439],
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      range: [448, 448],
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "value",
                      range: [449, 453],
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      range: [454, 454],
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: '"key-2"',
                      range: [461, 467],
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [471, 471],
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</div>",
                  range: [472, 477],
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [478, 478],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            range: [479, 484],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [485, 486],
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          name: "span",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<span",
            range: [487, 491],
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "class",
                range: [493, 497],
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                range: [499, 499],
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "another class",
                range: [500, 512],
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                range: [513, 513],
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "custom-attr",
                range: [515, 525],
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [526, 526],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</span>",
            range: [527, 533],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [534, 534],
          },
        },
      },
    ],
  },
};
