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
    type: TokenTypes.AttributeValue,
    range: [8, 13],
    loc: {
      start: { line: 1, column: 8 },
      end: { line: 1, column: 13 },
    },
    value: "${id}",
    parts: [
      {
        type: TokenTypes.Template,
        partOf: TokenTypes.AttributeValue,
        range: [8, 13],
        loc: {
          start: { line: 1, column: 8 },
          end: { line: 1, column: 13 },
        },
        value: "${id}",
      },
    ],
  },
  {
    type: TokenTypes.OpenTagEnd,
    range: [13, 14],
    loc: {
      start: { line: 1, column: 13 },
      end: { line: 1, column: 14 },
    },
    value: ">",
  },
  {
    type: TokenTypes.CloseTag,
    range: [14, 20],
    loc: {
      start: { line: 1, column: 14 },
      end: { line: 1, column: 20 },
    },
    value: "</div>",
  },
];

export default OUTPUT;
