import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 14],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 3,
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
      },
      end: {
        line: 3,
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
      },
      end: {
        line: 3,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  ",
    range: [19, 22],
    loc: {
      start: {
        line: 3,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [22, 29],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [29, 30],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('')\n  ",
    range: [30, 53],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 6,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [53, 62],
    loc: {
      start: {
        line: 6,
      },
      end: {
        line: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [62, 63],
    loc: {
      start: {
        line: 6,
      },
      end: {
        line: 7,
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
      },
      end: {
        line: 7,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [69, 84],
    loc: {
      start: {
        line: 7,
      },
      end: {
        line: 10,
      },
    },
  },
];
