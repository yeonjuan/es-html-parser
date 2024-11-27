export default {
  children: [
    {
      attributes: [],
      children: [
        {
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
          type: "Text",
          value: "  ",
        },
        {
          isTemplate: true,
          loc: {
            end: {
              column: 17,
              line: 1,
            },
            start: {
              column: 7,
              line: 1,
            },
          },
          range: [7, 17],
          type: "Text",
          value: "${ data  }",
        },
        {
          isTemplate: false,
          loc: {
            end: {
              column: 23,
              line: 1,
            },
            start: {
              column: 17,
              line: 1,
            },
          },
          range: [17, 23],
          type: "Text",
          value: " text ",
        },
      ],
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
            column: 5,
            line: 1,
          },
          start: {
            column: 4,
            line: 1,
          },
        },
        range: [4, 5],
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
