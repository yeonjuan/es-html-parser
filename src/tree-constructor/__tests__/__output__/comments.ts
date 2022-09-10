export default {
  type: "Document",
  range: [0, 175],
  children: [
    {
      type: "Comment",
      range: [0, 21],
      loc: {
        start: {
          line: 1,
          column: 0,
        },
        end: {
          line: 1,
          column: 21,
        },
      },
      open: {
        type: "CommentStart",
        value: "<!--",
        loc: {
          start: {
            line: 1,
            column: 0,
          },
          end: {
            line: 1,
            column: 4,
          },
        },
        range: [0, 4],
      },
      value: {
        type: "CommentContent",
        value: " some comment ",
        loc: {
          start: {
            line: 1,
            column: 4,
          },
          end: {
            line: 1,
            column: 18,
          },
        },
        range: [4, 18],
      },
      close: {
        type: "CommentEnd",
        value: "-->",
        loc: {
          start: {
            line: 1,
            column: 18,
          },
          end: {
            line: 1,
            column: 21,
          },
        },
        range: [18, 21],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: {
        start: {
          line: 1,
          column: 21,
        },
        end: {
          line: 3,
          column: 0,
        },
      },
      range: [21, 23],
    },
    {
      type: "Tag",
      range: [23, 108],
      loc: {
        start: {
          line: 3,
          column: 0,
        },
        end: {
          line: 14,
          column: 6,
        },
      },
      attributes: [],
      children: [
        {
          type: "Text",
          value: "\n  ",
          loc: {
            start: {
              line: 3,
              column: 5,
            },
            end: {
              line: 4,
              column: 2,
            },
          },
          range: [28, 31],
        },
        {
          type: "Tag",
          range: [31, 70],
          loc: {
            start: {
              line: 4,
              column: 2,
            },
            end: {
              line: 6,
              column: 9,
            },
          },
          attributes: [],
          children: [
            {
              type: "Text",
              value: "\n    ",
              loc: {
                start: {
                  line: 4,
                  column: 8,
                },
                end: {
                  line: 5,
                  column: 4,
                },
              },
              range: [37, 42],
            },
            {
              type: "Comment",
              range: [42, 60],
              loc: {
                start: {
                  line: 5,
                  column: 4,
                },
                end: {
                  line: 5,
                  column: 22,
                },
              },
              open: {
                type: "CommentStart",
                value: "<!--",
                loc: {
                  start: {
                    line: 5,
                    column: 4,
                  },
                  end: {
                    line: 5,
                    column: 8,
                  },
                },
                range: [42, 46],
              },
              value: {
                type: "CommentContent",
                value: "another-one",
                loc: {
                  start: {
                    line: 5,
                    column: 8,
                  },
                  end: {
                    line: 5,
                    column: 19,
                  },
                },
                range: [46, 57],
              },
              close: {
                type: "CommentEnd",
                value: "-->",
                loc: {
                  start: {
                    line: 5,
                    column: 19,
                  },
                  end: {
                    line: 5,
                    column: 22,
                  },
                },
                range: [57, 60],
              },
            },
            {
              type: "Text",
              value: "\n  ",
              loc: {
                start: {
                  line: 5,
                  column: 22,
                },
                end: {
                  line: 6,
                  column: 2,
                },
              },
              range: [60, 63],
            },
          ],
          openStart: {
            type: "OpenTagStart",
            value: "<span",
            loc: {
              start: {
                line: 4,
                column: 2,
              },
              end: {
                line: 4,
                column: 7,
              },
            },
            range: [31, 36],
          },
          name: "span",
          openEnd: {
            type: "OpenTagEnd",
            value: ">",
            loc: {
              start: {
                line: 4,
                column: 7,
              },
              end: {
                line: 4,
                column: 8,
              },
            },
            range: [36, 37],
          },
          selfClosing: false,
          close: {
            type: "CloseTag",
            value: "</span>",
            loc: {
              start: {
                line: 6,
                column: 2,
              },
              end: {
                line: 6,
                column: 9,
              },
            },
            range: [63, 70],
          },
        },
        {
          type: "Text",
          value: "\n\n  ",
          loc: {
            start: {
              line: 6,
              column: 9,
            },
            end: {
              line: 8,
              column: 2,
            },
          },
          range: [70, 74],
        },
        {
          type: "Comment",
          range: [74, 101],
          loc: {
            start: {
              line: 8,
              column: 2,
            },
            end: {
              line: 13,
              column: 5,
            },
          },
          open: {
            type: "CommentStart",
            value: "<!--",
            loc: {
              start: {
                line: 8,
                column: 2,
              },
              end: {
                line: 8,
                column: 6,
              },
            },
            range: [74, 78],
          },
          value: {
            type: "CommentContent",
            value: "\n\n  multi\n\n  line\n  ",
            loc: {
              start: {
                line: 8,
                column: 6,
              },
              end: {
                line: 13,
                column: 2,
              },
            },
            range: [78, 98],
          },
          close: {
            type: "CommentEnd",
            value: "-->",
            loc: {
              start: {
                line: 13,
                column: 2,
              },
              end: {
                line: 13,
                column: 5,
              },
            },
            range: [98, 101],
          },
        },
        {
          type: "Text",
          value: "\n",
          loc: {
            start: {
              line: 13,
              column: 5,
            },
            end: {
              line: 14,
              column: 0,
            },
          },
          range: [101, 102],
        },
      ],
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
        range: [23, 27],
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
        range: [27, 28],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: {
          start: {
            line: 14,
            column: 0,
          },
          end: {
            line: 14,
            column: 6,
          },
        },
        range: [102, 108],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: {
        start: {
          line: 14,
          column: 6,
        },
        end: {
          line: 16,
          column: 0,
        },
      },
      range: [108, 110],
    },
    {
      type: "Comment",
      range: [110, 135],
      loc: {
        start: {
          line: 16,
          column: 0,
        },
        end: {
          line: 18,
          column: 11,
        },
      },
      open: {
        type: "CommentStart",
        value: "<!--",
        loc: {
          start: {
            line: 16,
            column: 0,
          },
          end: {
            line: 16,
            column: 4,
          },
        },
        range: [110, 114],
      },
      value: {
        type: "CommentContent",
        value: " closing\n\ncomment ",
        loc: {
          start: {
            line: 16,
            column: 4,
          },
          end: {
            line: 18,
            column: 8,
          },
        },
        range: [114, 132],
      },
      close: {
        type: "CommentEnd",
        value: "-->",
        loc: {
          start: {
            line: 18,
            column: 8,
          },
          end: {
            line: 18,
            column: 11,
          },
        },
        range: [132, 135],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: {
        start: {
          line: 18,
          column: 11,
        },
        end: {
          line: 20,
          column: 0,
        },
      },
      range: [135, 137],
    },
    {
      type: "Comment",
      range: [137, 174],
      loc: {
        start: {
          line: 20,
          column: 0,
        },
        end: {
          line: 20,
          column: 37,
        },
      },
      open: {
        type: "CommentStart",
        value: "<!--",
        loc: {
          start: {
            line: 20,
            column: 0,
          },
          end: {
            line: 20,
            column: 4,
          },
        },
        range: [137, 141],
      },
      value: {
        type: "CommentContent",
        value: "         spaces here          ",
        loc: {
          start: {
            line: 20,
            column: 4,
          },
          end: {
            line: 20,
            column: 34,
          },
        },
        range: [141, 171],
      },
      close: {
        type: "CommentEnd",
        value: "-->",
        loc: {
          start: {
            line: 20,
            column: 34,
          },
          end: {
            line: 20,
            column: 37,
          },
        },
        range: [171, 174],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: {
        start: {
          line: 20,
          column: 37,
        },
        end: {
          line: 21,
          column: 0,
        },
      },
      range: [174, 175],
    },
  ],
  loc: {
    start: {
      line: 1,
      column: 0,
    },
    end: {
      line: 21,
      column: 0,
    },
  },
};
