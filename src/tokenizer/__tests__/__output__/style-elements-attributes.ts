import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<style",
    range: [0, 6],
    loc: {
      start: {
        column: 0,
        line: 1,
      },
      end: {
        line: 1,
        column: 6,
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
        column: 7,
      },
      end: {
        line: 1,
        column: 11,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [11, 12],
    loc: {
      start: {
        line: 1,
        column: 11,
      },
      end: {
        line: 1,
        column: 12,
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
        column: 12,
      },
      end: {
        line: 1,
        column: 13,
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
        column: 13,
      },
      end: {
        line: 1,
        column: 21,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [21, 22],
    loc: {
      start: {
        line: 1,
        column: 21,
      },
      end: {
        line: 1,
        column: 22,
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
        column: 23,
      },
      end: {
        line: 1,
        column: 29,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [29, 30],
    loc: {
      start: {
        line: 1,
        column: 29,
      },
      end: {
        line: 1,
        column: 30,
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
        column: 30,
      },
      end: {
        line: 1,
        column: 31,
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
        column: 31,
      },
      end: {
        line: 1,
        column: 40,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [40, 41],
    loc: {
      start: {
        line: 1,
        column: 40,
      },
      end: {
        line: 1,
        column: 41,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [41, 42],
    loc: {
      start: {
        line: 1,
        column: 41,
      },
      end: {
        line: 1,
        column: 42,
      },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    value: "\n  body {\n    background-color: white;\n  }\n",
    range: [42, 85],
    loc: {
      start: {
        line: 1,
        column: 42,
      },
      end: {
        line: 5,
        column: 0,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [85, 93],
    loc: {
      start: {
        line: 5,
        column: 0,
      },
      end: {
        line: 5,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [93, 95],
    loc: {
      start: {
        column: 8,
        line: 5,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [95, 99],
    loc: {
      start: {
        column: 0,
        line: 7,
      },
      end: {
        column: 4,
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
        column: 4,
      },
      end: {
        line: 7,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [100, 103],
    loc: {
      start: {
        column: 5,
        line: 7,
      },
      end: {
        line: 8,
        column: 2,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<style",
    range: [103, 109],
    loc: {
      start: {
        column: 2,
        line: 8,
      },
      end: {
        column: 8,
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
        column: 4,
        line: 9,
      },
      end: {
        column: 10,
        line: 9,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [125, 129],
    loc: {
      start: {
        column: 4,
        line: 10,
      },
      end: {
        column: 8,
        line: 10,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [129, 130],
    loc: {
      start: {
        column: 8,
        line: 10,
      },
      end: {
        column: 9,
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
        column: 9,
        line: 10,
      },
      end: {
        column: 10,
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
        column: 10,
      },
      end: {
        line: 10,
        column: 18,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [139, 140],
    loc: {
      start: {
        line: 10,
        column: 18,
      },
      end: {
        line: 10,
        column: 19,
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
        column: 4,
      },
      end: {
        line: 12,
        column: 18,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [163, 164],
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
    type: TokenTypes.StyleTagContent,
    value: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [164, 213],
    loc: {
      start: {
        line: 13,
        column: 3,
      },
      end: {
        line: 17,
        column: 2,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [213, 221],
    loc: {
      start: {
        line: 17,
        column: 2,
      },
      end: {
        line: 17,
        column: 10,
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
        column: 10,
      },
      end: {
        line: 18,
        column: 0,
      },
    },
    templates: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [222, 228],
    loc: {
      start: {
        line: 18,
        column: 0,
      },
      end: {
        line: 18,
        column: 6,
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
        column: 6,
      },
      end: {
        line: 19,
        column: 0,
      },
    },
    templates: [],
  },
];
export default OUTPUT;
