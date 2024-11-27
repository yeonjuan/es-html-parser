import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "opening text\n\n",
    range: [0, 14],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: {
        line: 3,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [14, 18],
    loc: {
      start: {
        line: 3,
        column: 0,
      },
      end: {
        line: 3,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 19],
    loc: {
      start: {
        line: 3,
        column: 4,
      },
      end: {
        line: 3,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n  ",
    range: [19, 22],
    loc: {
      start: {
        line: 3,
        column: 5,
      },
      end: {
        line: 4,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [22, 29],
    loc: {
      start: {
        line: 4,
        column: 2,
      },
      end: {
        line: 4,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [29, 30],
    loc: {
      start: {
        line: 4,
        column: 9,
      },
      end: {
        line: 4,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    isTemplate: false,
    value: "\n    console.log('')\n  ",
    range: [30, 53],
    loc: {
      start: {
        line: 4,
        column: 10,
      },
      end: {
        line: 6,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [53, 62],
    loc: {
      start: {
        line: 6,
        column: 2,
      },
      end: {
        line: 6,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [62, 63],
    loc: {
      start: {
        line: 6,
        column: 11,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [63, 69],
    loc: {
      start: {
        line: 7,
        column: 0,
      },
      end: {
        line: 7,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n\nclosing text\n",
    range: [69, 84],
    loc: {
      start: {
        line: 7,
        column: 6,
      },
      end: {
        line: 10,
        column: 0,
      },
    },
  },
];
