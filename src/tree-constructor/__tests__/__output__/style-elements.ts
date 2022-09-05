import { NodeTypes } from "../../../constants";

export default {
  type: "Document",
  range: [0, 168],
  children: [
    {
      type: "Text",
      value: "opening text\n\n",
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 3,
          column: 0,
        },
      },
      range: [0, 14],
    },
    {
      type: "StyleTag",
      range: [14, 72],
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          column: 8,
          line: 7,
        },
      },
      attributes: [],
      openStart: {
        type: "OpenTagStartStyle",
        value: "<style",
        loc: {
          start: {
            line: 3,
            column: 0,
          },
          end: {
            line: 3,
            column: 6,
          },
        },
        range: [14, 20],
      },
      openEnd: {
        type: "OpenTagEndStyle",
        value: ">",
        loc: {
          start: {
            line: 3,
            column: 6,
          },
          end: {
            line: 3,
            column: 7,
          },
        },
        range: [20, 21],
      },
      value: {
        type: "StyleTagContent",
        value: "\n  body {\n    background-color: white;\n  }\n",
        loc: {
          start: {
            line: 3,
            column: 7,
          },
          end: {
            line: 7,
            column: 0,
          },
        },
        range: [21, 64],
      },
      close: {
        type: "CloseTagStyle",
        value: "</style>",
        loc: {
          start: {
            line: 7,
            column: 0,
          },
          end: {
            line: 7,
            column: 8,
          },
        },
        range: [64, 72],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: {
        start: {
          line: 7,
          column: 8,
        },
        end: {
          line: 9,
          column: 0,
        },
      },
      range: [72, 74],
    },
    {
      type: "Tag",
      range: [74, 153],
      loc: {
        start: {
          line: 9,
          column: 0,
        },
        end: {
          line: 15,
          column: 6,
        },
      },
      attributes: [],
      children: [
        {
          type: "Text",
          value: "\n  ",
          loc: {
            start: {
              line: 9,
              column: 5,
            },
            end: {
              line: 10,
              column: 2,
            },
          },
          range: [79, 82],
        },
        {
          type: "StyleTag",
          range: [82, 146],
          loc: {
            start: {
              line: 10,
              column: 2,
            },
            end: {
              line: 14,
              column: 10,
            },
          },
          attributes: [],
          openStart: {
            type: "OpenTagStartStyle",
            value: "<style",
            loc: {
              start: {
                line: 10,
                column: 2,
              },
              end: {
                line: 10,
                column: 8,
              },
            },
            range: [82, 88],
          },
          openEnd: {
            type: "OpenTagEndStyle",
            value: ">",
            loc: {
              start: {
                line: 10,
                column: 8,
              },
              end: {
                line: 10,
                column: 9,
              },
            },
            range: [88, 89],
          },
          value: {
            type: "StyleTagContent",
            value: "\n    body {\n      background-color: red;\n    }\n  ",
            loc: {
              start: {
                line: 10,
                column: 9,
              },
              end: {
                line: 14,
                column: 2,
              },
            },
            range: [89, 138],
          },
          close: {
            type: "CloseTagStyle",
            value: "</style>",
            loc: {
              start: {
                line: 14,
                column: 2,
              },
              end: {
                line: 14,
                column: 10,
              },
            },
            range: [138, 146],
          },
        },
        {
          type: "Text",
          value: "\n",
          loc: {
            start: {
              line: 14,
              column: 10,
            },
            end: {
              line: 15,
              column: 0,
            },
          },
          range: [146, 147],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<div",
        loc: {
          start: {
            line: 9,
            column: 0,
          },
          end: {
            line: 9,
            column: 4,
          },
        },
        range: [74, 78],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 9,
            column: 4,
          },
          end: {
            line: 9,
            column: 5,
          },
        },
        range: [78, 79],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: {
          start: {
            line: 15,
            column: 0,
          },
          end: {
            line: 15,
            column: 6,
          },
        },
        range: [147, 153],
      },
    },
    {
      type: "Text",
      value: "\n\nclosing text\n",
      loc: {
        start: {
          line: 15,
          column: 6,
        },
        end: {
          line: 18,
          column: 0,
        },
      },
      range: [153, 168],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 6,
    },
    end: {
      line: 18,
      column: 0,
    },
  },
};
