export default {
  type: "Document",
  range: [0, 88],
  children: [
    {
      type: "Tag",
      range: [0, 87],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 7,
          column: 13,
        },
      },
      attributes: [],
      children: [
        {
          type: "Text",
          isTemplate: false,
          value: "\n  some text\n\n  ",
          loc: {
            start: {
              line: 1,
              column: 12,
            },
            end: {
              line: 4,
              column: 2,
            },
          },
          range: [12, 28],
        },
        {
          type: "Tag",
          range: [28, 73],
          loc: {
            start: {
              line: 4,
              column: 2,
            },
            end: {
              line: 6,
              column: 15,
            },
          },
          attributes: [],
          children: [
            {
              type: "Text",
              isTemplate: false,
              value: "\n    another text\n  ",
              loc: {
                start: {
                  line: 4,
                  column: 14,
                },
                end: {
                  line: 6,
                  column: 2,
                },
              },
              range: [40, 60],
            },
          ],
          openStart: {
            type: "OpenTagStart",
            value: "<custom-two",
            loc: {
              start: {
                line: 4,
                column: 2,
              },
              end: {
                line: 4,
                column: 13,
              },
            },
            range: [28, 39],
          },
          name: "custom-two",
          openEnd: {
            type: "OpenTagEnd",
            value: ">",
            loc: {
              start: {
                line: 4,
                column: 13,
              },
              end: {
                line: 4,
                column: 14,
              },
            },
            range: [39, 40],
          },
          selfClosing: false,
          close: {
            type: "CloseTag",
            value: "</custom-two>",
            loc: {
              start: {
                line: 6,
                column: 2,
              },
              end: {
                line: 6,
                column: 15,
              },
            },
            range: [60, 73],
          },
        },
        {
          type: "Text",
          isTemplate: false,
          value: "\n",
          loc: {
            start: {
              line: 6,
              column: 15,
            },
            end: {
              line: 7,
              column: 0,
            },
          },
          range: [73, 74],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<custom-one",
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 11,
          },
        },
        range: [0, 11],
      },
      name: "custom-one",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 1,
            column: 11,
          },
          end: {
            line: 1,
            column: 12,
          },
        },
        range: [11, 12],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</custom-one>",
        loc: {
          start: {
            line: 7,
            column: 0,
          },
          end: {
            line: 7,
            column: 13,
          },
        },
        range: [74, 87],
      },
    },
    {
      type: "Text",
      isTemplate: false,
      value: "\n",
      loc: {
        start: {
          line: 7,
          column: 13,
        },
        end: {
          line: 8,
          column: 0,
        },
      },
      range: [87, 88],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 8,
      column: 0,
    },
  },
};
