export default {
  type: "Document",
  range: [0, 40],
  children: [
    {
      type: "Text",
      isTemplate: false,
      value: "opening text\n\n",
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 3,
          column: 0,
        },
      },
      range: [0, 14],
    },
    {
      type: "Tag",
      range: [14, 25],
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 3,
          column: 11,
        },
      },
      attributes: [],
      children: [],
      openStart: {
        type: "OpenTagStart",
        value: "<div",
        loc: {
          start: {
            line: 3,
            column: 0,
          },
          end: {
            line: 3,
            column: 4,
          },
        },
        range: [14, 18],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: {
          start: {
            line: 3,
            column: 4,
          },
          end: {
            line: 3,
            column: 5,
          },
        },
        range: [18, 19],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: {
          start: {
            line: 3,
            column: 5,
          },
          end: {
            line: 3,
            column: 11,
          },
        },
        range: [19, 25],
      },
    },
    {
      type: "Text",
      isTemplate: false,
      value: "\n\nclosing text\n",
      loc: {
        start: {
          line: 3,
          column: 11,
        },
        end: {
          line: 6,
          column: 0,
        },
      },
      range: [25, 40],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 6,
      column: 0,
    },
  },
};
