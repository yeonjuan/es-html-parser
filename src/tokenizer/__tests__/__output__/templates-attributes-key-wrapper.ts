export default [
  {
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
  {
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
    parts: [
      {
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
        type: "Template",
        value: "${key}",
        open: {
          type: "OpenTemplate",
          range: [5, 7],
          value: "${",
          loc: {
            start: {
              column: 5,
              line: 1,
            },
            end: {
              column: 7,
              line: 1,
            },
          },
        },
        close: {
          type: "CloseTemplate",
          value: "}",
          range: [10, 11],
          loc: {
            start: {
              line: 1,
              column: 10,
            },
            end: {
              line: 1,
              column: 11,
            },
          },
        },
        partOf: "AttributeKey",
      },
    ],
  },
  {
    loc: {
      end: {
        column: 12,
        line: 1,
      },
      start: {
        column: 11,
        line: 1,
      },
    },
    range: [11, 12],
    type: "OpenTagEnd",
    value: ">",
  },
  {
    loc: {
      end: {
        column: 18,
        line: 1,
      },
      start: {
        column: 12,
        line: 1,
      },
    },
    range: [12, 18],
    type: "CloseTag",
    value: "</div>",
  },
];
