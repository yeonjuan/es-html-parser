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
    type: TokenTypes.TemplateSyntaxStart,
    value: "${",
    range: [5, 7],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 1,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxContent,
    value: " attr ",
    range: [7, 13],
    loc: {
      start: {
        line: 1,
        column: 7,
      },
      end: {
        line: 1,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.TemplateSyntaxEnd,
    value: "}",
    range: [13, 14],
    loc: {
      start: {
        line: 1,
        column: 13,
      },
      end: {
        line: 1,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [14, 15],
    loc: {
      start: {
        line: 1,
        column: 14,
      },
      end: {
        line: 1,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [15, 16],
    loc: {
      start: {
        line: 1,
        column: 15,
      },
      end: {
        line: 1,
        column: 16,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "value",
    range: [16, 21],
    loc: {
      start: {
        line: 1,
        column: 16,
      },
      end: {
        line: 1,
        column: 21,
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
        column: 21,
      },
      end: {
        line: 1,
        column: 22,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [22, 23],
    loc: {
      start: {
        line: 1,
        column: 22,
      },
      end: {
        line: 1,
        column: 23,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
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
  },
];
