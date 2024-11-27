export default {
  type: "Document",
  range: [0, 23],
  children: [
    {
      type: "Tag",
      range: [0, 23],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 23,
        },
      },
      name: "a",
      children: [],
      openStart: {
        type: "OpenTagStart",
        value: "<a",
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 2,
          },
        },
        range: [0, 2],
      },
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 1,
            column: 18,
          },
          end: {
            line: 1,
            column: 19,
          },
        },
        range: [18, 19],
      },
      selfClosing: false,
      attributes: [
        {
          type: "Attribute",
          loc: {
            start: { line: 1, column: 3 },
            end: { line: 1, column: 18 },
          },
          range: [3, 18],
          key: {
            type: "AttributeKey",
            value: "target",
            loc: {
              start: { line: 1, column: 3 },
              end: { line: 1, column: 9 },
            },
            range: [3, 9],
          },
          value: {
            type: "AttributeValue",
            value: "”_blank”",
            loc: {
              start: { line: 1, column: 10 },
              end: { line: 1, column: 18 },
            },
            range: [10, 18],
          },
        },
      ],
      close: {
        type: "CloseTag",
        value: "</a>",
        loc: {
          start: { line: 1, column: 19 },
          end: { line: 1, column: 23 },
        },
        range: [19, 23],
      },
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 1,
      column: 23,
    },
  },
};
