export default {
  children: [
    {
      attributes: [
        {
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
              column: 14,
              line: 1,
            },
            start: {
              column: 5,
              line: 1,
            },
          },
          range: [5, 14],
          type: "Attribute",
        },
      ],
      children: [],
      close: {
        loc: {
          end: {
            column: 21,
            line: 1,
          },
          start: {
            column: 15,
            line: 1,
          },
        },
        range: [15, 21],
        type: "CloseTag",
        value: "</div>",
      },
      loc: {
        end: {
          column: 21,
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
            column: 15,
            line: 1,
          },
          start: {
            column: 14,
            line: 1,
          },
        },
        range: [14, 15],
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
      range: [0, 21],
      selfClosing: false,
      type: "Tag",
    },
  ],
  loc: {
    end: {
      column: 21,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 21],
  type: "Document",
};
