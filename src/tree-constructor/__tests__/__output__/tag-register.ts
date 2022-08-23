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
        nodeType: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            startPosition: 1,
            endPosition: 4,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 5,
            endPosition: 5,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 6,
                  endPosition: 6,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</DIV>",
            startPosition: 7,
            endPosition: 12,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 13,
            endPosition: 14,
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
            content: "<DIV",
            startPosition: 15,
            endPosition: 18,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 19,
            endPosition: 19,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            startPosition: 20,
            endPosition: 25,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 26,
            endPosition: 27,
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          name: "span",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<span",
            startPosition: 28,
            endPosition: 32,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 33,
            endPosition: 33,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 34,
                  endPosition: 34,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</span>",
            startPosition: 35,
            endPosition: 41,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            startPosition: 42,
            endPosition: 43,
          },
        },
      },
      {
        nodeType: NodeTypes.Tag,
        content: {
          name: "span",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<SPAN",
            startPosition: 44,
            endPosition: 48,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 49,
            endPosition: 49,
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</SPAN>",
            startPosition: 50,
            endPosition: 56,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 57,
            endPosition: 57,
          },
        },
      },
    ],
  },
};
