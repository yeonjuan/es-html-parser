import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.CommentOpen,
    value: "<!--",
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
    type: TokenTypes.CommentContent,
    value: "${comment}",
    isTemplate: true,
    range: [4, 14],
    loc: {
      start: {
        line: 1,
        column: 4,
      },
      end: {
        line: 1,
        column: 14,
      },
    },
  },
  {
    type: TokenTypes.CommentClose,
    value: "-->",
    range: [14, 17],
    loc: {
      start: {
        line: 1,
        column: 14,
      },
      end: {
        line: 1,
        column: 17,
      },
    },
  },
];
