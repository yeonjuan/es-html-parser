import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
    loc: {
      start: { line: 1, column: 0 },
      end: { line: 1, column: 4 },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "id",
    range: [5, 7],
    loc: {
      start: { line: 1, column: 5 },
      end: { line: 1, column: 7 },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [7, 8],
    loc: {
      start: { line: 1, column: 7 },
      end: { line: 1, column: 8 },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [8, 9],
    loc: {
      start: { line: 1, column: 8 },
      end: { line: 1, column: 9 },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    range: [9, 14],
    loc: {
      start: { line: 1, column: 9 },
      end: { line: 1, column: 14 },
    },
    value: "${id}",
    parts: [
      {
        type: TokenTypes.Template,
        partOf: TokenTypes.AttributeValue,
        range: [9, 14],
        loc: {
          start: { line: 1, column: 9 },
          end: { line: 1, column: 14 },
        },
        value: "${id}",
      },
    ],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [14, 15],
    loc: {
      start: { line: 1, column: 14 },
      end: { line: 1, column: 15 },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    range: [15, 16],
    loc: {
      start: { line: 1, column: 15 },
      end: { line: 1, column: 16 },
    },
    value: ">",
  },
  {
    type: TokenTypes.CloseTag,
    range: [16, 22],
    loc: {
      start: { line: 1, column: 16 },
      end: { line: 1, column: 22 },
    },
    value: "</div>",
  },
];

export default OUTPUT;
