import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    range: [0, 4],
    loc: {
      start: {
        column: 0,
        line: 1,
      },
      end: {
        column: 4,
        line: 1,
      },
    },
    value: "<div",
  },
  {
    type: TokenTypes.AttributeKey,
    range: [8, 10],
    value: "id",
    loc: {
      start: {
        line: 2,
        column: 2,
      },
      end: {
        line: 2,
        column: 4,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    range: [10, 11],
    value: "=",
    loc: {
      start: {
        line: 2,
        column: 4,
      },
      end: {
        line: 2,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [11, 12],
    loc: {
      start: {
        line: 2,
        column: 5,
      },
      end: {
        line: 2,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "foo",
    range: [12, 15],
    loc: {
      start: {
        line: 2,
        column: 6,
      },
      end: {
        line: 2,
        column: 9,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [15, 16],
    loc: {
      start: {
        line: 2,
        column: 9,
      },
      end: {
        line: 2,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "style",
    range: [20, 25],
    loc: {
      start: {
        line: 3,
        column: 2,
      },
      end: {
        line: 3,
        column: 7,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [25, 26],
    loc: {
      start: {
        line: 3,
        column: 7,
      },
      end: {
        line: 3,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [26, 27],
    loc: {
      start: {
        line: 3,
        column: 8,
      },
      end: {
        line: 3,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "bar",
    range: [27, 30],
    loc: {
      start: {
        line: 3,
        column: 9,
      },
      end: {
        line: 3,
        column: 12,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [30, 31],
    loc: {
      start: {
        line: 3,
        column: 12,
      },
      end: {
        line: 3,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "bool",
    range: [35, 39],
    loc: {
      start: {
        line: 4,
        column: 2,
      },
      end: {
        line: 4,
        column: 6,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [41, 42],
    loc: {
      start: {
        line: 5,
        column: 0,
      },
      end: {
        line: 5,
        column: 1,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\r\n",
    range: [42, 44],
    loc: {
      start: {
        line: 5,
        column: 1,
      },
      end: {
        line: 6,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [44, 50],
    loc: {
      start: {
        line: 6,
        column: 0,
      },
      end: {
        line: 6,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\r\n",
    range: [50, 52],
    loc: {
      start: {
        line: 6,
        column: 6,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
    parts: [],
  },
];
export default OUTPUT;
