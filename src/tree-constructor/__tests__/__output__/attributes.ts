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
          name: "div",
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            startPosition: 1,
            endPosition: 4,
          },
          selfClosing: false,
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "class",
                startPosition: 6,
                endPosition: 10,
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                startPosition: 12,
                endPosition: 12,
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "test",
                startPosition: 13,
                endPosition: 16,
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                startPosition: 17,
                endPosition: 17,
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 18,
            endPosition: 18,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  startPosition: 19,
                  endPosition: 21,
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
                  startPosition: 22,
                  endPosition: 33,
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "required",
                      startPosition: 35,
                      endPosition: 42,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 44,
                      endPosition: 44,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "requered",
                      startPosition: 45,
                      endPosition: 52,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 53,
                      endPosition: 53,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "data-some",
                      startPosition: 55,
                      endPosition: 63,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 65,
                      endPosition: 65,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "thing",
                      startPosition: 66,
                      endPosition: 70,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 71,
                      endPosition: 71,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 72,
                  endPosition: 72,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</custom-elem>",
                  startPosition: 73,
                  endPosition: 86,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  \n  ",
                  startPosition: 87,
                  endPosition: 92,
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
                  startPosition: 93,
                  endPosition: 99,
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "disabled",
                      startPosition: 101,
                      endPosition: 108,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "class",
                      startPosition: 110,
                      endPosition: 114,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 116,
                      endPosition: 116,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "button",
                      startPosition: 117,
                      endPosition: 122,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 123,
                      endPosition: 123,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "required",
                      startPosition: 125,
                      endPosition: 132,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 133,
                  endPosition: 133,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</button>",
                  startPosition: 134,
                  endPosition: 142,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  startPosition: 143,
                  endPosition: 145,
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
                  startPosition: 146,
                  endPosition: 152,
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "disabled",
                      startPosition: 154,
                      endPosition: 161,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "required",
                      startPosition: 163,
                      endPosition: 170,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 171,
                  endPosition: 171,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</button>",
                  startPosition: 172,
                  endPosition: 180,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  startPosition: 181,
                  endPosition: 183,
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
                  startPosition: 184,
                  endPosition: 190,
                },
                attributes: [
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "disabled",
                      startPosition: 197,
                      endPosition: 204,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "class",
                      startPosition: 211,
                      endPosition: 215,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 217,
                      endPosition: 217,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "button disabled",
                      startPosition: 218,
                      endPosition: 232,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 233,
                      endPosition: 233,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "test",
                      startPosition: 240,
                      endPosition: 243,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 245,
                      endPosition: 245,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "attribute",
                      startPosition: 246,
                      endPosition: 254,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 255,
                      endPosition: 255,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "another",
                      startPosition: 261,
                      endPosition: 267,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 269,
                      endPosition: 269,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "attribute",
                      startPosition: 270,
                      endPosition: 278,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 279,
                      endPosition: 279,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "custom-one",
                      startPosition: 285,
                      endPosition: 294,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 298,
                  endPosition: 298,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</button>",
                  startPosition: 299,
                  endPosition: 307,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  \n  ",
                  startPosition: 308,
                  endPosition: 313,
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
                  startPosition: 314,
                  endPosition: 317,
                },
                attributes: [
                  {
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: "'",
                      startPosition: 320,
                      endPosition: 320,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "only value",
                      startPosition: 321,
                      endPosition: 330,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: "'",
                      startPosition: 331,
                      endPosition: 331,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "'only-key'",
                      startPosition: 333,
                      endPosition: 342,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "another",
                      startPosition: 344,
                      endPosition: 350,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 352,
                      endPosition: 352,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "attr",
                      startPosition: 353,
                      endPosition: 356,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 357,
                      endPosition: 357,
                    },
                  },
                  {
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 360,
                      endPosition: 360,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "only-value-2",
                      startPosition: 361,
                      endPosition: 372,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 373,
                      endPosition: 373,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: '"only-key-2"',
                      startPosition: 375,
                      endPosition: 386,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 387,
                  endPosition: 387,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</div>",
                  startPosition: 388,
                  endPosition: 393,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  \n  ",
                  startPosition: 394,
                  endPosition: 399,
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
                  startPosition: 400,
                  endPosition: 403,
                },
                attributes: [
                  {
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: "'",
                      startPosition: 410,
                      endPosition: 410,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "more spaces",
                      startPosition: 411,
                      endPosition: 421,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: "'",
                      startPosition: 422,
                      endPosition: 422,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "'key'",
                      startPosition: 428,
                      endPosition: 432,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: "spaced",
                      startPosition: 434,
                      endPosition: 439,
                    },
                    startWrapper: {
                      type: TokenTypes.AttributeValueWrapperStart,
                      content: '"',
                      startPosition: 448,
                      endPosition: 448,
                    },
                    value: {
                      type: TokenTypes.AttributeValue,
                      content: "value",
                      startPosition: 449,
                      endPosition: 453,
                    },
                    endWrapper: {
                      type: TokenTypes.AttributeValueWrapperEnd,
                      content: '"',
                      startPosition: 454,
                      endPosition: 454,
                    },
                  },
                  {
                    key: {
                      type: TokenTypes.AttributeKey,
                      content: '"key-2"',
                      startPosition: 461,
                      endPosition: 467,
                    },
                  },
                ],
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 471,
                  endPosition: 471,
                },
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</div>",
                  startPosition: 472,
                  endPosition: 477,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 478,
                  endPosition: 478,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            startPosition: 479,
            endPosition: 484,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 485,
            endPosition: 486,
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
            startPosition: 487,
            endPosition: 491,
          },
          attributes: [
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "class",
                startPosition: 493,
                endPosition: 497,
              },
              startWrapper: {
                type: TokenTypes.AttributeValueWrapperStart,
                content: '"',
                startPosition: 499,
                endPosition: 499,
              },
              value: {
                type: TokenTypes.AttributeValue,
                content: "another class",
                startPosition: 500,
                endPosition: 512,
              },
              endWrapper: {
                type: TokenTypes.AttributeValueWrapperEnd,
                content: '"',
                startPosition: 513,
                endPosition: 513,
              },
            },
            {
              key: {
                type: TokenTypes.AttributeKey,
                content: "custom-attr",
                startPosition: 515,
                endPosition: 525,
              },
            },
          ],
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 526,
            endPosition: 526,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</span>",
            startPosition: 527,
            endPosition: 533,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 534,
            endPosition: 534,
          },
        },
      },
    ],
  },
};
