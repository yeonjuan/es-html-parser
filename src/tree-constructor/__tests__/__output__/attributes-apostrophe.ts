import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 294],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 18,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      attributes: [],
      selfClosing: false,
      name: "div",
      range: [0, 293],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 17,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<div",
        range: [0, 4],
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
        value: ">",
        range: [4, 5],
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
        value: "</div>",
        range: [287, 293],
        loc: {
          start: {
            line: 17,
          },
          end: {
            line: 17,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          range: [5, 8],
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 2,
            },
          },
          value: "\n  ",
        },
        {
          type: NodeTypes.Tag,
          name: "span",
          selfClosing: false,
          range: [8, 286],
          loc: {
            start: {
              line: 2,
            },
            end: {
              line: 16,
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStart,
            value: "<span",
            range: [8, 13],
            loc: {
              start: {
                line: 2,
              },
              end: {
                line: 2,
              },
            },
          },
          openEnd: {
            type: NodeTypes.OpenTagEnd,
            range: [55, 56],
            value: ">",
            loc: {
              start: {
                line: 2,
              },
              end: {
                line: 2,
              },
            },
          },
          close: {
            type: NodeTypes.CloseTag,
            value: "</span>",
            range: [279, 286],
            loc: {
              start: {
                line: 16,
              },
              end: {
                line: 16,
              },
            },
          },
          attributes: [
            {
              type: NodeTypes.Attribute,
              range: [14, 32],
              loc: {
                start: {
                  line: 2,
                },
                end: {
                  line: 2,
                },
              },
              startWrapper: {
                type: NodeTypes.AttributeValueWrapperStart,
                value: "'",
                range: [20, 21],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                value: "class",
                range: [14, 19],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
              value: {
                type: NodeTypes.AttributeValue,
                value: "test class",
                range: [21, 31],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
              endWrapper: {
                type: NodeTypes.AttributeValueWrapperEnd,
                range: [31, 32],
                value: "'",
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
            },
            {
              type: NodeTypes.Attribute,
              range: [33, 55],
              loc: {
                start: {
                  line: 2,
                },
                end: {
                  line: 2,
                },
              },
              startWrapper: {
                type: NodeTypes.AttributeValueWrapperStart,
                value: "'",
                range: [43, 44],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
              key: {
                type: NodeTypes.AttributeKey,
                value: "data-test",
                range: [33, 42],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
              value: {
                type: NodeTypes.AttributeValue,
                value: "data<test>",
                range: [44, 54],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
              endWrapper: {
                type: NodeTypes.AttributeValueWrapperEnd,
                value: "'",
                range: [54, 55],
                loc: {
                  start: {
                    line: 2,
                  },
                  end: {
                    line: 2,
                  },
                },
              },
            },
          ],
          children: [
            {
              type: NodeTypes.Text,
              range: [56, 76],
              loc: {
                start: {
                  line: 2,
                },
                end: {
                  line: 5,
                },
              },
              value: "\n    some text\n\n    ",
            },
            {
              type: NodeTypes.Tag,
              attributes: [],
              selfClosing: false,
              name: "div",
              range: [76, 276],
              loc: {
                start: {
                  line: 5,
                },
                end: {
                  line: 15,
                },
              },
              children: [
                {
                  type: NodeTypes.Text,
                  range: [81, 108],
                  loc: {
                    start: {
                      line: 5,
                    },
                    end: {
                      line: 8,
                    },
                  },
                  value: "\n      another text\n\n      ",
                },
                {
                  type: NodeTypes.Tag,
                  name: "custom-element",
                  range: [108, 265],
                  selfClosing: false,
                  loc: {
                    start: {
                      line: 8,
                    },
                    end: {
                      line: 14,
                    },
                  },
                  openStart: {
                    type: NodeTypes.OpenTagStart,
                    value: "<custom-element",
                    range: [108, 123],
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
                    type: NodeTypes.OpenTagEnd,
                    value: ">",
                    range: [204, 205],
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
                    type: NodeTypes.CloseTag,
                    value: "</custom-element>",
                    range: [248, 265],
                    loc: {
                      start: {
                        line: 14,
                      },
                      end: {
                        line: 14,
                      },
                    },
                  },
                  attributes: [
                    {
                      type: NodeTypes.Attribute,
                      range: [132, 158],
                      loc: {
                        start: {
                          line: 9,
                        },
                        end: {
                          line: 9,
                        },
                      },
                      startWrapper: {
                        type: NodeTypes.AttributeValueWrapperStart,
                        value: "'",
                        range: [144, 145],
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
                        value: "'",
                        range: [157, 158],
                        loc: {
                          start: {
                            line: 9,
                          },
                          end: {
                            line: 9,
                          },
                        },
                      },
                      key: {
                        type: NodeTypes.AttributeKey,
                        value: "custom-attr",
                        range: [132, 143],
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
                        value: "custom >test",
                        range: [145, 157],
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
                      range: [167, 197],
                      loc: {
                        start: {
                          line: 10,
                        },
                        end: {
                          line: 10,
                        },
                      },
                      startWrapper: {
                        type: NodeTypes.AttributeValueWrapperStart,
                        value: "'",
                        range: [184, 185],
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
                        value: "'",
                        range: [196, 197],
                        loc: {
                          start: {
                            line: 10,
                          },
                          end: {
                            line: 10,
                          },
                        },
                      },
                      key: {
                        type: NodeTypes.AttributeKey,
                        value: "with-spaces",
                        range: [167, 178],
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
                        value: "spaces test",
                        range: [185, 196],
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
                  children: [
                    {
                      type: NodeTypes.Text,
                      value: "\n        custom element\n        text\n      ",
                      range: [205, 248],
                      loc: {
                        start: {
                          line: 11,
                        },
                        end: {
                          line: 14,
                        },
                      },
                    },
                  ],
                },
                {
                  type: NodeTypes.Text,
                  value: "\n    ",
                  range: [265, 270],
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
              openStart: {
                type: NodeTypes.OpenTagStart,
                value: "<div",
                range: [76, 80],
                loc: {
                  start: {
                    line: 5,
                  },
                  end: {
                    line: 5,
                  },
                },
              },
              openEnd: {
                type: NodeTypes.OpenTagEnd,
                range: [80, 81],
                value: ">",
                loc: {
                  start: {
                    line: 5,
                  },
                  end: {
                    line: 5,
                  },
                },
              },
              close: {
                type: NodeTypes.CloseTag,
                value: "</div>",
                range: [270, 276],
                loc: {
                  start: {
                    line: 15,
                  },
                  end: {
                    line: 15,
                  },
                },
              },
            },
            {
              type: NodeTypes.Text,
              range: [276, 279],
              loc: {
                start: {
                  line: 15,
                },
                end: {
                  line: 16,
                },
              },
              value: "\n  ",
            },
          ],
        },
        {
          type: NodeTypes.Text,
          range: [286, 287],
          loc: {
            start: {
              line: 16,
            },
            end: {
              line: 17,
            },
          },
          value: "\n",
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [293, 294],
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
};
