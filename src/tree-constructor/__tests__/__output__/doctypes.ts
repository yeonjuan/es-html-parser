import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 304],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 16,
    },
  },
  children: [
    {
      type: NodeTypes.Doctype,
      range: [0, 10],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 1,
        },
      },
      start: {
        type: NodeTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [0, 9],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
      end: {
        type: NodeTypes.DoctypeEnd,
        value: ">",
        range: [9, 10],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [10, 12],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 3,
        },
      },
    },
    {
      type: NodeTypes.Doctype,
      range: [12, 22],
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 3,
        },
      },
      start: {
        type: NodeTypes.DoctypeStart,
        value: "<!doctype",
        range: [12, 21],
        loc: {
          start: {
            line: 3,
          },
          end: {
            line: 3,
          },
        },
      },
      end: {
        type: NodeTypes.DoctypeEnd,
        value: ">",
        range: [21, 22],
        loc: {
          start: {
            line: 3,
          },
          end: {
            line: 3,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [22, 24],
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 5,
        },
      },
    },
    {
      type: NodeTypes.Doctype,
      range: [24, 66],
      loc: {
        start: {
          line: 5,
        },
        end: {
          line: 5,
        },
      },
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [34, 50],
          loc: {
            start: {
              line: 5,
            },
            end: {
              line: 5,
            },
          },
          startWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [34, 35],
            loc: {
              start: {
                line: 5,
              },
              end: {
                line: 5,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [49, 50],
            loc: {
              start: {
                line: 5,
              },
              end: {
                line: 5,
              },
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "some attribute",
            range: [35, 49],
            loc: {
              start: {
                line: 5,
              },
              end: {
                line: 5,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [51, 64],
          loc: {
            start: {
              line: 5,
            },
            end: {
              line: 5,
            },
          },
          startWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperStart,
            value: "'",
            range: [51, 52],
            loc: {
              start: {
                line: 5,
              },
              end: {
                line: 5,
              },
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "another-one",
            range: [52, 63],
            loc: {
              start: {
                line: 5,
              },
              end: {
                line: 5,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperEnd,
            value: "'",
            range: [63, 64],
            loc: {
              start: {
                line: 5,
              },
              end: {
                line: 5,
              },
            },
          },
        },
      ],
      start: {
        type: NodeTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [24, 33],
        loc: {
          start: {
            line: 5,
          },
          end: {
            line: 5,
          },
        },
      },
      end: {
        type: NodeTypes.DoctypeEnd,
        value: ">",
        range: [65, 66],
        loc: {
          start: {
            line: 5,
          },
          end: {
            line: 5,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [66, 68],
      loc: {
        start: {
          line: 5,
        },
        end: {
          line: 7,
        },
      },
    },
    {
      type: NodeTypes.Doctype,
      range: [68, 90],
      loc: {
        start: {
          line: 7,
        },
        end: {
          line: 7,
        },
      },
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [78, 82],
          loc: {
            start: {
              line: 7,
            },
            end: {
              line: 7,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "html",
            range: [78, 82],
            loc: {
              start: {
                line: 7,
              },
              end: {
                line: 7,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [83, 89],
          loc: {
            start: {
              line: 7,
            },
            end: {
              line: 7,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [83, 89],
            loc: {
              start: {
                line: 7,
              },
              end: {
                line: 7,
              },
            },
          },
        },
      ],
      start: {
        type: NodeTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [68, 77],
        loc: {
          start: {
            line: 7,
          },
          end: {
            line: 7,
          },
        },
      },
      end: {
        type: NodeTypes.DoctypeEnd,
        value: ">",
        range: [89, 90],
        loc: {
          start: {
            line: 7,
          },
          end: {
            line: 7,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [90, 92],
      loc: {
        start: {
          line: 7,
        },
        end: {
          line: 9,
        },
      },
    },
    {
      type: NodeTypes.Doctype,
      range: [92, 193],
      loc: {
        start: {
          line: 9,
        },
        end: {
          line: 9,
        },
      },
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [102, 106],
          loc: {
            start: {
              line: 9,
            },
            end: {
              line: 9,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "HTML",
            range: [102, 106],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [107, 113],
          loc: {
            start: {
              line: 9,
            },
            end: {
              line: 9,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [107, 113],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [114, 150],
          loc: {
            start: {
              line: 9,
            },
            end: {
              line: 9,
            },
          },
          startWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [114, 115],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [149, 150],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "-//W3C//DTD HTML 4.01 Frameset//EN",
            range: [115, 149],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [151, 192],
          loc: {
            start: {
              line: 9,
            },
            end: {
              line: 9,
            },
          },
          startWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [151, 152],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [191, 192],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "http://www.w3.org/TR/html4/frameset.dtd",
            range: [152, 191],
            loc: {
              start: {
                line: 9,
              },
              end: {
                line: 9,
              },
            },
          },
        },
      ],
      start: {
        type: NodeTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [92, 101],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
      end: {
        type: NodeTypes.DoctypeEnd,
        value: ">",
        range: [192, 193],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [193, 195],
      loc: {
        start: {
          line: 9,
        },
        end: {
          line: 11,
        },
      },
    },
    {
      type: NodeTypes.Doctype,
      range: [195, 303],
      loc: {
        start: {
          line: 11,
        },
        end: {
          line: 15,
        },
      },
      attributes: [
        {
          type: NodeTypes.Attribute,
          range: [207, 211],
          loc: {
            start: {
              line: 12,
            },
            end: {
              line: 12,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "HTML",
            range: [207, 211],
            loc: {
              start: {
                line: 12,
              },
              end: {
                line: 12,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [212, 218],
          loc: {
            start: {
              line: 12,
            },
            end: {
              line: 12,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "PUBLIC",
            range: [212, 218],
            loc: {
              start: {
                line: 12,
              },
              end: {
                line: 12,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [221, 257],
          loc: {
            start: {
              line: 13,
            },
            end: {
              line: 13,
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            value: "-//W3C//DTD HTML 4.01 Frameset//EN",
            range: [222, 256],
            loc: {
              start: {
                line: 13,
              },
              end: {
                line: 13,
              },
            },
          },
          startWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperStart,
            value: "'",
            range: [221, 222],
            loc: {
              start: {
                line: 13,
              },
              end: {
                line: 13,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperEnd,
            value: "'",
            range: [256, 257],
            loc: {
              start: {
                line: 13,
              },
              end: {
                line: 13,
              },
            },
          },
        },
        {
          type: NodeTypes.Attribute,
          range: [260, 301],
          loc: {
            start: {
              line: 14,
            },
            end: {
              line: 14,
            },
          },
          startWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperStart,
            value: '"',
            range: [260, 261],
            loc: {
              start: {
                line: 14,
              },
              end: {
                line: 14,
              },
            },
          },
          endWrapper: {
            type: NodeTypes.DoctypeAttributeWrapperEnd,
            value: '"',
            range: [300, 301],
            loc: {
              start: {
                line: 14,
              },
              end: {
                line: 14,
              },
            },
          },
          value: {
            type: NodeTypes.DoctypeAttribute,
            range: [261, 300],
            loc: {
              start: {
                line: 14,
              },
              end: {
                line: 14,
              },
            },
            value: "http://www.w3.org/TR/html4/frameset.dtd",
          },
        },
      ],
      start: {
        type: NodeTypes.DoctypeStart,
        value: "<!DOCTYPE",
        range: [195, 204],
        loc: {
          start: {
            line: 11,
          },
          end: {
            line: 11,
          },
        },
      },
      end: {
        type: NodeTypes.DoctypeEnd,
        value: ">",
        range: [302, 303],
        loc: {
          start: {
            line: 15,
          },
          end: {
            line: 15,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [303, 304],
      loc: {
        start: {
          line: 15,
        },
        end: {
          line: 16,
        },
      },
    },
  ],
};
