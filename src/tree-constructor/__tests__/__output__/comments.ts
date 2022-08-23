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
            startPosition: 0,
            endPosition: 0,
          },
        },
      },
      {
        nodeType: NodeTypes.Comment,
        content: {
          start: {
            type: TokenTypes.CommentStart,
            content: "<!--",
            startPosition: 1,
            endPosition: 4,
          },
          value: {
            type: TokenTypes.CommentContent,
            content: " start comment ",
            startPosition: 5,
            endPosition: 19,
          },
          end: {
            type: TokenTypes.CommentEnd,
            content: "-->",
            startPosition: 20,
            endPosition: 22,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 23,
            endPosition: 24,
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
            startPosition: 25,
            endPosition: 28,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 29,
            endPosition: 29,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  startPosition: 30,
                  endPosition: 32,
                },
              },
            },
            {
              nodeType: NodeTypes.Comment,
              content: {
                start: {
                  type: TokenTypes.CommentStart,
                  content: "<!--",
                  startPosition: 33,
                  endPosition: 36,
                },
                value: {
                  type: TokenTypes.CommentContent,
                  content: " \n    nested \n    comment \n   ",
                  startPosition: 37,
                  endPosition: 66,
                },
                end: {
                  type: TokenTypes.CommentEnd,
                  content: "-->",
                  startPosition: 67,
                  endPosition: 69,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 70,
                  endPosition: 70,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            startPosition: 71,
            endPosition: 76,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 77,
            endPosition: 78,
          },
        },
      },
      {
        nodeType: NodeTypes.Comment,
        content: {
          start: {
            type: TokenTypes.CommentStart,
            content: "<!--",
            startPosition: 79,
            endPosition: 82,
          },
          value: {
            type: TokenTypes.CommentContent,
            content: " end comment ",
            startPosition: 83,
            endPosition: 95,
          },
          end: {
            type: TokenTypes.CommentEnd,
            content: "-->",
            startPosition: 96,
            endPosition: 98,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 99,
            endPosition: 99,
          },
        },
      },
    ],
  },
};
