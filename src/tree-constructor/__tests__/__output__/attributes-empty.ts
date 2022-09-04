import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 100],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 11,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      name: "span",
      selfClosing: false,
      range: [0, 99],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 10,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<span",
        range: [0, 5],
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
        range: [6, 7],
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
        value: "</span>",
        range: [92, 99],
        loc: {
          start: {
            line: 10,
          },
          end: {
            line: 10,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          value: "\n  some text\n\n  ",
          range: [7, 23],
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
          name: "custom-element",
          selfClosing: false,
          range: [23, 91],
          loc: {
            start: {
              line: 4,
            },
            end: {
              line: 9,
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStart,
            value: "<custom-element",
            range: [23, 38],
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
            range: [42, 43],
            loc: {
              start: {
                line: 6,
              },
              end: {
                line: 6,
              },
            },
          },
          close: {
            type: NodeTypes.CloseTag,
            value: "</custom-element>",
            range: [74, 91],
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
              value: "\n    custom element\n    text\n  ",
              range: [43, 74],
              loc: {
                start: {
                  line: 6,
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
          range: [91, 92],
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
    },
    {
      type: NodeTypes.Text,
      range: [99, 100],
      loc: {
        start: {
          line: 10,
        },
        end: {
          line: 11,
        },
      },
      value: "\n",
    },
  ],
};
