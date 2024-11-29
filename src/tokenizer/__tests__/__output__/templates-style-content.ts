import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<style",
    range: [0, 6],
    loc: {
      start: { line: 1, column: 0 },
      end: { line: 1, column: 6 },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [6, 7],
    loc: {
      start: { line: 1, column: 6 },
      end: { line: 1, column: 7 },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    value: "${content}",
    range: [7, 17],
    loc: {
      start: { line: 1, column: 7 },
      end: { line: 1, column: 17 },
    },
    templates: [
      {
        type: TokenTypes.StyleTagContent,
        value: "${content}",
        range: [7, 17],
        loc: {
          start: { line: 1, column: 7 },
          end: { line: 1, column: 17 },
        },
        isTemplate: true,
      },
    ],
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [17, 25],
    loc: {
      start: { line: 1, column: 17 },
      end: { line: 1, column: 25 },
    },
  },
];
export default OUTPUT;
