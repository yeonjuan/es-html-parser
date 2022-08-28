import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  content: {
    children: [
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n",
            range: [0, 0],
          },
        },
      },
      {
        type: NodeTypes.Comment,
        content: {
          start: {
            type: TokenTypes.CommentStart,
            value: "<!--",
            range: [1, 4],
          },
          value: {
            type: TokenTypes.CommentContent,
            value: " start comment ",
            range: [5, 19],
          },
          end: {
            type: TokenTypes.CommentEnd,
            value: "-->",
            range: [20, 22],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
            range: [23, 24],
          },
        },
      },
      {
        type: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
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
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  value: "\n  ",
                  range: [30, 32],
                },
              },
            },
            {
              type: NodeTypes.Comment,
              content: {
                start: {
                  type: TokenTypes.CommentStart,
                  value: "<!--",
                  range: [33, 36],
                },
                value: {
                  type: TokenTypes.CommentContent,
                  value: " \n    nested \n    comment \n   ",
                  range: [37, 66],
                },
                end: {
                  type: TokenTypes.CommentEnd,
                  value: "-->",
                  range: [67, 69],
                },
              },
            },
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  value: "\n",
                  range: [70, 70],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [71, 76],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
            range: [77, 78],
          },
        },
      },
      {
        type: NodeTypes.Comment,
        content: {
          start: {
            type: TokenTypes.CommentStart,
            value: "<!--",
            range: [79, 82],
          },
          value: {
            type: TokenTypes.CommentContent,
            value: " end comment ",
            range: [83, 95],
          },
          end: {
            type: TokenTypes.CommentEnd,
            value: "-->",
            range: [96, 98],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n",
            range: [99, 99],
          },
        },
      },
    ],
  },
};
