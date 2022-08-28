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
        nodeType: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            range: [1, 4],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [5, 5],
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [6, 6],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</DIV>",
            range: [7, 12],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [13, 14],
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
            range: [15, 18],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [19, 19],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            range: [20, 25],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [26, 27],
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
            range: [28, 32],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [33, 33],
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [34, 34],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</span>",
            range: [35, 41],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [42, 43],
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
            range: [44, 48],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [49, 49],
          },
          close: {
            type: TokenTypes.CloseTag,
            content: "</SPAN>",
            range: [50, 56],
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [57, 57],
          },
        },
      },
    ],
  },
};
