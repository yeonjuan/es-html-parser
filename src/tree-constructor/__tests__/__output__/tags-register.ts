export default {
  type: "Document",
  range: [0, 198],
  children: [
    {
      type: "Tag",
      range: [0, 12],
      loc: { start: { line: 1, column: 0 }, end: { line: 2, column: 6 } },
      attributes: [],
      children: [
        {
          type: "Text",
          value: "\n",
          loc: { start: { line: 1, column: 5 }, end: { line: 2, column: 0 } },
          range: [5, 6],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<div",
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 4 } },
        range: [0, 4],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: { start: { line: 1, column: 4 }, end: { line: 1, column: 5 } },
        range: [4, 5],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</DIV>",
        loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 6 } },
        range: [6, 12],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 2, column: 6 }, end: { line: 4, column: 0 } },
      range: [12, 14],
    },
    {
      type: "Tag",
      range: [14, 25],
      loc: { start: { line: 4, column: 0 }, end: { line: 4, column: 11 } },
      attributes: [],
      children: [],
      openStart: {
        type: "OpenTagStart",
        value: "<DIV",
        loc: { start: { line: 4, column: 0 }, end: { line: 4, column: 4 } },
        range: [14, 18],
      },
      name: "div",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: { start: { line: 4, column: 4 }, end: { line: 4, column: 5 } },
        range: [18, 19],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</div>",
        loc: { start: { line: 4, column: 5 }, end: { line: 4, column: 11 } },
        range: [19, 25],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 4, column: 11 }, end: { line: 6, column: 0 } },
      range: [25, 27],
    },
    {
      type: "Tag",
      range: [27, 41],
      loc: { start: { line: 6, column: 0 }, end: { line: 7, column: 7 } },
      attributes: [],
      children: [
        {
          type: "Text",
          value: "\n",
          loc: { start: { line: 6, column: 6 }, end: { line: 7, column: 0 } },
          range: [33, 34],
        },
      ],
      openStart: {
        type: "OpenTagStart",
        value: "<span",
        loc: { start: { line: 6, column: 0 }, end: { line: 6, column: 5 } },
        range: [27, 32],
      },
      name: "span",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: { start: { line: 6, column: 5 }, end: { line: 6, column: 6 } },
        range: [32, 33],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</span>",
        loc: { start: { line: 7, column: 0 }, end: { line: 7, column: 7 } },
        range: [34, 41],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 7, column: 7 }, end: { line: 9, column: 0 } },
      range: [41, 43],
    },
    {
      type: "Tag",
      range: [43, 56],
      loc: { start: { line: 9, column: 0 }, end: { line: 9, column: 13 } },
      attributes: [],
      children: [],
      openStart: {
        type: "OpenTagStart",
        value: "<SPAN",
        loc: { start: { line: 9, column: 0 }, end: { line: 9, column: 5 } },
        range: [43, 48],
      },
      name: "span",
      openEnd: {
        type: "OpenTagEnd",
        value: ">",
        loc: { start: { line: 9, column: 5 }, end: { line: 9, column: 6 } },
        range: [48, 49],
      },
      selfClosing: false,
      close: {
        type: "CloseTag",
        value: "</SPAN>",
        loc: { start: { line: 9, column: 6 }, end: { line: 9, column: 13 } },
        range: [49, 56],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 9, column: 13 }, end: { line: 11, column: 0 } },
      range: [56, 58],
    },
    {
      type: "ScriptTag",
      range: [58, 75],
      loc: { start: { line: 11, column: 0 }, end: { line: 11, column: 17 } },
      attributes: [],
      openStart: {
        type: "OpenScriptTagStart",
        value: "<script",
        loc: { start: { line: 11, column: 0 }, end: { line: 11, column: 7 } },
        range: [58, 65],
      },
      openEnd: {
        type: "OpenScriptTagEnd",
        value: ">",
        loc: { start: { line: 11, column: 7 }, end: { line: 11, column: 8 } },
        range: [65, 66],
      },
      close: {
        type: "CloseScriptTag",
        value: "</script>",
        loc: { start: { line: 11, column: 8 }, end: { line: 11, column: 17 } },
        range: [66, 75],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 11, column: 17 }, end: { line: 12, column: 0 } },
      range: [75, 76],
    },
    {
      type: "ScriptTag",
      range: [76, 94],
      loc: { start: { line: 12, column: 0 }, end: { line: 13, column: 9 } },
      attributes: [],
      openStart: {
        type: "OpenScriptTagStart",
        value: "<SCRIPT",
        loc: { start: { line: 12, column: 0 }, end: { line: 12, column: 7 } },
        range: [76, 83],
      },
      openEnd: {
        type: "OpenScriptTagEnd",
        value: ">",
        loc: { start: { line: 12, column: 7 }, end: { line: 12, column: 8 } },
        range: [83, 84],
      },
      value: {
        type: "ScriptTagContent",
        value: "\n",
        loc: { start: { line: 12, column: 8 }, end: { line: 13, column: 0 } },
        range: [84, 85],
      },
      close: {
        type: "CloseScriptTag",
        value: "</SCRIPT>",
        loc: { start: { line: 13, column: 0 }, end: { line: 13, column: 9 } },
        range: [85, 94],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 13, column: 9 }, end: { line: 14, column: 0 } },
      range: [94, 95],
    },
    {
      type: "ScriptTag",
      range: [95, 112],
      loc: { start: { line: 14, column: 0 }, end: { line: 14, column: 17 } },
      attributes: [],
      openStart: {
        type: "OpenScriptTagStart",
        value: "<SCRIPT",
        loc: { start: { line: 14, column: 0 }, end: { line: 14, column: 7 } },
        range: [95, 102],
      },
      openEnd: {
        type: "OpenScriptTagEnd",
        value: ">",
        loc: { start: { line: 14, column: 7 }, end: { line: 14, column: 8 } },
        range: [102, 103],
      },
      close: {
        type: "CloseScriptTag",
        value: "</script>",
        loc: { start: { line: 14, column: 8 }, end: { line: 14, column: 17 } },
        range: [103, 112],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 14, column: 17 }, end: { line: 15, column: 0 } },
      range: [112, 113],
    },
    {
      type: "ScriptTag",
      range: [113, 131],
      loc: { start: { line: 15, column: 0 }, end: { line: 16, column: 9 } },
      attributes: [],
      openStart: {
        type: "OpenScriptTagStart",
        value: "<script",
        loc: { start: { line: 15, column: 0 }, end: { line: 15, column: 7 } },
        range: [113, 120],
      },
      openEnd: {
        type: "OpenScriptTagEnd",
        value: ">",
        loc: { start: { line: 15, column: 7 }, end: { line: 15, column: 8 } },
        range: [120, 121],
      },
      value: {
        type: "ScriptTagContent",
        value: "\n",
        loc: { start: { line: 15, column: 8 }, end: { line: 16, column: 0 } },
        range: [121, 122],
      },
      close: {
        type: "CloseScriptTag",
        value: "</SCRIPT>",
        loc: { start: { line: 16, column: 0 }, end: { line: 16, column: 9 } },
        range: [122, 131],
      },
    },
    {
      type: "Text",
      value: "\n\n",
      loc: { start: { line: 16, column: 9 }, end: { line: 18, column: 0 } },
      range: [131, 133],
    },
    {
      type: "StyleTag",
      range: [133, 148],
      loc: { start: { line: 18, column: 0 }, end: { line: 18, column: 15 } },
      attributes: [],
      openStart: {
        type: "OpenStyleTagStart",
        value: "<style",
        loc: { start: { line: 18, column: 0 }, end: { line: 18, column: 6 } },
        range: [133, 139],
      },
      openEnd: {
        type: "OpenStyleTagEnd",
        value: ">",
        loc: { start: { line: 18, column: 6 }, end: { line: 18, column: 7 } },
        range: [139, 140],
      },
      close: {
        type: "CloseStyleTag",
        value: "</style>",
        loc: { start: { line: 18, column: 7 }, end: { line: 18, column: 15 } },
        range: [140, 148],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 18, column: 15 }, end: { line: 19, column: 0 } },
      range: [148, 149],
    },
    {
      type: "StyleTag",
      range: [149, 165],
      loc: { start: { line: 19, column: 0 }, end: { line: 20, column: 8 } },
      attributes: [],
      openStart: {
        type: "OpenStyleTagStart",
        value: "<STYLE",
        loc: { start: { line: 19, column: 0 }, end: { line: 19, column: 6 } },
        range: [149, 155],
      },
      openEnd: {
        type: "OpenStyleTagEnd",
        value: ">",
        loc: { start: { line: 19, column: 6 }, end: { line: 19, column: 7 } },
        range: [155, 156],
      },
      value: {
        type: "StyleTagContent",
        value: "\n",
        loc: { start: { line: 19, column: 7 }, end: { line: 20, column: 0 } },
        range: [156, 157],
      },
      close: {
        type: "CloseStyleTag",
        value: "</STYLE>",
        loc: { start: { line: 20, column: 0 }, end: { line: 20, column: 8 } },
        range: [157, 165],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 20, column: 8 }, end: { line: 21, column: 0 } },
      range: [165, 166],
    },
    {
      type: "StyleTag",
      range: [166, 181],
      loc: { start: { line: 21, column: 0 }, end: { line: 21, column: 15 } },
      attributes: [],
      openStart: {
        type: "OpenStyleTagStart",
        value: "<STYLE",
        loc: { start: { line: 21, column: 0 }, end: { line: 21, column: 6 } },
        range: [166, 172],
      },
      openEnd: {
        type: "OpenStyleTagEnd",
        value: ">",
        loc: { start: { line: 21, column: 6 }, end: { line: 21, column: 7 } },
        range: [172, 173],
      },
      close: {
        type: "CloseStyleTag",
        value: "</style>",
        loc: { start: { line: 21, column: 7 }, end: { line: 21, column: 15 } },
        range: [173, 181],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 21, column: 15 }, end: { line: 22, column: 0 } },
      range: [181, 182],
    },
    {
      type: "StyleTag",
      range: [182, 197],
      loc: { start: { line: 22, column: 0 }, end: { line: 22, column: 15 } },
      attributes: [],
      openStart: {
        type: "OpenStyleTagStart",
        value: "<style",
        loc: { start: { line: 22, column: 0 }, end: { line: 22, column: 6 } },
        range: [182, 188],
      },
      openEnd: {
        type: "OpenStyleTagEnd",
        value: ">",
        loc: { start: { line: 22, column: 6 }, end: { line: 22, column: 7 } },
        range: [188, 189],
      },
      close: {
        type: "CloseStyleTag",
        value: "</STYLE>",
        loc: { start: { line: 22, column: 7 }, end: { line: 22, column: 15 } },
        range: [189, 197],
      },
    },
    {
      type: "Text",
      value: "\n",
      loc: { start: { line: 22, column: 15 }, end: { line: 23, column: 0 } },
      range: [197, 198],
    },
  ],
  loc: { start: { line: 1, column: 0 }, end: { line: 23, column: 0 } },
};
