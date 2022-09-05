export default {
  type: "Document",
  range: [0, 304],
  children: [
    {
      type: "Doctype",
      range: [0, 10],
      loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 10 } },
      start: {
        type: "DoctypeStart",
        value: "<!DOCTYPE",
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 9 } },
        range: [0, 9],
      },
      end: {
        type: "DoctypeEnd",
        value: ">",
        loc: { start: { line: 1, column: 9 }, end: { line: 1, column: 10 } },
        range: [9, 10],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 1, column: 10 }, end: { line: 3, column: 0 } },
      range: [10, 12],
    },
    {
      type: "Doctype",
      range: [12, 22],
      loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 10 } },
      start: {
        type: "DoctypeStart",
        value: "<!doctype",
        loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 9 } },
        range: [12, 21],
      },
      end: {
        type: "DoctypeEnd",
        value: ">",
        loc: { start: { line: 3, column: 9 }, end: { line: 3, column: 10 } },
        range: [21, 22],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 3, column: 10 }, end: { line: 5, column: 0 } },
      range: [22, 24],
    },
    {
      type: "Doctype",
      range: [24, 66],
      loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 42 } },
      start: {
        type: "DoctypeStart",
        value: "<!DOCTYPE",
        loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 9 } },
        range: [24, 33],
      },
      attributes: [
        {
          type: "Attribute",
          range: [34, 50],
          loc: { start: { line: 5, column: 10 }, end: { line: 5, column: 26 } },
          startWrapper: {
            type: "DoctypeAttributeWrapperStart",
            value: '"',
            loc: {
              start: { line: 5, column: 10 },
              end: { line: 5, column: 11 },
            },
            range: [34, 35],
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "some attribute",
            range: [35, 49],
            loc: {
              start: { line: 5, column: 11 },
              end: { line: 5, column: 25 },
            },
          },
          endWrapper: {
            type: "DoctypeAttributeWrapperEnd",
            value: '"',
            loc: {
              start: { line: 5, column: 25 },
              end: { line: 5, column: 26 },
            },
            range: [49, 50],
          },
        },
        {
          type: "Attribute",
          range: [51, 64],
          loc: { start: { line: 5, column: 27 }, end: { line: 5, column: 40 } },
          startWrapper: {
            type: "DoctypeAttributeWrapperStart",
            value: "'",
            loc: {
              start: { line: 5, column: 27 },
              end: { line: 5, column: 28 },
            },
            range: [51, 52],
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "another-one",
            range: [52, 63],
            loc: {
              start: { line: 5, column: 28 },
              end: { line: 5, column: 39 },
            },
          },
          endWrapper: {
            type: "DoctypeAttributeWrapperEnd",
            value: "'",
            loc: {
              start: { line: 5, column: 39 },
              end: { line: 5, column: 40 },
            },
            range: [63, 64],
          },
        },
      ],
      end: {
        type: "DoctypeEnd",
        value: ">",
        loc: { start: { line: 5, column: 41 }, end: { line: 5, column: 42 } },
        range: [65, 66],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 5, column: 42 }, end: { line: 7, column: 0 } },
      range: [66, 68],
    },
    {
      type: "Doctype",
      range: [68, 90],
      loc: { start: { line: 7, column: 0 }, end: { line: 7, column: 22 } },
      start: {
        type: "DoctypeStart",
        value: "<!DOCTYPE",
        loc: { start: { line: 7, column: 0 }, end: { line: 7, column: 9 } },
        range: [68, 77],
      },
      attributes: [
        {
          type: "Attribute",
          range: [78, 82],
          loc: { start: { line: 7, column: 10 }, end: { line: 7, column: 14 } },
          value: {
            type: "DoctypeAttributeValue",
            value: "html",
            range: [78, 82],
            loc: {
              start: { column: 10, line: 7 },
              end: { line: 7, column: 14 },
            },
          },
        },
        {
          type: "Attribute",
          range: [83, 89],
          loc: { start: { line: 7, column: 15 }, end: { line: 7, column: 21 } },
          value: {
            type: "DoctypeAttributeValue",
            value: "PUBLIC",
            range: [83, 89],
            loc: {
              start: { line: 7, column: 15 },
              end: { line: 7, column: 21 },
            },
          },
        },
      ],
      end: {
        type: "DoctypeEnd",
        value: ">",
        loc: { start: { line: 7, column: 21 }, end: { line: 7, column: 22 } },
        range: [89, 90],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 7, column: 22 }, end: { line: 9, column: 0 } },
      range: [90, 92],
    },
    {
      type: "Doctype",
      range: [92, 193],
      loc: { start: { line: 9, column: 0 }, end: { line: 9, column: 101 } },
      start: {
        type: "DoctypeStart",
        value: "<!DOCTYPE",
        loc: { start: { line: 9, column: 0 }, end: { line: 9, column: 9 } },
        range: [92, 101],
      },
      attributes: [
        {
          type: "Attribute",
          range: [102, 106],
          loc: { start: { line: 9, column: 10 }, end: { line: 9, column: 14 } },
          value: {
            type: "DoctypeAttributeValue",
            value: "HTML",
            range: [102, 106],
            loc: {
              start: { line: 9, column: 10 },
              end: { line: 9, column: 14 },
            },
          },
        },
        {
          type: "Attribute",
          range: [107, 113],
          loc: { start: { line: 9, column: 15 }, end: { line: 9, column: 21 } },
          value: {
            type: "DoctypeAttributeValue",
            value: "PUBLIC",
            range: [107, 113],
            loc: {
              start: { column: 15, line: 9 },
              end: { line: 9, column: 21 },
            },
          },
        },
        {
          type: "Attribute",
          range: [114, 150],
          loc: { start: { line: 9, column: 22 }, end: { line: 9, column: 58 } },
          startWrapper: {
            type: "DoctypeAttributeWrapperStart",
            value: '"',
            loc: {
              start: { line: 9, column: 22 },
              end: { line: 9, column: 23 },
            },
            range: [114, 115],
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "-//W3C//DTD HTML 4.01 Frameset//EN",
            range: [115, 149],
            loc: {
              start: { line: 9, column: 23 },
              end: { line: 9, column: 57 },
            },
          },
          endWrapper: {
            type: "DoctypeAttributeWrapperEnd",
            value: '"',
            loc: {
              start: { line: 9, column: 57 },
              end: { line: 9, column: 58 },
            },
            range: [149, 150],
          },
        },
        {
          type: "Attribute",
          range: [151, 192],
          loc: {
            start: { line: 9, column: 59 },
            end: { line: 9, column: 100 },
          },
          startWrapper: {
            type: "DoctypeAttributeWrapperStart",
            value: '"',
            loc: {
              start: { line: 9, column: 59 },
              end: { line: 9, column: 60 },
            },
            range: [151, 152],
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "http://www.w3.org/TR/html4/frameset.dtd",
            range: [152, 191],
            loc: {
              start: { line: 9, column: 60 },
              end: { line: 9, column: 99 },
            },
          },
          endWrapper: {
            type: "DoctypeAttributeWrapperEnd",
            value: '"',
            loc: {
              start: { line: 9, column: 99 },
              end: { line: 9, column: 100 },
            },
            range: [191, 192],
          },
        },
      ],
      end: {
        type: "DoctypeEnd",
        value: ">",
        loc: { start: { line: 9, column: 100 }, end: { line: 9, column: 101 } },
        range: [192, 193],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 9, column: 101 }, end: { line: 11, column: 0 } },
      range: [193, 195],
    },
    {
      type: "Doctype",
      range: [195, 303],
      loc: { start: { line: 11, column: 0 }, end: { line: 15, column: 1 } },
      start: {
        type: "DoctypeStart",
        value: "<!DOCTYPE",
        loc: { start: { line: 11, column: 0 }, end: { line: 11, column: 9 } },
        range: [195, 204],
      },
      attributes: [
        {
          type: "Attribute",
          range: [207, 211],
          loc: { start: { line: 12, column: 2 }, end: { line: 12, column: 6 } },
          value: {
            type: "DoctypeAttributeValue",
            value: "HTML",
            range: [207, 211],
            loc: {
              start: { line: 12, column: 2 },
              end: { line: 12, column: 6 },
            },
          },
        },
        {
          type: "Attribute",
          range: [212, 218],
          loc: {
            start: { line: 12, column: 7 },
            end: { line: 12, column: 13 },
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "PUBLIC",
            range: [212, 218],
            loc: {
              start: { line: 12, column: 7 },
              end: { line: 12, column: 13 },
            },
          },
        },
        {
          type: "Attribute",
          range: [221, 257],
          loc: {
            start: { line: 13, column: 2 },
            end: { line: 13, column: 38 },
          },
          startWrapper: {
            type: "DoctypeAttributeWrapperStart",
            value: "'",
            loc: {
              start: { line: 13, column: 2 },
              end: { line: 13, column: 3 },
            },
            range: [221, 222],
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "-//W3C//DTD HTML 4.01 Frameset//EN",
            range: [222, 256],
            loc: {
              start: { line: 13, column: 3 },
              end: { line: 13, column: 37 },
            },
          },
          endWrapper: {
            type: "DoctypeAttributeWrapperEnd",
            value: "'",
            loc: {
              start: { line: 13, column: 37 },
              end: { line: 13, column: 38 },
            },
            range: [256, 257],
          },
        },
        {
          type: "Attribute",
          range: [260, 301],
          loc: {
            start: { line: 14, column: 2 },
            end: { line: 14, column: 43 },
          },
          startWrapper: {
            type: "DoctypeAttributeWrapperStart",
            value: '"',
            loc: {
              start: { line: 14, column: 2 },
              end: { line: 14, column: 3 },
            },
            range: [260, 261],
          },
          value: {
            type: "DoctypeAttributeValue",
            value: "http://www.w3.org/TR/html4/frameset.dtd",
            range: [261, 300],
            loc: {
              start: { line: 14, column: 3 },
              end: { line: 14, column: 42 },
            },
          },
          endWrapper: {
            type: "DoctypeAttributeWrapperEnd",
            value: '"',
            loc: {
              start: { line: 14, column: 42 },
              end: { line: 14, column: 43 },
            },
            range: [300, 301],
          },
        },
      ],
      end: {
        type: "DoctypeEnd",
        value: ">",
        loc: { start: { line: 15, column: 0 }, end: { line: 15, column: 1 } },
        range: [302, 303],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 15, column: 1 }, end: { line: 16, column: 0 } },
      range: [303, 304],
    },
  ],
  loc: { start: { line: 1, column: 1 }, end: { line: 16, column: 0 } },
};
