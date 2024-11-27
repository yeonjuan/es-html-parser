export default {
  children: [
    {
      attributes: [],
      children: [
        {
          isTemplate: false,
          loc: {
            end: {
              column: 9,
              line: 1,
            },
            start: {
              column: 8,
              line: 1,
            },
          },
          range: [8, 9],
          type: "ScriptTagContent",
          value: " ",
        },
        {
          isTemplate: true,
          loc: {
            end: {
              column: 19,
              line: 1,
            },
            start: {
              column: 9,
              line: 1,
            },
          },
          range: [9, 19],
          type: "ScriptTagContent",
          value: "${content}",
        },
        {
          isTemplate: false,
          loc: {
            end: {
              column: 20,
              line: 1,
            },
            start: {
              column: 19,
              line: 1,
            },
          },
          range: [19, 20],
          type: "ScriptTagContent",
          value: " ",
        },
      ],
      close: {
        loc: {
          end: {
            column: 29,
            line: 1,
          },
          start: {
            column: 20,
            line: 1,
          },
        },
        range: [20, 29],
        type: "CloseScriptTag",
        value: "</script>",
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
      openEnd: {
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
        type: "OpenScriptTagEnd",
        value: ">",
      },
      openStart: {
        loc: {
          end: {
            column: 7,
            line: 1,
          },
          start: {
            column: 0,
            line: 1,
          },
        },
        range: [0, 7],
        type: "OpenScriptTagStart",
        value: "<script",
      },
      range: [0, 29],
      type: "ScriptTag",
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
