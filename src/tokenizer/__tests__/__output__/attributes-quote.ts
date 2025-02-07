import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
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
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
    loc: {
      start: {
        line: 1,
        column: 4,
      },
      end: {
        line: 1,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [5, 8],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 2,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [8, 13],
    loc: {
      start: {
        line: 2,
        column: 2,
      },
      end: {
        line: 2,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [14, 19],
    loc: {
      start: {
        line: 2,
        column: 8,
      },
      end: {
        line: 2,
        column: 13,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [19, 20],
    loc: {
      start: {
        line: 2,
        column: 13,
      },
      end: {
        line: 2,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [20, 21],
    loc: {
      start: {
        line: 2,
        column: 14,
      },
      end: {
        line: 2,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "test class",
    range: [21, 31],
    loc: {
      start: {
        line: 2,
        column: 15,
      },
      end: {
        line: 2,
        column: 25,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [31, 32],
    loc: {
      start: {
        line: 2,
        column: 25,
      },
      end: {
        line: 2,
        column: 26,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "data-test",
    range: [33, 42],
    loc: {
      start: {
        line: 2,
        column: 27,
      },
      end: {
        line: 2,
        column: 36,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [42, 43],
    loc: {
      start: {
        line: 2,
        column: 36,
      },
      end: {
        line: 2,
        column: 37,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [43, 44],
    loc: {
      start: {
        line: 2,
        column: 37,
      },
      end: {
        line: 2,
        column: 38,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "data<test>",
    range: [44, 54],
    loc: {
      start: {
        line: 2,
        column: 38,
      },
      end: {
        line: 2,
        column: 48,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [54, 55],
    loc: {
      start: {
        line: 2,
        column: 48,
      },
      end: {
        line: 2,
        column: 49,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [55, 56],
    loc: {
      start: {
        line: 2,
        column: 49,
      },
      end: {
        line: 2,
        column: 50,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    some text\n\n    ",
    range: [56, 76],
    loc: {
      start: {
        line: 2,
        column: 50,
      },
      end: {
        line: 5,
        column: 4,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [76, 80],
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
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [80, 81],
    loc: {
      start: {
        line: 5,
        column: 8,
      },
      end: {
        line: 5,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n      another text\n\n      ",
    range: [81, 108],
    loc: {
      start: {
        line: 5,
        column: 9,
      },
      end: {
        line: 8,
        column: 6,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-element",
    range: [108, 123],
    loc: {
      start: {
        line: 8,
        column: 6,
      },
      end: {
        line: 8,
        column: 21,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "custom-attr",
    range: [132, 143],
    loc: {
      start: {
        line: 9,
        column: 8,
      },
      end: {
        line: 9,
        column: 19,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [143, 144],
    loc: {
      start: {
        line: 9,
        column: 19,
      },
      end: {
        line: 9,
        column: 20,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [144, 145],
    loc: {
      start: {
        line: 9,
        column: 20,
      },
      end: {
        line: 9,
        column: 21,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "custom >test",
    range: [145, 157],
    loc: {
      start: {
        line: 9,
        column: 21,
      },
      end: {
        line: 9,
        column: 33,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [157, 158],
    loc: {
      start: {
        line: 9,
        column: 33,
      },
      end: {
        line: 9,
        column: 34,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "with-spaces",
    range: [167, 178],
    loc: {
      start: {
        line: 10,
        column: 8,
      },
      end: {
        line: 10,
        column: 19,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [181, 182],
    loc: {
      start: {
        line: 10,
        column: 22,
      },
      end: {
        line: 10,
        column: 23,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [184, 185],
    loc: {
      start: {
        line: 10,
        column: 25,
      },
      end: {
        line: 10,
        column: 26,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "spaces test",
    range: [185, 196],
    loc: {
      start: {
        line: 10,
        column: 26,
      },
      end: {
        line: 10,
        column: 37,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [196, 197],
    loc: {
      start: {
        line: 10,
        column: 37,
      },
      end: {
        line: 10,
        column: 38,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [204, 205],
    loc: {
      start: {
        line: 11,
        column: 6,
      },
      end: {
        line: 11,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n        custom element\n        text\n      ",
    range: [205, 248],
    loc: {
      start: {
        line: 11,
        column: 7,
      },
      end: {
        line: 14,
        column: 6,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-element>",
    range: [248, 265],
    loc: {
      start: {
        line: 14,
        column: 6,
      },
      end: {
        line: 14,
        column: 23,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    ",
    range: [265, 270],
    loc: {
      start: {
        line: 14,
        column: 23,
      },
      end: {
        line: 15,
        column: 4,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [270, 276],
    loc: {
      start: {
        line: 15,
        column: 4,
      },
      end: {
        line: 15,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [276, 279],
    loc: {
      start: {
        line: 15,
        column: 10,
      },
      end: {
        line: 16,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [279, 286],
    loc: {
      start: {
        line: 16,
        column: 2,
      },
      end: {
        line: 16,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [286, 287],
    loc: {
      start: {
        line: 16,
        column: 9,
      },
      end: {
        line: 17,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [287, 293],
    loc: {
      start: {
        line: 17,
        column: 0,
      },
      end: {
        line: 17,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [293, 294],
    loc: {
      start: {
        line: 17,
        column: 6,
      },
      end: {
        line: 18,
        column: 0,
      },
    },
    parts: [],
  },
];

export default OUTPUT;
