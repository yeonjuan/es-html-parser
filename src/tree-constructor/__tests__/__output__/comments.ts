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
            content: "\n",
            range: [0, 0],
          },
        },
      },
      {
        type: NodeTypes.Comment,
        content: {
          start: {
            type: TokenTypes.CommentStart,
            content: "<!--",
            range: [1, 4],
          },
          value: {
            type: TokenTypes.CommentContent,
            content: " start comment ",
            range: [5, 19],
          },
          end: {
            type: TokenTypes.CommentEnd,
            content: "-->",
            range: [20, 22],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
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
            content: "<div",
            range: [25, 28],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [29, 29],
          },
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  range: [30, 32],
                },
              },
            },
            {
              type: NodeTypes.Comment,
              content: {
                start: {
                  type: TokenTypes.CommentStart,
                  content: "<!--",
                  range: [33, 36],
                },
                value: {
                  type: TokenTypes.CommentContent,
                  content: " \n    nested \n    comment \n   ",
                  range: [37, 66],
                },
                end: {
                  type: TokenTypes.CommentEnd,
                  content: "-->",
                  range: [67, 69],
                },
              },
            },
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [70, 70],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            range: [71, 76],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [77, 78],
          },
        },
      },
      {
        type: NodeTypes.Comment,
        content: {
          start: {
            type: TokenTypes.CommentStart,
            content: "<!--",
            range: [79, 82],
          },
          value: {
            type: TokenTypes.CommentContent,
            content: " end comment ",
            range: [83, 95],
          },
          end: {
            type: TokenTypes.CommentEnd,
            content: "-->",
            range: [96, 98],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [99, 99],
          },
        },
      },
    ],
  },
};
