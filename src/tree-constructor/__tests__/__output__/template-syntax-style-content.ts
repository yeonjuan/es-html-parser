export default {
  children: [
    {
      attributes: [],
      children: [
        {
          isTemplate: false,
          loc: {
            end: {
              column: 8,
              line: 1,
            },
            start: {
              column: 7,
              line: 1,
            },
          },
          range: [7, 8],
          type: "StyleTagContent",
          value: " ",
        },
        {
          isTemplate: true,
          loc: {
            end: {
              column: 18,
              line: 1,
            },
            start: {
              column: 8,
              line: 1,
            },
          },
          range: [8, 18],
          type: "StyleTagContent",
          value: "${content}",
        },
        {
          isTemplate: false,
          loc: {
            end: {
              column: 19,
              line: 1,
            },
            start: {
              column: 18,
              line: 1,
            },
          },
          range: [18, 19],
          type: "StyleTagContent",
          value: " ",
        },
      ],
      close: {
        loc: {
          end: {
            column: 27,
            line: 1,
          },
          start: {
            column: 19,
            line: 1,
          },
        },
        range: [19, 27],
        type: "CloseStyleTag",
        value: "</style>",
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
      openEnd: {
        loc: {
          end: {
            column: 7,
            line: 1,
          },
          start: {
            column: 6,
            line: 1,
          },
        },
        range: [6, 7],
        type: "OpenStyleTagEnd",
        value: ">",
      },
      openStart: {
        loc: {
          end: {
            column: 6,
            line: 1,
          },
          start: {
            column: 0,
            line: 1,
          },
        },
        range: [0, 6],
        type: "OpenStyleTagStart",
        value: "<style",
      },
      range: [0, 27],
      type: "StyleTag",
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
