import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  content: {
    children: [
      {
        type: NodeTypes.Text,
        value: "\n",
        range: [0, 0],
      },
      {
        type: NodeTypes.Comment,
        start: {
          type: TokenTypes.CommentStart,
          value: "<!--",
          range: [1, 4],
        },
        end: {
          type: TokenTypes.CommentEnd,
          value: "-->",
          range: [20, 22],
        },
        content: {
          value: {
            type: TokenTypes.CommentContent,
            value: " start comment ",
            range: [5, 19],
          },
        },
      },
      {
        type: NodeTypes.Text,
        value: "\n\n",
        range: [23, 24],
      },
      {
        type: NodeTypes.Tag,
        openStart: {
          type: TokenTypes.OpenTagStart,
          value: "<div",
          range: [25, 28],
        },
        openEnd: {
          type: TokenTypes.OpenTagEnd,
          value: ">",
          range: [29, 29],
        },
        name: "div",
        selfClosing: false,
        close: {
          type: TokenTypes.CloseTag,
          value: "</div>",
          range: [71, 76],
        },
        content: {
          children: [
            {
              type: NodeTypes.Text,
              value: "\n  ",
              range: [30, 32],
            },
            {
              type: NodeTypes.Comment,
              start: {
                type: TokenTypes.CommentStart,
                value: "<!--",
                range: [33, 36],
              },
              end: {
                type: TokenTypes.CommentEnd,
                value: "-->",
                range: [67, 69],
              },
              content: {
                value: {
                  type: TokenTypes.CommentContent,
                  value: " \n    nested \n    comment \n   ",
                  range: [37, 66],
                },
              },
            },
            {
              type: NodeTypes.Text,
              value: "\n",
              range: [70, 70],
            },
          ],
        },
      },
      {
        type: NodeTypes.Text,
        value: "\n\n",
        range: [77, 78],
      },
      {
        type: NodeTypes.Comment,
        start: {
          type: TokenTypes.CommentStart,
          value: "<!--",
          range: [79, 82],
        },
        end: {
          type: TokenTypes.CommentEnd,
          value: "-->",
          range: [96, 98],
        },
        content: {
          value: {
            type: TokenTypes.CommentContent,
            value: " end comment ",
            range: [83, 95],
          },
        },
      },
      {
        type: NodeTypes.Text,
        value: "\n",
        range: [99, 99],
      },
    ],
  },
};
