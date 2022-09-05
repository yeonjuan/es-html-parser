import { NodeTypes } from "../../../constants";

export default {
  type: "Document",
  range: [0, 100],
  children: [
    {
      type: "Tag",
      range: [0, 99],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 10,
          column: 7,
        },
      },
      attributes: [],
      children: [
        {
          type: "Text",
          value: "\n  some text\n\n  ",
          loc: {
            start: {
              line: 1,
              column: 7,
            },
            end: {
              line: 4,
              column: 2,
            },
          },
          range: [7, 23],
        },
        {
          type: "Tag",
          range: [23, 91],
          loc: {
            start: {
              line: 4,
              column: 2,
            },
            end: {
              line: 9,
              column: 19,
            },
          },
          attributes: [],
          children: [
            {
              type: "Text",
              value: "\n    custom element\n    text\n  ",
              loc: {
                start: {
                  line: 6,
                  column: 3,
                },
                end: {
                  line: 9,
                  column: 2,
                },
              },
              range: [43, 74],
            },
          ],
          openStart: {
            type: "OpenTagStart",
            value: "<custom-element",
            loc: {
              start: {
                line: 4,
                column: 2,
              },
              end: {
                line: 4,
                column: 17,
              },
            },
            range: [23, 38],
          },
          name: "custom-element",
          openEnd: {
            type: "OpenTagEnd",
            value: ">",
            loc: {
              start: {
                line: 6,
                column: 2,
              },
              end: {
                line: 6,
                column: 3,
              },
            },
            range: [42, 43],
          },
          selfClosing: false,
          close: {
            type: "CloseTag",
            value: "</custom-element>",
            loc: {
              start: {
                line: 9,
                column: 2,
              },
              end: {
                line: 9,
                column: 19,
              },
            },
            range: [74, 91],
          },
        },
        {
          type: "Text",
          value: "\n",
          loc: {
            start: {
              line: 9,
              column: 19,
            },
            end: {
              line: 10,
              column: 0,
            },
          },
          range: [91, 92],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<span",
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 5,
          },
        },
        range: [0, 5],
      },
      name: "span",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 1,
            column: 6,
          },
          end: {
            line: 1,
            column: 7,
          },
        },
        range: [6, 7],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</span>",
        loc: {
          start: {
            line: 10,
            column: 0,
          },
          end: {
            line: 10,
            column: 7,
          },
        },
        range: [92, 99],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: {
        start: {
          line: 10,
          column: 7,
        },
        end: {
          line: 11,
          column: 0,
        },
      },
      range: [99, 100],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 7,
    },
    end: {
      line: 11,
      column: 0,
    },
  },
};
