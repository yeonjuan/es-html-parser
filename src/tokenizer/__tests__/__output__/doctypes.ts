import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [0, 9],
    loc: {
      start: {
        column: 0,
        line: 1,
      },
      end: {
        column: 9,
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [9, 10],
    loc: {
      start: {
        line: 1,
        column: 9,
      },
      end: {
        line: 1,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [10, 12],
    loc: {
      start: {
        line: 1,
        column: 10,
      },
      end: {
        line: 3,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!doctype",
    range: [12, 21],
    loc: {
      start: {
        line: 3,
        column: 0,
      },
      end: {
        line: 3,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [21, 22],
    loc: {
      start: {
        line: 3,
        column: 9,
      },
      end: {
        line: 3,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [22, 24],
    loc: {
      start: {
        line: 3,
        column: 10,
      },
      end: {
        line: 5,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [24, 33],
    loc: {
      start: {
        line: 5,
        column: 0,
      },
      end: {
        line: 5,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [34, 35],
    loc: {
      start: {
        line: 5,
        column: 10,
      },
      end: {
        line: 5,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "some attribute",
    range: [35, 49],
    loc: {
      start: {
        line: 5,
        column: 11,
      },
      end: {
        line: 5,
        column: 25,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [49, 50],
    loc: {
      start: {
        line: 5,
        column: 25,
      },
      end: {
        line: 5,
        column: 26,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: "'",
    range: [51, 52],
    loc: {
      start: {
        line: 5,
        column: 27,
      },
      end: {
        line: 5,
        column: 28,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "another-one",
    range: [52, 63],
    loc: {
      start: {
        line: 5,
        column: 28,
      },
      end: {
        line: 5,
        column: 39,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: "'",
    range: [63, 64],
    loc: {
      start: {
        line: 5,
        column: 39,
      },
      end: {
        line: 5,
        column: 40,
      },
    },
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [65, 66],
    loc: {
      start: {
        line: 5,
        column: 41,
      },
      end: {
        line: 5,
        column: 42,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [66, 68],
    loc: {
      start: {
        line: 5,
        column: 42,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [68, 77],
    loc: {
      start: {
        line: 7,
        column: 0,
      },
      end: {
        line: 7,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "html",
    range: [78, 82],
    loc: {
      start: {
        column: 10,
        line: 7,
      },
      end: {
        line: 7,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "PUBLIC",
    range: [83, 89],
    loc: {
      start: {
        line: 7,
        column: 15,
      },
      end: {
        line: 7,
        column: 21,
      },
    },
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [89, 90],
    loc: {
      start: {
        line: 7,
        column: 21,
      },
      end: {
        line: 7,
        column: 22,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [90, 92],
    loc: {
      start: {
        line: 7,
        column: 22,
      },
      end: {
        line: 9,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [92, 101],
    loc: {
      start: {
        line: 9,
        column: 0,
      },
      end: {
        line: 9,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "HTML",
    range: [102, 106],
    loc: {
      start: {
        line: 9,
        column: 10,
      },
      end: {
        line: 9,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "PUBLIC",
    range: [107, 113],
    loc: {
      start: {
        column: 15,
        line: 9,
      },
      end: {
        line: 9,
        column: 21,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [114, 115],
    loc: {
      start: {
        line: 9,
        column: 22,
      },
      end: {
        line: 9,
        column: 23,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "-//W3C//DTD HTML 4.01 Frameset//EN",
    range: [115, 149],
    loc: {
      start: {
        line: 9,
        column: 23,
      },
      end: {
        line: 9,
        column: 57,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [149, 150],
    loc: {
      start: {
        line: 9,
        column: 57,
      },
      end: {
        line: 9,
        column: 58,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [151, 152],
    loc: {
      start: {
        line: 9,
        column: 59,
      },
      end: {
        line: 9,
        column: 60,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "http://www.w3.org/TR/html4/frameset.dtd",
    range: [152, 191],
    loc: {
      start: {
        line: 9,
        column: 60,
      },
      end: {
        line: 9,
        column: 99,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [191, 192],
    loc: {
      start: {
        line: 9,
        column: 99,
      },
      end: {
        line: 9,
        column: 100,
      },
    },
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [192, 193],
    loc: {
      start: {
        line: 9,
        column: 100,
      },
      end: {
        line: 9,
        column: 101,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [193, 195],
    loc: {
      start: {
        line: 9,
        column: 101,
      },
      end: {
        line: 11,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.DoctypeStart,
    value: "<!DOCTYPE",
    range: [195, 204],
    loc: {
      start: {
        line: 11,
        column: 0,
      },
      end: {
        line: 11,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "HTML",
    range: [207, 211],
    loc: {
      start: {
        line: 12,
        column: 2,
      },
      end: {
        line: 12,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "PUBLIC",
    range: [212, 218],
    loc: {
      start: {
        line: 12,
        column: 7,
      },
      end: {
        line: 12,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: "'",
    range: [221, 222],
    loc: {
      start: {
        line: 13,
        column: 2,
      },
      end: {
        line: 13,
        column: 3,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "-//W3C//DTD HTML 4.01 Frameset//EN",
    range: [222, 256],
    loc: {
      start: {
        line: 13,
        column: 3,
      },
      end: {
        line: 13,
        column: 37,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: "'",
    range: [256, 257],
    loc: {
      start: {
        line: 13,
        column: 37,
      },
      end: {
        line: 13,
        column: 38,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperStart,
    value: '"',
    range: [260, 261],
    loc: {
      start: {
        line: 14,
        column: 2,
      },
      end: {
        line: 14,
        column: 3,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeValue,
    value: "http://www.w3.org/TR/html4/frameset.dtd",
    range: [261, 300],
    loc: {
      start: {
        line: 14,
        column: 3,
      },
      end: {
        line: 14,
        column: 42,
      },
    },
  },
  {
    type: TokenTypes.DoctypeAttributeWrapperEnd,
    value: '"',
    range: [300, 301],
    loc: {
      start: {
        column: 42,
        line: 14,
      },
      end: {
        line: 14,
        column: 43,
      },
    },
  },
  {
    type: TokenTypes.DoctypeEnd,
    value: ">",
    range: [302, 303],
    loc: {
      start: {
        line: 15,
        column: 0,
      },
      end: {
        line: 15,
        column: 1,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [303, 304],
    loc: {
      start: {
        line: 15,
        column: 1,
      },
      end: {
        line: 16,
        column: 0,
      },
    },
  },
];
