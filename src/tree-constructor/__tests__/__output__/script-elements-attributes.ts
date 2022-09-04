import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 308],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 20,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      selfClosing: false,
      name: "div",
      range: [0, 234],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 15,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        range: [0, 4],
        value: "<div",
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
        type: NodeTypes.OpenTagEnd,
        range: [4, 5],
        value: ">",
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
        type: NodeTypes.CloseTag,
        range: [228, 234],
        value: "</div>",
        loc: {
          start: {
            line: 15,
          },
          end: {
            line: 15,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          range: [5, 25],
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 4,
            },
          },
          value: "\n  dummy content\n\n  ",
        },
        {
          type: NodeTypes.ScriptTag,
          range: [25, 118],
          loc: {
            start: {
              line: 4,
            },
            end: {
              line: 6,
            },
          },
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [33, 55],
              loc: {
                start: {
                  line: 4,
                },
                end: {
                  line: 4,
                },
              },
              startWrapper: {
                type: NodeTypes.AttributeValueWrapperStart,
                range: [38, 39],
                value: '"',
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                range: [33, 37],
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
                value: "type",
              },
              value: {
                type: NodeTypes.AttributeValue,
                range: [39, 54],
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
                value: "text/javascript",
              },
              endWrapper: {
                type: NodeTypes.AttributeValueWrapperEnd,
                value: '"',
                range: [54, 55],
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [56, 78],
              loc: {
                start: {
                  line: 4,
                },
                end: {
                  line: 4,
                },
              },
              startWrapper: {
                type: NodeTypes.AttributeValueWrapperStart,
                value: '"',
                range: [71, 72],
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                range: [56, 67],
                value: "some-custom",
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
              },
              value: {
                type: NodeTypes.AttributeValue,
                value: "thing",
                range: [72, 77],
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
              },
              endWrapper: {
                value: '"',
                range: [77, 78],
                type: NodeTypes.AttributeValueWrapperEnd,
                loc: {
                  start: {
                    line: 4,
                  },
                  end: {
                    line: 4,
                  },
                },
              },
            },
          ],
          openStart: {
            type: NodeTypes.OpenTagStartScript,
            value: "<script",
            range: [25, 32],
            loc: {
              start: {
                line: 4,
              },
              end: {
                line: 4,
              },
            },
          },
          openEnd: {
            type: NodeTypes.OpenTagEndScript,
            value: ">",
            range: [79, 80],
            loc: {
              start: {
                line: 4,
              },
              end: {
                line: 4,
              },
            },
          },
          close: {
            type: NodeTypes.CloseTagScript,
            value: "</script>",
            range: [109, 118],
            loc: {
              start: {
                line: 6,
              },
              end: {
                line: 6,
              },
            },
          },
          value: {
            type: NodeTypes.ScriptTagContent,
            value: "\n    console.log('test 1')\n  ",
            range: [80, 109],
            loc: {
              start: {
                line: 4,
              },
              end: {
                line: 6,
              },
            },
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n\n  ",
          range: [118, 122],
          loc: {
            start: {
              line: 6,
            },
            end: {
              line: 8,
            },
          },
        },
        {
          type: NodeTypes.ScriptTag,
          range: [122, 227],
          loc: {
            start: {
              line: 8,
            },
            end: {
              line: 14,
            },
          },
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [134, 156],
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
                range: [134, 138],
                value: "type",
                loc: {
                  start: {
                    line: 9,
                  },
                  end: {
                    line: 9,
                  },
                },
              },
              startWrapper: {
                type: NodeTypes.AttributeValueWrapperStart,
                range: [139, 140],
                value: '"',
                loc: {
                  start: {
                    line: 9,
                  },
                  end: {
                    line: 9,
                  },
                },
              },
              endWrapper: {
                type: NodeTypes.AttributeValueWrapperEnd,
                range: [155, 156],
                value: '"',
                loc: {
                  start: {
                    line: 9,
                  },
                  end: {
                    line: 9,
                  },
                },
              },
              value: {
                type: NodeTypes.AttributeValue,
                value: "text/javascript",
                range: [140, 155],
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
              range: [161, 166],
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
                value: "async",
                range: [161, 166],
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
          ],
          openStart: {
            type: NodeTypes.OpenTagStartScript,
            value: "<script",
            range: [122, 129],
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
            type: NodeTypes.OpenTagEndScript,
            value: ">",
            range: [169, 170],
            loc: {
              start: {
                line: 11,
              },
              end: {
                line: 11,
              },
            },
          },
          close: {
            type: NodeTypes.CloseTagScript,
            value: "</script>",
            range: [218, 227],
            loc: {
              start: {
                line: 14,
              },
              end: {
                line: 14,
              },
            },
          },
          value: {
            type: NodeTypes.ScriptTagContent,
            range: [170, 218],
            value: "\n    let a = '<div></div>'\n    console.log(a)\n  ",
            loc: {
              start: {
                line: 11,
              },
              end: {
                line: 14,
              },
            },
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [227, 228],
          loc: {
            start: {
              line: 14,
            },
            end: {
              line: 15,
            },
          },
        },
      ],
    },
    {
      type: NodeTypes.Text,
      range: [234, 236],
      value: "\n\n",
      loc: {
        start: {
          line: 15,
        },
        end: {
          line: 17,
        },
      },
    },
    {
      type: NodeTypes.ScriptTag,
      range: [236, 307],
      loc: {
        start: {
          line: 17,
        },
        end: {
          line: 19,
        },
      },
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [244, 249],
          loc: {
            start: {
              line: 17,
            },
            end: {
              line: 17,
            },
          },
          key: {
            type: NodeTypes.AttributeKey,
            range: [244, 249],
            value: "async",
            loc: {
              start: {
                line: 17,
              },
              end: {
                line: 17,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [250, 272],
          loc: {
            start: {
              line: 17,
            },
            end: {
              line: 17,
            },
          },
          key: {
            type: NodeTypes.AttributeKey,
            range: [250, 254],
            value: "type",
            loc: {
              start: {
                line: 17,
              },
              end: {
                line: 17,
              },
            },
          },
          startWrapper: {
            type: NodeTypes.AttributeValueWrapperStart,
            range: [255, 256],
            value: '"',
            loc: {
              start: {
                line: 17,
              },
              end: {
                line: 17,
              },
            },
          },
          value: {
            type: NodeTypes.AttributeValue,
            range: [256, 271],
            value: "text/javascript",
            loc: {
              start: {
                line: 17,
              },
              end: {
                line: 17,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.AttributeValueWrapperEnd,
            value: '"',
            range: [271, 272],
            loc: {
              start: {
                line: 17,
              },
              end: {
                line: 17,
              },
            },
          },
        },
      ],
      openStart: {
        type: NodeTypes.OpenTagStartScript,
        value: "<script",
        range: [236, 243],
        loc: {
          start: {
            line: 17,
          },
          end: {
            line: 17,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndScript,
        range: [272, 273],
        value: ">",
        loc: {
          start: {
            line: 17,
          },
          end: {
            line: 17,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagScript,
        value: "</script>",
        range: [298, 307],
        loc: {
          start: {
            line: 19,
          },
          end: {
            line: 19,
          },
        },
      },
      value: {
        type: NodeTypes.ScriptTagContent,
        range: [273, 298],
        value: "\n  console.log('test 2')\n",
        loc: {
          start: {
            line: 17,
          },
          end: {
            line: 19,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [307, 308],
      loc: {
        start: {
          line: 19,
        },
        end: {
          line: 20,
        },
      },
    },
  ],
};
