import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 198],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 23,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      name: "div",
      selfClosing: false,
      attributes: [],
      range: [0, 12],
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 2,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<div",
        range: [0, 4],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [4, 5],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTag,
        value: "</DIV>",
        range: [6, 12],
        loc: {
          start: {
            line: 2,
          },
          end: {
            line: 2,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [5, 6],
          loc: {
            start: {
              line: 1,
            },
            end: {
              line: 2,
            },
          },
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [12, 14],
      loc: {
        start: {
          line: 2,
        },
        end: {
          line: 4,
        },
      },
    },
    {
      type: NodeTypes.Tag,
      name: "div",
      range: [14, 25],
      attributes: [],
      children: [],
      selfClosing: false,
      loc: {
        start: {
          line: 4,
        },
        end: {
          line: 4,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<DIV",
        range: [14, 18],
        loc: {
          start: {
            line: 4,
          },
          end: {
            line: 4,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [18, 19],
        loc: {
          start: {
            line: 4,
          },
          end: {
            line: 4,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTag,
        value: "</div>",
        range: [19, 25],
        loc: {
          start: {
            line: 4,
          },
          end: {
            line: 4,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [25, 27],
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
      type: NodeTypes.Tag,
      selfClosing: false,
      attributes: [],
      name: "span",
      range: [27, 41],
      loc: {
        start: {
          line: 6,
        },
        end: {
          line: 7,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<span",
        range: [27, 32],
        loc: {
          start: {
            line: 6,
          },
          end: {
            line: 6,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [32, 33],
        loc: {
          start: {
            line: 6,
          },
          end: {
            line: 6,
          },
        },
      },
      children: [
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [33, 34],
          loc: {
            start: {
              line: 6,
            },
            end: {
              line: 7,
            },
          },
        },
      ],
      close: {
        type: NodeTypes.CloseTag,
        value: "</span>",
        range: [34, 41],
        loc: {
          start: {
            line: 7,
          },
          end: {
            line: 7,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [41, 43],
      loc: {
        start: {
          line: 7,
        },
        end: {
          line: 9,
        },
      },
    },
    {
      type: NodeTypes.Tag,
      selfClosing: false,
      name: "span",
      range: [43, 56],
      attributes: [],
      children: [],
      loc: {
        start: {
          line: 9,
        },
        end: {
          line: 9,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<SPAN",
        range: [43, 48],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: ">",
        range: [48, 49],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTag,
        value: "</SPAN>",
        range: [49, 56],
        loc: {
          start: {
            line: 9,
          },
          end: {
            line: 9,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [56, 58],
      loc: {
        start: {
          line: 9,
        },
        end: {
          line: 11,
        },
      },
    },
    {
      type: NodeTypes.ScriptTag,
      range: [58, 75],
      attributes: [],
      loc: {
        start: {
          line: 11,
        },
        end: {
          line: 11,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartScript,
        value: "<script",
        range: [58, 65],
        loc: {
          start: {
            line: 11,
          },
          end: {
            line: 11,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndScript,
        value: ">",
        range: [65, 66],
        loc: {
          start: {
            line: 11,
          },
          end: {
            line: 11,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagScript,
        value: "</script>",
        range: [66, 75],
        loc: {
          start: {
            line: 11,
          },
          end: {
            line: 11,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [75, 76],
      loc: {
        start: {
          line: 11,
        },
        end: {
          line: 12,
        },
      },
    },
    {
      type: NodeTypes.ScriptTag,
      attributes: [],
      range: [76, 94],
      loc: {
        start: {
          line: 12,
        },
        end: {
          line: 13,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartScript,
        value: "<SCRIPT",
        range: [76, 83],
        loc: {
          start: {
            line: 12,
          },
          end: {
            line: 12,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndScript,
        value: ">",
        range: [83, 84],
        loc: {
          start: {
            line: 12,
          },
          end: {
            line: 12,
          },
        },
      },
      value: {
        type: NodeTypes.ScriptTagContent,
        value: "\n",
        range: [84, 85],
        loc: {
          start: {
            line: 12,
          },
          end: {
            line: 13,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagScript,
        value: "</SCRIPT>",
        range: [85, 94],
        loc: {
          start: {
            line: 13,
          },
          end: {
            line: 13,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      range: [94, 95],
      loc: {
        start: {
          line: 13,
        },
        end: {
          line: 14,
        },
      },
      value: "\n",
    },
    {
      type: NodeTypes.ScriptTag,
      attributes: [],
      range: [95, 112],
      loc: {
        start: {
          line: 14,
        },
        end: {
          line: 14,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartScript,
        value: "<SCRIPT",
        range: [95, 102],
        loc: {
          start: {
            line: 14,
          },
          end: {
            line: 14,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndScript,
        value: ">",
        range: [102, 103],
        loc: {
          start: {
            line: 14,
          },
          end: {
            line: 14,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagScript,
        value: "</script>",
        range: [103, 112],
        loc: {
          start: {
            line: 14,
          },
          end: {
            line: 14,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [112, 113],
      loc: {
        start: {
          line: 14,
        },
        end: {
          line: 15,
        },
      },
    },
    {
      type: NodeTypes.ScriptTag,
      range: [113, 131],
      attributes: [],
      loc: {
        start: {
          line: 15,
        },
        end: {
          line: 16,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartScript,
        value: "<script",
        range: [113, 120],
        loc: {
          start: {
            line: 15,
          },
          end: {
            line: 15,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndScript,
        value: ">",
        range: [120, 121],
        loc: {
          start: {
            line: 15,
          },
          end: {
            line: 15,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagScript,
        value: "</SCRIPT>",
        range: [122, 131],
        loc: {
          start: {
            line: 16,
          },
          end: {
            line: 16,
          },
        },
      },
      value: {
        type: NodeTypes.ScriptTagContent,
        value: "\n",
        range: [121, 122],
        loc: {
          start: {
            line: 15,
          },
          end: {
            line: 16,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [131, 133],
      loc: {
        start: {
          line: 16,
        },
        end: {
          line: 18,
        },
      },
    },
    {
      type: NodeTypes.StyleTag,
      range: [133, 148],
      attributes: [],
      loc: {
        start: {
          line: 18,
        },
        end: {
          line: 18,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartStyle,
        value: "<style",
        range: [133, 139],
        loc: {
          start: {
            line: 18,
          },
          end: {
            line: 18,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndStyle,
        value: ">",
        range: [139, 140],
        loc: {
          start: {
            line: 18,
          },
          end: {
            line: 18,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagStyle,
        value: "</style>",
        range: [140, 148],
        loc: {
          start: {
            line: 18,
          },
          end: {
            line: 18,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [148, 149],
      loc: {
        start: {
          line: 18,
        },
        end: {
          line: 19,
        },
      },
    },
    {
      type: NodeTypes.StyleTag,
      range: [149, 165],
      attributes: [],
      loc: {
        start: {
          line: 19,
        },
        end: {
          line: 20,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartStyle,
        value: "<STYLE",
        range: [149, 155],
        loc: {
          start: {
            line: 19,
          },
          end: {
            line: 19,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndStyle,
        value: ">",
        range: [155, 156],
        loc: {
          start: {
            line: 19,
          },
          end: {
            line: 19,
          },
        },
      },
      value: {
        type: NodeTypes.StyleTagContent,
        value: "\n",
        range: [156, 157],
        loc: {
          start: {
            line: 19,
          },
          end: {
            line: 20,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagStyle,
        value: "</STYLE>",
        range: [157, 165],
        loc: {
          start: {
            line: 20,
          },
          end: {
            line: 20,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [165, 166],
      loc: {
        start: {
          line: 20,
        },
        end: {
          line: 21,
        },
      },
    },
    {
      type: NodeTypes.StyleTag,
      range: [166, 181],
      attributes: [],
      loc: {
        start: {
          line: 21,
        },
        end: {
          line: 21,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartStyle,
        value: "<STYLE",
        range: [166, 172],
        loc: {
          start: {
            line: 21,
          },
          end: {
            line: 21,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndStyle,
        value: ">",
        range: [172, 173],
        loc: {
          start: {
            line: 21,
          },
          end: {
            line: 21,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagStyle,
        value: "</style>",
        range: [173, 181],
        loc: {
          start: {
            line: 21,
          },
          end: {
            line: 21,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [181, 182],
      loc: {
        start: {
          line: 21,
        },
        end: {
          line: 22,
        },
      },
    },
    {
      type: NodeTypes.StyleTag,
      attributes: [],
      range: [182, 197],
      loc: {
        start: {
          line: 22,
        },
        end: {
          line: 22,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStartStyle,
        value: "<style",
        range: [182, 188],
        loc: {
          start: {
            line: 22,
          },
          end: {
            line: 22,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEndStyle,
        value: ">",
        range: [188, 189],
        loc: {
          start: {
            line: 22,
          },
          end: {
            line: 22,
          },
        },
      },
      close: {
        type: NodeTypes.CloseTagStyle,
        value: "</STYLE>",
        range: [189, 197],
        loc: {
          start: {
            line: 22,
          },
          end: {
            line: 22,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [197, 198],
      loc: {
        start: {
          line: 22,
        },
        end: {
          line: 23,
        },
      },
    },
  ],
};
