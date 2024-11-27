export default {
  type: "Document",
  range: [0, 52],
  children: [
    {
      type: "Tag",
      range: [0, 50],
      loc: { start: { line: 1, column: 0 }, end: { line: 6, column: 6 } },
      attributes: [
        {
          type: "Attribute",
          range: [8, 16],
          loc: { start: { line: 2, column: 2 }, end: { line: 2, column: 10 } },
          key: {
            type: "AttributeKey",
            isTemplate: false,
            value: "id",
            loc: { start: { line: 2, column: 2 }, end: { line: 2, column: 4 } },
            range: [8, 10],
          },
          startWrapper: {
            type: "AttributeValueWrapperStart",
            value: '"',
            loc: { start: { line: 2, column: 5 }, end: { line: 2, column: 6 } },
            range: [11, 12],
          },
          value: {
            type: "AttributeValue",
            isTemplate: false,
            value: "foo",
            loc: { start: { line: 2, column: 6 }, end: { line: 2, column: 9 } },
            range: [12, 15],
          },
          endWrapper: {
            type: "AttributeValueWrapperEnd",
            value: '"',
            loc: {
              start: { line: 2, column: 9 },
              end: { line: 2, column: 10 },
            },
            range: [15, 16],
          },
        },
        {
          type: "Attribute",
          range: [20, 31],
          loc: { start: { line: 3, column: 2 }, end: { line: 3, column: 13 } },
          key: {
            type: "AttributeKey",
            isTemplate: false,
            value: "style",
            loc: { start: { line: 3, column: 2 }, end: { line: 3, column: 7 } },
            range: [20, 25],
          },
          startWrapper: {
            type: "AttributeValueWrapperStart",
            value: '"',
            loc: { start: { line: 3, column: 8 }, end: { line: 3, column: 9 } },
            range: [26, 27],
          },
          value: {
            type: "AttributeValue",
            isTemplate: false,
            value: "bar",
            loc: {
              start: { line: 3, column: 9 },
              end: { line: 3, column: 12 },
            },
            range: [27, 30],
          },
          endWrapper: {
            type: "AttributeValueWrapperEnd",
            value: '"',
            loc: {
              start: { line: 3, column: 12 },
              end: { line: 3, column: 13 },
            },
            range: [30, 31],
          },
        },
        {
          type: "Attribute",
          range: [35, 39],
          loc: { start: { line: 4, column: 2 }, end: { line: 4, column: 6 } },
          key: {
            type: "AttributeKey",
            isTemplate: false,
            value: "bool",
            loc: { start: { line: 4, column: 2 }, end: { line: 4, column: 6 } },
            range: [35, 39],
          },
        },
      ],
      children: [
        {
          type: "Text",
          isTemplate: false,
          value: "\r\n",
          loc: { start: { line: 5, column: 1 }, end: { line: 6, column: 0 } },
          range: [42, 44],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<div",
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 4 } },
        range: [0, 4],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 1 } },
        range: [41, 42],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: { start: { line: 6, column: 0 }, end: { line: 6, column: 6 } },
        range: [44, 50],
      },
    },
    {
      type: "Text",
      isTemplate: false,
      value: "\r\n",
      loc: { start: { line: 6, column: 6 }, end: { line: 7, column: 0 } },
      range: [50, 52],
    },
  ],
  loc: { start: { line: 1, column: 0 }, end: { line: 7, column: 0 } },
};
