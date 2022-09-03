import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 168],
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
      type: NodeTypes.Text,
      value: "opening text\n\n",
      range: [0, 14],
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
      type: NodeTypes.StyleTag,
      range: [14, 72],
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 7,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartStyle,
        value: "<style",
        range: [14, 20],
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
        type: NodeTypes.OpenTagEndStyle,
        value: ">",
        range: [20, 21],
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
        type: NodeTypes.CloseTagStyle,
        value: "</style>",
        range: [64, 72],
        loc: {
          start: {
            line: 7,
          },
          end: {
            line: 7,
          },
        },
      },
      value: {
        type: NodeTypes.StyleTagContent,
        value: "\n  body {\n    background-color: white;\n  }\n",
        range: [21, 64],
        loc: {
          start: {
            line: 3,
          },
          end: {
            line: 7,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [72, 74],
      loc: {
        start: {
          line: 7,
        },
        end: {
          line: 9,
        },
      },
    },
    {
      type: NodeTypes.Tag,
      name: "div",
      selfClosing: false,
      range: [74, 153],
      loc: {
        start: {
          line: 9,
        },
        end: {
          line: 15,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<div",
        range: [74, 78],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [78, 79],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTag,
        value: "</div>",
        range: [147, 153],
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
          value: "\n  ",
          range: [79, 82],
          loc: {
            start: {
              line: 9,
            },
            end: {
              line: 10,
            },
          },
        },
        {
          type: NodeTypes.StyleTag,
          range: [82, 146],
          loc: {
            start: {
              line: 10,
            },
            end: {
              line: 14,
            },
          },
          close: {
            type: NodeTypes.CloseTagStyle,
            value: "</style>",
            range: [138, 146],
            loc: {
              start: {
                line: 14,
              },
              end: {
                line: 14,
              },
            },
          },
          openStart: {
            type: NodeTypes.OpenTagStartStyle,
            value: "<style",
            range: [82, 88],
            loc: {
              start: {
                line: 10,
              },
              end: {
                line: 10,
              },
            },
          },
          openEnd: {
            type: NodeTypes.OpenTagEndStyle,
            value: ">",
            range: [88, 89],
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
            type: NodeTypes.StyleTagContent,
            value: "\n    body {\n      background-color: red;\n    }\n  ",
            range: [89, 138],
            loc: {
              start: {
                line: 10,
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
          range: [146, 147],
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
      value: "\n\nclosing text\n",
      range: [153, 168],
      loc: {
        start: {
          line: 15,
        },
        end: {
          line: 18,
        },
      },
    },
  ],
};
