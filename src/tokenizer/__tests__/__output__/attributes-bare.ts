import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
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
  },
  {
    type: TokenTypes.AttributeKey,
    value: "key",
    range: [5, 8],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 1,
        column: 8,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [10, 11],
    loc: {
      start: {
        line: 1,
        column: 10,
      },
      end: {
        line: 1,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [11, 16],
    loc: {
      start: {
        line: 1,
        column: 11,
      },
      end: {
        line: 1,
        column: 16,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and-another",
    range: [18, 29],
    loc: {
      start: {
        line: 1,
        column: 18,
      },
      end: {
        line: 1,
        column: 29,
      },
    },
    parts: [],
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
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [32, 37],
    loc: {
      start: {
        column: 32,
        line: 1,
      },
      end: {
        line: 1,
        column: 37,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [37, 38],
    loc: {
      start: {
        line: 1,
        column: 37,
      },
      end: {
        line: 1,
        column: 38,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [38, 44],
    loc: {
      start: {
        line: 1,
        column: 38,
      },
      end: {
        line: 1,
        column: 44,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [44, 46],
    loc: {
      start: {
        line: 1,
        column: 44,
      },
      end: {
        line: 3,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [46, 51],
    loc: {
      start: {
        line: 3,
        column: 0,
      },
      end: {
        line: 3,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "some",
    range: [52, 56],
    loc: {
      start: {
        line: 3,
        column: 6,
      },
      end: {
        line: 3,
        column: 10,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [56, 57],
    loc: {
      start: {
        line: 3,
        column: 10,
      },
      end: {
        line: 3,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "custom-attribute",
    range: [57, 73],
    loc: {
      start: {
        line: 3,
        column: 11,
      },
      end: {
        line: 3,
        column: 27,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [73, 74],
    loc: {
      start: {
        line: 3,
        column: 27,
      },
      end: {
        line: 3,
        column: 28,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [74, 90],
    loc: {
      start: {
        line: 3,
        column: 28,
      },
      end: {
        line: 6,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [90, 105],
    loc: {
      start: {
        line: 6,
        column: 2,
      },
      end: {
        line: 6,
        column: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and",
    range: [106, 109],
    loc: {
      start: {
        line: 6,
        column: 18,
      },
      end: {
        line: 6,
        column: 21,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [109, 110],
    loc: {
      start: {
        line: 6,
        column: 21,
      },
      end: {
        line: 6,
        column: 22,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "here",
    range: [110, 114],
    loc: {
      start: {
        line: 6,
        column: 22,
      },
      end: {
        line: 6,
        column: 26,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "and-even",
    range: [119, 127],
    loc: {
      start: {
        line: 7,
        column: 4,
      },
      end: {
        line: 7,
        column: 12,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [128, 129],
    loc: {
      start: {
        line: 7,
        column: 13,
      },
      end: {
        line: 7,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "here",
    range: [130, 134],
    loc: {
      start: {
        line: 7,
        column: 15,
      },
      end: {
        line: 7,
        column: 19,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [137, 138],
    loc: {
      start: {
        line: 8,
        column: 2,
      },
      end: {
        line: 8,
        column: 3,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    custom element\n    text\n  ",
    range: [138, 169],
    loc: {
      start: {
        line: 8,
        column: 3,
      },
      end: {
        line: 11,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [169, 186],
    loc: {
      start: {
        line: 11,
        column: 2,
      },
      end: {
        line: 11,
        column: 19,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [186, 187],
    loc: {
      start: {
        line: 11,
        column: 19,
      },
      end: {
        line: 12,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [187, 194],
    loc: {
      start: {
        line: 12,
        column: 0,
      },
      end: {
        line: 12,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [194, 195],
    loc: {
      start: {
        line: 12,
        column: 7,
      },
      end: {
        line: 13,
        column: 0,
      },
    },
    parts: [],
  },
];
