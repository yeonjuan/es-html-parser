import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
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
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
    loc: {
      start: {
        line: 1,
        column: 4,
      },
      end: {
        line: 1,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [5, 6],
    loc: {
      start: {
        line: 1,
        column: 5,
      },
      end: {
        line: 2,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</DIV>",
    range: [6, 12],
    loc: {
      start: {
        line: 2,
        column: 0,
      },
      end: {
        line: 2,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n\n",
    range: [12, 14],
    loc: {
      start: {
        line: 2,
        column: 6,
      },
      end: {
        line: 4,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<DIV",
    range: [14, 18],
    loc: {
      start: {
        line: 4,
        column: 0,
      },
      end: {
        line: 4,
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
        line: 4,
        column: 4,
      },
      end: {
        line: 4,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [19, 25],
    loc: {
      start: {
        line: 4,
        column: 5,
      },
      end: {
        line: 4,
        column: 11,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n\n",
    range: [25, 27],
    loc: {
      start: {
        line: 4,
        column: 11,
      },
      end: {
        line: 6,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<span",
    range: [27, 32],
    loc: {
      start: {
        line: 6,
        column: 0,
      },
      end: {
        line: 6,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [32, 33],
    loc: {
      start: {
        line: 6,
        column: 5,
      },
      end: {
        line: 6,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [33, 34],
    loc: {
      start: {
        line: 6,
        column: 6,
      },
      end: {
        line: 7,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</span>",
    range: [34, 41],
    loc: {
      start: {
        line: 7,
        column: 0,
      },
      end: {
        line: 7,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n\n",
    range: [41, 43],
    loc: {
      start: {
        line: 7,
        column: 7,
      },
      end: {
        line: 9,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<SPAN",
    range: [43, 48],
    loc: {
      start: {
        line: 9,
        column: 0,
      },
      end: {
        line: 9,
        column: 5,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [48, 49],
    loc: {
      start: {
        line: 9,
        column: 5,
      },
      end: {
        line: 9,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</SPAN>",
    range: [49, 56],
    loc: {
      start: {
        line: 9,
        column: 6,
      },
      end: {
        line: 9,
        column: 13,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n\n",
    range: [56, 58],
    loc: {
      start: {
        line: 9,
        column: 13,
      },
      end: {
        line: 11,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [58, 65],
    loc: {
      start: {
        line: 11,
        column: 0,
      },
      end: {
        line: 11,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [65, 66],
    loc: {
      start: {
        line: 11,
        column: 7,
      },
      end: {
        line: 11,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [66, 75],
    loc: {
      start: {
        column: 8,
        line: 11,
      },
      end: {
        line: 11,
        column: 17,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [75, 76],
    loc: {
      start: {
        line: 11,
        column: 17,
      },
      end: {
        line: 12,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<SCRIPT",
    range: [76, 83],
    loc: {
      start: {
        line: 12,
        column: 0,
      },
      end: {
        line: 12,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [83, 84],
    loc: {
      start: {
        line: 12,
        column: 7,
      },
      end: {
        line: 12,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    isTemplate: false,
    value: "\n",
    range: [84, 85],
    loc: {
      start: {
        line: 12,
        column: 8,
      },
      end: {
        line: 13,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</SCRIPT>",
    range: [85, 94],
    loc: {
      start: {
        line: 13,
        column: 0,
      },
      end: {
        line: 13,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [94, 95],
    loc: {
      start: {
        line: 13,
        column: 9,
      },
      end: {
        line: 14,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<SCRIPT",
    range: [95, 102],
    loc: {
      start: {
        line: 14,
        column: 0,
      },
      end: {
        line: 14,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [102, 103],
    loc: {
      start: {
        line: 14,
        column: 7,
      },
      end: {
        line: 14,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [103, 112],
    loc: {
      start: {
        line: 14,
        column: 8,
      },
      end: {
        line: 14,
        column: 17,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [112, 113],
    loc: {
      start: {
        column: 17,
        line: 14,
      },
      end: {
        line: 15,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [113, 120],
    loc: {
      start: {
        line: 15,
        column: 0,
      },
      end: {
        line: 15,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [120, 121],
    loc: {
      start: {
        line: 15,
        column: 7,
      },
      end: {
        line: 15,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    isTemplate: false,
    value: "\n",
    range: [121, 122],
    loc: {
      start: {
        line: 15,
        column: 8,
      },
      end: {
        line: 16,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</SCRIPT>",
    range: [122, 131],
    loc: {
      start: {
        line: 16,
        column: 0,
      },
      end: {
        line: 16,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n\n",
    range: [131, 133],
    loc: {
      start: {
        line: 16,
        column: 9,
      },
      end: {
        line: 18,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<style",
    range: [133, 139],
    loc: {
      start: {
        line: 18,
        column: 0,
      },
      end: {
        line: 18,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [139, 140],
    loc: {
      start: {
        line: 18,
        column: 6,
      },
      end: {
        line: 18,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [140, 148],
    loc: {
      start: {
        line: 18,
        column: 7,
      },
      end: {
        line: 18,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [148, 149],
    loc: {
      start: {
        line: 18,
        column: 15,
      },
      end: {
        line: 19,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<STYLE",
    range: [149, 155],
    loc: {
      start: {
        line: 19,
        column: 0,
      },
      end: {
        line: 19,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [155, 156],
    loc: {
      start: {
        line: 19,
        column: 6,
      },
      end: {
        line: 19,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.StyleTagContent,
    isTemplate: false,
    value: "\n",
    range: [156, 157],
    loc: {
      start: {
        line: 19,
        column: 7,
      },
      end: {
        line: 20,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</STYLE>",
    range: [157, 165],
    loc: {
      start: {
        line: 20,
        column: 0,
      },
      end: {
        line: 20,
        column: 8,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [165, 166],
    loc: {
      start: {
        line: 20,
        column: 8,
      },
      end: {
        line: 21,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<STYLE",
    range: [166, 172],
    loc: {
      start: {
        line: 21,
        column: 0,
      },
      end: {
        line: 21,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [172, 173],
    loc: {
      start: {
        line: 21,
        column: 6,
      },
      end: {
        line: 21,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</style>",
    range: [173, 181],
    loc: {
      start: {
        line: 21,
        column: 7,
      },
      end: {
        line: 21,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [181, 182],
    loc: {
      start: {
        line: 21,
        column: 15,
      },
      end: {
        line: 22,
        column: 0,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagStart,
    value: "<style",
    range: [182, 188],
    loc: {
      start: {
        line: 22,
        column: 0,
      },
      end: {
        line: 22,
        column: 6,
      },
    },
  },
  {
    type: TokenTypes.OpenStyleTagEnd,
    value: ">",
    range: [188, 189],
    loc: {
      start: {
        line: 22,
        column: 6,
      },
      end: {
        line: 22,
        column: 7,
      },
    },
  },
  {
    type: TokenTypes.CloseStyleTag,
    value: "</STYLE>",
    range: [189, 197],
    loc: {
      start: {
        line: 22,
        column: 7,
      },
      end: {
        line: 22,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.Text,
    isTemplate: false,
    value: "\n",
    range: [197, 198],
    loc: {
      start: {
        line: 22,
        column: 15,
      },
      end: {
        line: 23,
        column: 0,
      },
    },
  },
];
