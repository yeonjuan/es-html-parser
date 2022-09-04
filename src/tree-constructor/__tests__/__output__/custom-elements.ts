import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 88],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 8,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      attributes: [],
      name: "custom-one",
      selfClosing: false,
      range: [0, 87],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 7,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<custom-one",
        range: [0, 11],
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
        range: [11, 12],
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
        value: "</custom-one>",
        range: [74, 87],
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
          value: "\n  some text\n\n  ",
          range: [12, 28],
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 4,
            },
          },
        },
        {
          type: NodeTypes.Tag,
          name: "custom-two",
          attributes: [],
          selfClosing: false,
          range: [28, 73],
          loc: {
            start: {
              line: 4,
            },
            end: {
              line: 6,
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStart,
            value: "<custom-two",
            range: [28, 39],
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
            type: NodeTypes.OpenTagEnd,
            value: ">",
            range: [39, 40],
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
            type: NodeTypes.CloseTag,
            value: "</custom-two>",
            range: [60, 73],
            loc: {
              start: {
                line: 6,
              },
              end: {
                line: 6,
              },
            },
          },
          children: [
            {
              type: NodeTypes.Text,
              value: "\n    another text\n  ",
              range: [40, 60],
              loc: {
                start: {
                  line: 4,
                },
                end: {
                  line: 6,
                },
              },
            },
          ],
        },
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [73, 74],
          loc: {
            start: {
              line: 6,
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
      value: "\n",
      range: [87, 88],
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
};
