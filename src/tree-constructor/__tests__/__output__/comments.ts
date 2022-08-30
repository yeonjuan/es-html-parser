import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 100],
  children: [
    { type: NodeTypes.Text, value: "\n", range: [0, 1] },
    {
      type: NodeTypes.Comment,
      range: [1, 23],
      start: { type: TokenTypes.CommentStart, value: "<!--", range: [1, 5] },
      end: { type: TokenTypes.CommentEnd, value: "-->", range: [20, 23] },
      value: {
        type: TokenTypes.CommentContent,
        value: " start comment ",
        range: [5, 20],
      },
    },
    { type: NodeTypes.Text, value: "\n\n", range: [23, 25] },
    {
      type: NodeTypes.Tag,
      range: [25, 77],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [25, 29],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [29, 30] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</div>", range: [71, 77] },
      children: [
        { type: NodeTypes.Text, value: "\n  ", range: [30, 33] },
        {
          type: NodeTypes.Comment,
          range: [33, 70],
          start: {
            type: TokenTypes.CommentStart,
            value: "<!--",
            range: [33, 37],
          },
          end: { type: TokenTypes.CommentEnd, value: "-->", range: [67, 70] },
          value: {
            type: TokenTypes.CommentContent,
            value: " \n    nested \n    comment \n   ",
            range: [37, 67],
          },
        },
        { type: NodeTypes.Text, value: "\n", range: [70, 71] },
      ],
    },
    { type: NodeTypes.Text, value: "\n\n", range: [77, 79] },
    {
      type: NodeTypes.Comment,
      range: [79, 99],
      start: { type: TokenTypes.CommentStart, value: "<!--", range: [79, 83] },
      end: { type: TokenTypes.CommentEnd, value: "-->", range: [96, 99] },
      value: {
        type: TokenTypes.CommentContent,
        value: " end comment ",
        range: [83, 96],
      },
    },
    { type: NodeTypes.Text, value: "\n", range: [99, 100] },
  ],
};
