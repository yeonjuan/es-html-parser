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
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
    loc: {
      start: { line: 1, column: 4 },
      end: { line: 1, column: 5 },
    },
  },
  {
    type: TokenTypes.Text,
    value: "${children}",
    range: [5, 16],
    loc: {
      start: { line: 1, column: 5 },
      end: { line: 1, column: 16 },
    },
    templates: [
      {
        type: TokenTypes.Text,
        value: "${children}",
        range: [5, 16],
        loc: {
          start: { line: 1, column: 5 },
          end: { line: 1, column: 16 },
        },
        isTemplate: true,
      },
    ],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [16, 22],
    loc: {
      start: { line: 1, column: 16 },
      end: { line: 1, column: 22 },
    },
  },
];

export default OUTPUT;
