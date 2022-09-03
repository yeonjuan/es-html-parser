import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 89],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 10,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      name: "div",
      selfClosing: false,
      range: [0, 88],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 9,
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
        range: [82, 88],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          range: [5, 8],
          value: "\n  ",
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 2,
            },
          },
        },
        {
          type: NodeTypes.Tag,
          name: "span",
          selfClosing: false,
          range: [8, 81],
          loc: {
            start: {
              line: 2,
            },
            end: {
              line: 8,
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStart,
            range: [8, 13],
            value: "<span",
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
            range: [13, 14],
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
            range: [74, 81],
            loc: {
              start: {
                line: 8,
              },
              end: {
                line: 8,
              },
            },
          },
          children: [
            {
              type: NodeTypes.Text,
              value: "\n    some text\n\n    ",
              range: [14, 34],
              loc: {
                start: {
                  line: 2,
                },
                end: {
                  line: 5,
                },
              },
            },
            {
              type: NodeTypes.Tag,
              name: "span",
              range: [34, 71],
              selfClosing: false,
              loc: {
                start: {
                  line: 5,
                },
                end: {
                  line: 7,
                },
              },
              openStart: {
                type: NodeTypes.OpenTagStart,
                value: "<span",
                range: [34, 39],
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
                value: ">",
                range: [39, 40],
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
                value: "</span>",
                range: [64, 71],
                loc: {
                  start: {
                    line: 7,
                  },
                  end: {
                    line: 7,
                  },
                },
              },
              children: [
                {
                  type: NodeTypes.Text,
                  range: [40, 64],
                  value: "\n      another text\n    ",
                  loc: {
                    start: {
                      line: 5,
                    },
                    end: {
                      line: 7,
                    },
                  },
                },
              ],
            },
            {
              type: NodeTypes.Text,
              value: "\n  ",
              range: [71, 74],
              loc: {
                start: {
                  line: 7,
                },
                end: {
                  line: 8,
                },
              },
            },
          ],
        },
        {
          type: NodeTypes.Text,
          range: [81, 82],
          value: "\n",
          loc: {
            start: {
              line: 8,
            },
            end: {
              line: 9,
            },
          },
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [88, 89],
      loc: {
        start: {
          line: 9,
        },
        end: {
          line: 10,
        },
      },
    },
  ],
};
