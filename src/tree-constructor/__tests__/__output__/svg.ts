export default {
  children: [
    {
      attributes: [
        {
          endWrapper: {
            loc: {
              end: {
                column: 39,
                line: 1,
              },
              start: {
                column: 38,
                line: 1,
              },
            },
            range: [38, 39],
            type: "AttributeValueWrapperEnd",
            value: '"',
          },
          key: {
            loc: {
              end: {
                column: 10,
                line: 1,
              },
              start: {
                column: 5,
                line: 1,
              },
            },
            range: [5, 10],
            type: "AttributeKey",
            value: "xmlns",
          },
          loc: {
            end: {
              column: 39,
              line: 1,
            },
            start: {
              column: 5,
              line: 1,
            },
          },
          range: [5, 39],
          startWrapper: {
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
            type: "AttributeValueWrapperStart",
            value: '"',
          },
          type: "Attribute",
          value: {
            loc: {
              end: {
                column: 38,
                line: 1,
              },
              start: {
                column: 12,
                line: 1,
              },
            },
            range: [12, 38],
            type: "AttributeValue",
            value: "http://www.w3.org/2000/svg",
          },
        },
      ],
      children: [
        {
          attributes: [],
          children: [],
          loc: {
            end: {
              column: 50,
              line: 1,
            },
            start: {
              column: 40,
              line: 1,
            },
          },
          name: "circle",
          openEnd: {
            loc: {
              end: {
                column: 50,
                line: 1,
              },
              start: {
                column: 48,
                line: 1,
              },
            },
            range: [48, 50],
            type: "OpenTagEnd",
            value: "/>",
          },
          openStart: {
            loc: {
              end: {
                column: 47,
                line: 1,
              },
              start: {
                column: 40,
                line: 1,
              },
            },
            range: [40, 47],
            type: "OpenTagStart",
            value: "<circle",
          },
          range: [40, 50],
          selfClosing: true,
          type: "Tag",
        },
      ],
      loc: {
        end: {
          column: 56,
          line: 1,
        },
        start: {
          column: 0,
          line: 1,
        },
      },
      name: "svg",
      openEnd: {
        loc: {
          end: {
            column: 40,
            line: 1,
          },
          start: {
            column: 39,
            line: 1,
          },
        },
        range: [39, 40],
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
        value: "<svg",
      },
      range: [0, 56],
      selfClosing: false,
      type: "Tag",
      close: {
        type: "CloseTag",
        range: [50, 56],
        value: "</svg>",
        loc: {
          start: {
            line: 1,
            column: 50,
          },
          end: {
            line: 1,
            column: 56,
          },
        },
      },
    },
  ],
  loc: {
    end: {
      column: 56,
      line: 1,
    },
    start: {
      column: 0,
      line: 1,
    },
  },
  range: [0, 56],
  type: "Document",
};
