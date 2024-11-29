import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
    range: [0, 4],
    loc: {
      start: { line: 1, column: 0 },
      end: { line: 1, column: 4 },
    },
  },
  {
    type: TokenTypes.CommentContent,
    value: "${comment}",
    range: [4, 14],
    loc: {
      start: { line: 1, column: 4 },
      end: { line: 1, column: 14 },
    },
    templates: [
      {
        type: TokenTypes.CommentContent,
        value: "${comment}",
        range: [4, 14],
        loc: {
          start: { line: 1, column: 4 },
          end: { line: 1, column: 14 },
        },
        isTemplate: true,
      },
    ],
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [14, 17],
    loc: {
      start: { line: 1, column: 14 },
      end: { line: 1, column: 17 },
    },
  },
];
export default OUTPUT;
