export default {
  children: [
    {
      children: [
        {
          isTemplate: true,
          loc: {
            end: {
              column: 14,
              line: 1,
            },
            start: {
              column: 4,
              line: 1,
            },
          },
          range: [4, 14],
          type: "CommentContent",
          value: "${comment}",
        },
      ],
      close: {
        loc: {
          end: {
            column: 17,
            line: 1,
          },
          start: {
            column: 14,
            line: 1,
          },
        },
        range: [14, 17],
        type: "CommentClose",
        value: "-->",
      },
      loc: {
        end: {
          column: 17,
          line: 1,
        },
        start: {
          column: 0,
          line: 1,
        },
      },
      open: {
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
        type: "CommentOpen",
        value: "<!--",
      },
      range: [0, 17],
      type: "Comment",
    },
  ],
  loc: {
    end: {
      column: 17,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 17],
  type: "Document",
};
