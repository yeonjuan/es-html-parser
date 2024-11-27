export default {
  children: [
    {
      attributes: [
        {
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
              column: 13,
              line: 1,
            },
            start: {
              column: 5,
              line: 1,
            },
          },
          range: [5, 13],
          type: "Attribute",
          value: {
            isTemplate: true,
            loc: {
              end: {
                column: 13,
                line: 1,
              },
              start: {
                column: 8,
                line: 1,
              },
            },
            range: [8, 13],
            type: "AttributeValue",
            value: "${id}",
          },
        },
      ],
      children: [],
      close: {
        loc: {
          end: {
            column: 20,
            line: 1,
          },
          start: {
            column: 14,
            line: 1,
          },
        },
        range: [14, 20],
        type: "CloseTag",
        value: "</div>",
      },
      loc: {
        end: {
          column: 20,
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
            column: 14,
            line: 1,
          },
          start: {
            column: 13,
            line: 1,
          },
        },
        range: [13, 14],
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
      range: [0, 20],
      selfClosing: false,
      type: "Tag",
    },
  ],
  loc: {
    end: {
      column: 20,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 20],
  type: "Document",
};
