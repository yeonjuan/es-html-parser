import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<svg",
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
    range: [5, 10],
    value: "xmlns",
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
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [10, 11],
    loc: {
      end: {
        column: 11,
        line: 1,
      },
      start: {
        column: 10,
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [11, 12],
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
  },
  {
    type: TokenTypes.AttributeValue,
    value: "http://www.w3.org/2000/svg",
    range: [12, 38],
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
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [38, 39],
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
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 40],
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
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<circle",
    range: [40, 47],
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
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: "/>",
    range: [48, 50],
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
  },
  {
    type: TokenTypes.CloseTag,
    value: "</svg>",
    range: [50, 56],
    loc: {
      end: {
        column: 56,
        line: 1,
      },
      start: {
        column: 50,
        line: 1,
      },
    },
  },
];

export default OUTPUT;
