import { NodeTypes, TokenTypes } from "../../../constants";
export default {
  type: NodeTypes.Document,
  range: [0, 57],
  children: [
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [0, 0],
    },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [1, 4],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [5, 5],
      },
      name: "div",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</DIV>",
        range: [7, 12],
      },
      children: [
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [6, 6],
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [13, 14],
    },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<DIV",
        range: [15, 18],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [19, 19],
      },
      name: "div",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</div>",
        range: [20, 25],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [26, 27],
    },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<span",
        range: [28, 32],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [33, 33],
      },
      name: "span",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</span>",
        range: [35, 41],
      },

      children: [
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [34, 34],
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [42, 43],
    },
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<SPAN",
        range: [44, 48],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [49, 49],
      },
      name: "span",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</SPAN>",
        range: [50, 56],
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [57, 57],
    },
  ],
};
