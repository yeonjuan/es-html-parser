export default {
  children: [
    {
      attributes: [
        {
          endWrapper: {
            loc: {
              end: {
                column: 15,
                line: 1,
              },
              start: {
                column: 14,
                line: 1,
              },
            },
            range: [14, 15],
            type: "AttributeValueWrapperEnd",
            value: '"',
          },
          key: {
            isTemplate: false,
            loc: {
              end: {
                column: 7,
                line: 1,
              },
              start: {
                column: 5,
                line: 1,
              },
            },
            range: [5, 7],
            type: "AttributeKey",
            value: "id",
          },
          loc: {
            end: {
              column: 15,
              line: 1,
            },
            start: {
              column: 5,
              line: 1,
            },
          },
          range: [5, 15],
          startWrapper: {
            loc: {
              end: {
                column: 9,
                line: 1,
              },
              start: {
                column: 8,
                line: 1,
              },
            },
            range: [8, 9],
            type: "AttributeValueWrapperStart",
            value: '"',
          },
          type: "Attribute",
          value: {
            isTemplate: true,
            loc: {
              end: {
                column: 14,
                line: 1,
              },
              start: {
                column: 9,
                line: 1,
              },
            },
            range: [9, 14],
            type: "AttributeValue",
            value: "${id}",
          },
        },
      ],
      children: [],
      close: {
        loc: {
          end: {
            column: 22,
            line: 1,
          },
          start: {
            column: 16,
            line: 1,
          },
        },
        range: [16, 22],
        type: "CloseTag",
        value: "</div>",
      },
      loc: {
        end: {
          column: 22,
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
            column: 16,
            line: 1,
          },
          start: {
            column: 15,
            line: 1,
          },
        },
        range: [15, 16],
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
      range: [0, 22],
      selfClosing: false,
      type: "Tag",
    },
  ],
  loc: {
    end: {
      column: 22,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 22],
  type: "Document",
};
