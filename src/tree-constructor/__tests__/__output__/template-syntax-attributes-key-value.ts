export default {
  children: [
    {
      attributes: [
        {
          key: {
            isTemplate: true,
            loc: {
              end: {
                column: 11,
                line: 1,
              },
              start: {
                column: 5,
                line: 1,
              },
            },
            range: [5, 11],
            type: "AttributeKey",
            value: "${key}",
          },
          loc: {
            end: {
              column: 20,
              line: 1,
            },
            start: {
              column: 5,
              line: 1,
            },
          },
          range: [5, 20],
          type: "Attribute",
          value: {
            isTemplate: true,
            loc: {
              end: {
                column: 20,
                line: 1,
              },
              start: {
                column: 12,
                line: 1,
              },
            },
            range: [12, 20],
            type: "AttributeValue",
            value: "${value}",
          },
        },
      ],
      children: [],
      close: {
        loc: {
          end: {
            column: 27,
            line: 1,
          },
          start: {
            column: 21,
            line: 1,
          },
        },
        range: [21, 27],
        type: "CloseTag",
        value: "</div>",
      },
      loc: {
        end: {
          column: 27,
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
            column: 21,
            line: 1,
          },
          start: {
            column: 20,
            line: 1,
          },
        },
        range: [20, 21],
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
      range: [0, 27],
      selfClosing: false,
      type: "Tag",
    },
  ],
  loc: {
    end: {
      column: 27,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 27],
  type: "Document",
};
