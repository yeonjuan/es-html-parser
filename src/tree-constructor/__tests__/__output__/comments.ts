import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  nodeType: NodeTypes.Document,
  content: {
    children: [
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [0, 0],
          },
        },
      },
      {
        nodeType: NodeTypes.Comment,
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
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [23, 24],
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
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
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  range: [30, 32],
                },
              },
            },
            {
              nodeType: NodeTypes.Comment,
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
              nodeType: NodeTypes.Text,
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
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [77, 78],
          },
        },
      },
      {
        nodeType: NodeTypes.Comment,
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
        nodeType: NodeTypes.Text,
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
