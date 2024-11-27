export default {
  children: [
    {
      attributes: [
        {
          endWrapper: {
            loc: {
              end: {
                column: 22,
                line: 1,
              },
              start: {
                column: 21,
                line: 1,
              },
            },
            range: [21, 22],
            type: "AttributeValueWrapperEnd",
            value: '"',
          },
          key: {
            isTemplate: true,
            loc: {
              end: {
                column: 14,
                line: 1,
              },
              start: {
                column: 5,
                line: 1,
              },
            },
            range: [5, 14],
            type: "AttributeKey",
            value: "${ attr }",
          },
          loc: {
            end: {
              column: 22,
              line: 1,
            },
            start: {
              column: 5,
              line: 1,
            },
          },
          range: [5, 22],
          startWrapper: {
            loc: {
              end: {
                column: 16,
                line: 1,
              },
              start: {
                column: 15,
                line: 1,
              },
            },
            range: [15, 16],
            type: "AttributeValueWrapperStart",
            value: '"',
          },
          type: "Attribute",
          value: {
            isTemplate: false,
            loc: {
              end: {
                column: 21,
                line: 1,
              },
              start: {
                column: 16,
                line: 1,
              },
            },
            range: [16, 21],
            type: "AttributeValue",
            value: "value",
          },
        },
      ],
      children: [],
      close: {
        loc: {
          end: {
            column: 29,
            line: 1,
          },
          start: {
            column: 23,
            line: 1,
          },
        },
        range: [23, 29],
        type: "CloseTag",
        value: "</div>",
      },
      loc: {
        end: {
          column: 29,
          line: 1,
        },
        start: {
          column: 0,
          line: 1,
        },
      },
      name: "div",
      openEnd: {
        loc: {
          end: {
            column: 23,
            line: 1,
          },
          start: {
            column: 22,
            line: 1,
          },
        },
        range: [22, 23],
        type: "OpenTagEnd",
        value: ">",
      },
      openStart: {
        loc: {
          end: {
            column: 4,
            line: 1,
          },
          start: {
            column: 0,
            line: 1,
          },
        },
        range: [0, 4],
        type: "OpenTagStart",
        value: "<div",
      },
      range: [0, 29],
      selfClosing: false,
      type: "Tag",
    },
  ],
  loc: {
    end: {
      column: 29,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 29],
  type: "Document",
};
