import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [0, 7],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 1,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "${type}",
    isTemplate: true,
    range: [8, 15],
    loc: {
      start: {
        line: 1,
        column: 8,
      },
      end: {
        line: 1,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
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
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [16, 25],
    loc: {
      start: {
        line: 1,
        column: 16,
      },
      end: {
        line: 1,
        column: 25,
      },
    },
  },
];
