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
    value: "${ attr }",
    isTemplate: true,
    range: [5, 14],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 1,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
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
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [15, 21],
    loc: {
      start: {
        line: 1,
        column: 15,
      },
      end: {
        line: 1,
        column: 21,
      },
    },
  },
];
