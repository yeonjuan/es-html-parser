export default {
  type: "Document",
  range: [0, 229],
  children: [
    {
      type: "StyleTag",
      range: [0, 93],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 5,
          column: 8,
        },
      },
      attributes: [
        {
          type: "Attribute",
          range: [7, 22],
          loc: {
            start: {
              line: 1,
              column: 7,
            },
            end: {
              line: 1,
              column: 22,
            },
          },
          key: {
            type: "AttributeKey",
            isTemplate: false,
            value: "type",
            loc: {
              start: {
                line: 1,
                column: 7,
              },
              end: {
                line: 1,
                column: 11,
              },
            },
            range: [7, 11],
          },
          startWrapper: {
            type: "AttributeValueWrapperStart",
            value: '"',
            loc: {
              start: {
                line: 1,
                column: 12,
              },
              end: {
                line: 1,
                column: 13,
              },
            },
            range: [12, 13],
          },
          value: {
            type: "AttributeValue",
            isTemplate: false,
            value: "text/css",
            loc: {
              start: {
                line: 1,
                column: 13,
              },
              end: {
                line: 1,
                column: 21,
              },
            },
            range: [13, 21],
          },
          endWrapper: {
            type: "AttributeValueWrapperEnd",
            value: '"',
            loc: {
              start: {
                line: 1,
                column: 21,
              },
              end: {
                line: 1,
                column: 22,
              },
            },
            range: [21, 22],
          },
        },
        {
          type: "Attribute",
          range: [23, 41],
          loc: {
            start: {
              line: 1,
              column: 23,
            },
            end: {
              line: 1,
              column: 41,
            },
          },
          key: {
            type: "AttributeKey",
            isTemplate: false,
            value: "custom",
            loc: {
              start: {
                line: 1,
                column: 23,
              },
              end: {
                line: 1,
                column: 29,
              },
            },
            range: [23, 29],
          },
          startWrapper: {
            type: "AttributeValueWrapperStart",
            value: '"',
            loc: {
              start: {
                line: 1,
                column: 30,
              },
              end: {
                line: 1,
                column: 31,
              },
            },
            range: [30, 31],
          },
          value: {
            type: "AttributeValue",
            isTemplate: false,
            value: "attribute",
            loc: {
              start: {
                line: 1,
                column: 31,
              },
              end: {
                line: 1,
                column: 40,
              },
            },
            range: [31, 40],
          },
          endWrapper: {
            type: "AttributeValueWrapperEnd",
            value: '"',
            loc: {
              start: {
                line: 1,
                column: 40,
              },
              end: {
                line: 1,
                column: 41,
              },
            },
            range: [40, 41],
          },
        },
      ],
      openStart: {
        type: "OpenStyleTagStart",
        value: "<style",
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 6,
          },
        },
        range: [0, 6],
      },
      openEnd: {
        type: "OpenStyleTagEnd",
        value: ">",
        loc: {
          start: {
            line: 1,
            column: 41,
          },
          end: {
            line: 1,
            column: 42,
          },
        },
        range: [41, 42],
      },
      children: [
        {
          type: "StyleTagContent",
          isTemplate: false,
          value: "\n  body {\n    background-color: white;\n  }\n",
          loc: {
            start: {
              line: 1,
              column: 42,
            },
            end: {
              line: 5,
              column: 0,
            },
          },
          range: [42, 85],
        },
      ],
      close: {
        type: "CloseStyleTag",
        value: "</style>",
        loc: {
          start: {
            line: 5,
            column: 0,
          },
          end: {
            line: 5,
            column: 8,
          },
        },
        range: [85, 93],
      },
    },
    {
      type: "Text",
      isTemplate: false,
      value: "\n\n",
      loc: {
        start: {
          line: 5,
          column: 8,
        },
        end: {
          line: 7,
          column: 0,
        },
      },
      range: [93, 95],
    },
    {
      type: "Tag",
      range: [95, 228],
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 18,
          column: 6,
        },
      },
      attributes: [],
      children: [
        {
          type: "Text",
          isTemplate: false,
          value: "\n  ",
          loc: {
            start: {
              line: 7,
              column: 5,
            },
            end: {
              line: 8,
              column: 2,
            },
          },
          range: [100, 103],
        },
        {
          type: "StyleTag",
          range: [103, 221],
          loc: {
            start: {
              line: 8,
              column: 2,
            },
            end: {
              line: 17,
              column: 10,
            },
          },
          attributes: [
            {
              type: "Attribute",
              range: [114, 120],
              loc: {
                start: {
                  line: 9,
                  column: 4,
                },
                end: {
                  line: 9,
                  column: 10,
                },
              },
              key: {
                type: "AttributeKey",
                isTemplate: false,
                value: "custom",
                loc: {
                  start: {
                    line: 9,
                    column: 4,
                  },
                  end: {
                    line: 9,
                    column: 10,
                  },
                },
                range: [114, 120],
              },
            },
            {
              type: "Attribute",
              range: [125, 140],
              loc: {
                start: {
                  line: 10,
                  column: 4,
                },
                end: {
                  line: 10,
                  column: 19,
                },
              },
              key: {
                type: "AttributeKey",
                isTemplate: false,
                value: "type",
                loc: {
                  start: {
                    line: 10,
                    column: 4,
                  },
                  end: {
                    line: 10,
                    column: 8,
                  },
                },
                range: [125, 129],
              },
              startWrapper: {
                type: "AttributeValueWrapperStart",
                value: '"',
                loc: {
                  start: {
                    line: 10,
                    column: 9,
                  },
                  end: {
                    line: 10,
                    column: 10,
                  },
                },
                range: [130, 131],
              },
              value: {
                type: "AttributeValue",
                isTemplate: false,
                value: "text/css",
                loc: {
                  start: {
                    line: 10,
                    column: 10,
                  },
                  end: {
                    line: 10,
                    column: 18,
                  },
                },
                range: [131, 139],
              },
              endWrapper: {
                type: "AttributeValueWrapperEnd",
                value: '"',
                loc: {
                  start: {
                    line: 10,
                    column: 18,
                  },
                  end: {
                    line: 10,
                    column: 19,
                  },
                },
                range: [139, 140],
              },
            },
            {
              type: "Attribute",
              range: [146, 160],
              loc: {
                start: {
                  line: 12,
                  column: 4,
                },
                end: {
                  line: 12,
                  column: 18,
                },
              },
              key: {
                type: "AttributeKey",
                isTemplate: false,
                value: "another-custom",
                loc: {
                  start: {
                    line: 12,
                    column: 4,
                  },
                  end: {
                    line: 12,
                    column: 18,
                  },
                },
                range: [146, 160],
              },
            },
          ],
          openStart: {
            type: "OpenStyleTagStart",
            value: "<style",
            loc: {
              start: {
                line: 8,
                column: 2,
              },
              end: {
                line: 8,
                column: 8,
              },
            },
            range: [103, 109],
          },
          openEnd: {
            type: "OpenStyleTagEnd",
            value: ">",
            loc: {
              start: {
                line: 13,
                column: 2,
              },
              end: {
                line: 13,
                column: 3,
              },
            },
            range: [163, 164],
          },
          children: [
            {
              type: "StyleTagContent",
              isTemplate: false,
              value: "\n    body {\n      background-color: red;\n    }\n  ",
              loc: {
                start: {
                  line: 13,
                  column: 3,
                },
                end: {
                  line: 17,
                  column: 2,
                },
              },
              range: [164, 213],
            },
          ],
          close: {
            type: "CloseStyleTag",
            value: "</style>",
            loc: {
              start: {
                line: 17,
                column: 2,
              },
              end: {
                line: 17,
                column: 10,
              },
            },
            range: [213, 221],
          },
        },
        {
          type: "Text",
          isTemplate: false,
          value: "\n",
          loc: {
            start: {
              line: 17,
              column: 10,
            },
            end: {
              line: 18,
              column: 0,
            },
          },
          range: [221, 222],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<div",
        loc: {
          start: {
            line: 7,
            column: 0,
          },
          end: {
            line: 7,
            column: 4,
          },
        },
        range: [95, 99],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 7,
            column: 4,
          },
          end: {
            line: 7,
            column: 5,
          },
        },
        range: [99, 100],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: {
          start: {
            line: 18,
            column: 0,
          },
          end: {
            line: 18,
            column: 6,
          },
        },
        range: [222, 228],
      },
    },
    {
      type: "Text",
      isTemplate: false,
      value: "\n",
      loc: {
        start: {
          line: 18,
          column: 6,
        },
        end: {
          line: 19,
          column: 0,
        },
      },
      range: [228, 229],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 19,
      column: 0,
    },
  },
};
