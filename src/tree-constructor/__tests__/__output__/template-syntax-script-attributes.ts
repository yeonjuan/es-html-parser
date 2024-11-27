export default {
  children: [
    {
      attributes: [
        {
          key: {
            isTemplate: true,
            loc: {
              end: {
                column: 15,
                line: 1,
              },
              start: {
                column: 8,
                line: 1,
              },
            },
            range: [8, 15],
            type: "AttributeKey",
            value: "${type}",
          },
          loc: {
            end: {
              column: 15,
              line: 1,
            },
            start: {
              column: 8,
              line: 1,
            },
          },
          range: [8, 15],
          type: "Attribute",
        },
      ],
      children: [],
      close: {
        loc: {
          end: {
            column: 25,
            line: 1,
          },
          start: {
            column: 16,
            line: 1,
          },
        },
        range: [16, 25],
        type: "CloseScriptTag",
        value: "</script>",
      },
      loc: {
        end: {
          column: 25,
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
            column: 16,
            line: 1,
          },
          start: {
            column: 15,
            line: 1,
          },
        },
        range: [15, 16],
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
      range: [0, 25],
      type: "ScriptTag",
    },
  ],
  loc: {
    end: {
      column: 25,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 25],
  type: "Document",
};
