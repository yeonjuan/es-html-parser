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
        type: NodeTypes.Tag,
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
              type: NodeTypes.Text,
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
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [13, 14],
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
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [26, 27],
          },
        },
      },
      {
        type: NodeTypes.Tag,
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
              type: NodeTypes.Text,
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
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n\n",
            range: [42, 43],
          },
        },
      },
      {
        type: NodeTypes.Tag,
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
        type: NodeTypes.Text,
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
