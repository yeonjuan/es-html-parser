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
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [7, 8],
    loc: {
      start: {
        line: 1,
        column: 7,
      },
      end: {
        line: 1,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: " ",
    isTemplate: false,
    range: [8, 9],
    loc: {
      start: {
        line: 1,
        column: 8,
      },
      end: {
        line: 1,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: "${content}",
    isTemplate: true,
    range: [9, 19],
    loc: {
      start: {
        line: 1,
        column: 9,
      },
      end: {
        line: 1,
        column: 19,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: " ",
    isTemplate: false,
    range: [19, 20],
    loc: {
      start: {
        line: 1,
        column: 19,
      },
      end: {
        line: 1,
        column: 20,
      },
    },
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [20, 29],
    loc: {
      start: {
        line: 1,
        column: 20,
      },
      end: {
        line: 1,
        column: 29,
      },
    },
  },
];
