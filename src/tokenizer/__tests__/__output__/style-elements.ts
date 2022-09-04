import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
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
    type: TokenTypes.OpenTagStartStyle,
    value: "<style",
    range: [14, 20],
    loc: {
      start: {
        line: 3,
        column: 0,
      },
      end: {
        line: 3,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEndStyle,
    value: ">",
    range: [20, 21],
    loc: {
      start: {
        line: 3,
        column: 6,
      },
      end: {
        line: 3,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    value: "\n  body {\n    background-color: white;\n  }\n",
    range: [21, 64],
    loc: {
      start: {
        column: 7,
        line: 3,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTagStyle,
    value: "</style>",
    range: [64, 72],
    loc: {
      start: {
        column: 0,
        line: 7,
      },
      end: {
        column: 8,
        line: 7,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [72, 74],
    loc: {
      start: {
        column: 8,
        line: 7,
      },
      end: {
        line: 9,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [74, 78],
    loc: {
      start: {
        line: 9,
        column: 0,
      },
      end: {
        line: 9,
        column: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [78, 79],
    loc: {
      start: {
        column: 4,
        line: 9,
      },
      end: {
        line: 9,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [79, 82],
    loc: {
      start: {
        line: 9,
        column: 5,
      },
      end: {
        line: 10,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStartStyle,
    value: "<style",
    range: [82, 88],
    loc: {
      start: {
        column: 2,
        line: 10,
      },
      end: {
        line: 10,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEndStyle,
    value: ">",
    range: [88, 89],
    loc: {
      start: {
        line: 10,
        column: 8,
      },
      end: {
        line: 10,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    value: "\n    body {\n      background-color: red;\n    }\n  ",
    range: [89, 138],
    loc: {
      start: {
        column: 9,
        line: 10,
      },
      end: {
        line: 14,
        column: 2,
      },
    },
  },
  {
    type: TokenTypes.CloseTagStyle,
    value: "</style>",
    range: [138, 146],
    loc: {
      start: {
        line: 14,
        column: 2,
      },
      end: {
        line: 14,
        column: 10,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [146, 147],
    loc: {
      start: {
        line: 14,
        column: 10,
      },
      end: {
        line: 15,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [147, 153],
    loc: {
      start: {
        line: 15,
        column: 0,
      },
      end: {
        line: 15,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [153, 168],
    loc: {
      start: {
        column: 6,
        line: 15,
      },
      end: {
        line: 18,
        column: 0,
      },
    },
  },
];
