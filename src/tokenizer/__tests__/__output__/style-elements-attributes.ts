import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [0, 6],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [7, 11],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [11, 12],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [12, 13],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/css",
    range: [13, 21],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [21, 22],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom",
    range: [23, 29],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [29, 30],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [30, 31],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "attribute",
    range: [31, 40],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [40, 41],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [41, 42],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  body {\n    background-color: white;\n  }\n",
    range: [42, 85],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 5,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [85, 93],
    loc: {
      start: {
        line: 5,
      },
      end: {
        line: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [93, 95],
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
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [95, 99],
    loc: {
      start: {
        line: 7,
      },
      end: {
        line: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [99, 100],
    loc: {
      start: {
        line: 7,
      },
      end: {
        line: 7,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [100, 103],
    loc: {
      start: {
        line: 7,
      },
      end: {
        line: 8,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<style",
    range: [103, 109],
    loc: {
      start: {
        line: 8,
      },
      end: {
        line: 8,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom",
    range: [114, 120],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [125, 129],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [129, 130],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [130, 131],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/css",
    range: [131, 139],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [139, 140],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "another-custom",
    range: [146, 160],
    loc: {
      start: {
        line: 12,
      },
      end: {
        line: 12,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [163, 164],
    loc: {
      start: {
        line: 13,
      },
      end: {
        line: 13,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [164, 213],
    loc: {
      start: {
        line: 13,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</style>",
    range: [213, 221],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [221, 222],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 18,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [222, 228],
    loc: {
      start: {
        line: 18,
      },
      end: {
        line: 18,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [228, 229],
    loc: {
      start: {
        line: 18,
      },
      end: {
        line: 19,
      },
    },
  },
];
