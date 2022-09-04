import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 229],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 19,
    },
  },
  children: [
    {
      type: NodeTypes.StyleTag,
      range: [0, 93],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 5,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartStyle,
        value: "<style",
        range: [0, 6],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndStyle,
        value: ">",
        range: [41, 42],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagStyle,
        value: "</style>",
        range: [85, 93],
        loc: {
          start: {
            line: 5,
          },
          end: {
            line: 5,
          },
        },
      },
      value: {
        type: NodeTypes.StyleTagContent,
        value: "\n  body {\n    background-color: white;\n  }\n",
        range: [42, 85],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 5,
          },
        },
      },
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [7, 22],
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 1,
            },
          },
          key: {
            type: NodeTypes.AttributeKey,
            value: "type",
            range: [7, 11],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
          startWrapper: {
            type: NodeTypes.AttributeValueWrapperStart,
            value: '"',
            range: [12, 13],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [21, 22],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
          value: {
            type: NodeTypes.AttributeValue,
            value: "text/css",
            range: [13, 21],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [23, 41],
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 1,
            },
          },
          key: {
            type: NodeTypes.AttributeKey,
            value: "custom",
            range: [23, 29],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
          startWrapper: {
            type: NodeTypes.AttributeValueWrapperStart,
            value: '"',
            range: [30, 31],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [40, 41],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
          value: {
            type: NodeTypes.AttributeValue,
            value: "attribute",
            range: [31, 40],
            loc: {
              start: {
                line: 1,
              },
              end: {
                line: 1,
              },
            },
          },
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [93, 95],
      loc: {
        start: {
          line: 5,
        },
        end: {
          line: 7,
        },
      },
    },
    {
      type: NodeTypes.Tag,
      attributes: [],
      name: "div",
      range: [95, 228],
      selfClosing: false,
      loc: {
        start: {
          line: 7,
        },
        end: {
          line: 18,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<div",
        range: [95, 99],
        loc: {
          start: {
            line: 7,
          },
          end: {
            line: 7,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [99, 100],
        loc: {
          start: {
            line: 7,
          },
          end: {
            line: 7,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTag,
        value: "</div>",
        range: [222, 228],
        loc: {
          start: {
            line: 18,
          },
          end: {
            line: 18,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          value: "\n  ",
          range: [100, 103],
          loc: {
            start: {
              line: 7,
            },
            end: {
              line: 8,
            },
          },
        },
        {
          type: NodeTypes.StyleTag,
          range: [103, 221],
          loc: {
            start: {
              line: 8,
            },
            end: {
              line: 17,
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStartStyle,
            value: "<style",
            range: [103, 109],
            loc: {
              start: {
                line: 8,
              },
              end: {
                line: 8,
              },
            },
          },
          openEnd: {
            type: NodeTypes.OpenTagEndStyle,
            value: ">",
            range: [163, 164],
            loc: {
              start: {
                line: 13,
              },
              end: {
                line: 13,
              },
            },
          },
          value: {
            type: NodeTypes.StyleTagContent,
            value: "\n    body {\n      background-color: red;\n    }\n  ",
            range: [164, 213],
            loc: {
              start: {
                line: 13,
              },
              end: {
                line: 17,
              },
            },
          },
          close: {
            type: NodeTypes.CloseTagStyle,
            value: "</style>",
            range: [213, 221],
            loc: {
              start: {
                line: 17,
              },
              end: {
                line: 17,
              },
            },
          },
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [114, 120],
              loc: {
                start: {
                  line: 9,
                },
                end: {
                  line: 9,
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                value: "custom",
                range: [114, 120],
                loc: {
                  start: {
                    line: 9,
                  },
                  end: {
                    line: 9,
                  },
                },
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [125, 140],
              loc: {
                start: {
                  line: 10,
                },
                end: {
                  line: 10,
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                range: [125, 129],
                loc: {
                  start: {
                    line: 10,
                  },
                  end: {
                    line: 10,
                  },
                },
                value: "type",
              },
              startWrapper: {
                type: NodeTypes.AttributeValueWrapperStart,
                value: '"',
                range: [130, 131],
                loc: {
                  start: {
                    line: 10,
                  },
                  end: {
                    line: 10,
                  },
                },
              },
              value: {
                type: NodeTypes.AttributeValue,
                value: "text/css",
                range: [131, 139],
                loc: {
                  start: {
                    line: 10,
                  },
                  end: {
                    line: 10,
                  },
                },
              },
              endWrapper: {
                type: NodeTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [139, 140],
                loc: {
                  start: {
                    line: 10,
                  },
                  end: {
                    line: 10,
                  },
                },
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [146, 160],
              loc: {
                start: {
                  line: 12,
                },
                end: {
                  line: 12,
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                value: "another-custom",
                range: [146, 160],
                loc: {
                  start: {
                    line: 12,
                  },
                  end: {
                    line: 12,
                  },
                },
              },
            },
          ],
        },
        {
          type: NodeTypes.Text,
          range: [221, 222],
          value: "\n",
          loc: {
            start: {
              line: 17,
            },
            end: {
              line: 18,
            },
          },
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [228, 229],
      loc: {
        start: {
          line: 18,
        },
        end: {
          line: 19,
        },
      },
    },
  ],
};
