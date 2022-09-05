import { NodeTypes } from "../../../constants";

export default {
  type: "Document",
  range: [0, 84],
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
      type: "Tag",
      range: [14, 69],
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 7,
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
              line: 3,
              column: 5,
            },
            end: {
              line: 4,
              column: 2,
            },
          },
          range: [19, 22],
        },
        {
          type: "ScriptTag",
          range: [22, 62],
          loc: {
            start: {
              line: 4,
              column: 2,
            },
            end: {
              line: 6,
              column: 11,
            },
          },
          attributes: [],
          openStart: {
            type: "OpenTagStartScript",
            value: "<script",
            loc: {
              start: {
                line: 4,
                column: 2,
              },
              end: {
                line: 4,
                column: 9,
              },
            },
            range: [22, 29],
          },
          openEnd: {
            type: "OpenTagEndScript",
            value: ">",
            loc: {
              start: {
                line: 4,
                column: 9,
              },
              end: {
                line: 4,
                column: 10,
              },
            },
            range: [29, 30],
          },
          value: {
            type: "ScriptTagContent",
            value: "\n    console.log('')\n  ",
            loc: {
              start: {
                line: 4,
                column: 10,
              },
              end: {
                line: 6,
                column: 2,
              },
            },
            range: [30, 53],
          },
          close: {
            type: "CloseTagScript",
            value: "</script>",
            loc: {
              start: {
                line: 6,
                column: 2,
              },
              end: {
                line: 6,
                column: 11,
              },
            },
            range: [53, 62],
          },
        },
        {
          type: "Text",
          value: "\n",
          loc: {
            start: {
              line: 6,
              column: 11,
            },
            end: {
              line: 7,
              column: 0,
            },
          },
          range: [62, 63],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<div",
        loc: {
          start: {
            line: 3,
            column: 0,
          },
          end: {
            line: 3,
            column: 4,
          },
        },
        range: [14, 18],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 3,
            column: 4,
          },
          end: {
            line: 3,
            column: 5,
          },
        },
        range: [18, 19],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: {
          start: {
            line: 7,
            column: 0,
          },
          end: {
            line: 7,
            column: 6,
          },
        },
        range: [63, 69],
      },
    },
    {
      type: "Text",
      value: "\n\nclosing text\n",
      loc: {
        start: {
          line: 7,
          column: 6,
        },
        end: {
          line: 10,
          column: 0,
        },
      },
      range: [69, 84],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 6,
    },
    end: {
      line: 10,
      column: 0,
    },
  },
};
