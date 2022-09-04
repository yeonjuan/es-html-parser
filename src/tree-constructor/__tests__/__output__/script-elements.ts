import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 84],
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
      type: NodeTypes.Text,
      range: [0, 14],
      value: "opening text\n\n",
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 3,
        },
      },
    },
    {
      type: NodeTypes.Tag,
      attributes: [],
      name: "div",
      selfClosing: false,
      range: [14, 69],
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 7,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<div",
        range: [14, 18],
        loc: {
          start: {
            line: 3,
          },
          end: {
            line: 3,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [18, 19],
        loc: {
          start: {
            line: 3,
          },
          end: {
            line: 3,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTag,
        value: "</div>",
        range: [63, 69],
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
          value: "\n  ",
          range: [19, 22],
          loc: {
            start: {
              line: 3,
            },
            end: {
              line: 4,
            },
          },
        },
        {
          type: NodeTypes.ScriptTag,
          attributes: [],
          value: {
            type: NodeTypes.ScriptTagContent,
            value: "\n    console.log('')\n  ",
            range: [30, 53],
            loc: {
              start: {
                line: 4,
              },
              end: {
                line: 6,
              },
            },
          },
          range: [22, 62],
          loc: {
            start: {
              line: 4,
            },
            end: {
              line: 6,
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStartScript,
            value: "<script",
            range: [22, 29],
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
            range: [29, 30],
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
            range: [53, 62],
            loc: {
              start: {
                line: 6,
              },
              end: {
                line: 6,
              },
            },
          },
        },
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [62, 63],
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
      value: "\n\nclosing text\n",
      range: [69, 84],
      loc: {
        start: {
          line: 7,
        },
        end: {
          line: 10,
        },
      },
    },
  ],
};
