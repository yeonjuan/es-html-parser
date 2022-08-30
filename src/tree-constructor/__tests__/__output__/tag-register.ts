import { NodeTypes, TokenTypes } from "../../../constants";
export default {
  type: NodeTypes.Document,
  range: [0, 58],
  children: [
    { type: NodeTypes.Text, value: "\n", range: [0, 1] },
    {
      type: NodeTypes.Tag,
      range: [1, 13],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [1, 5],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [5, 6] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</DIV>", range: [7, 13] },
      children: [{ type: NodeTypes.Text, value: "\n", range: [6, 7] }],
    },
    { type: NodeTypes.Text, value: "\n\n", range: [13, 15] },
    {
      type: NodeTypes.Tag,
      range: [15, 26],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<DIV",
        range: [15, 19],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [19, 20] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</div>", range: [20, 26] },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [26, 28] },
    {
      type: NodeTypes.Tag,
      range: [28, 42],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<span",
        range: [28, 33],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [33, 34] },
      name: "span",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</span>", range: [35, 42] },
      children: [{ type: NodeTypes.Text, value: "\n", range: [34, 35] }],
    },
    { type: NodeTypes.Text, value: "\n\n", range: [42, 44] },
    {
      type: NodeTypes.Tag,
      range: [44, 57],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<SPAN",
        range: [44, 49],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [49, 50] },
      name: "span",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</SPAN>", range: [50, 57] },
    },
    { type: NodeTypes.Text, value: "\n", range: [57, 58] },
  ],
};
