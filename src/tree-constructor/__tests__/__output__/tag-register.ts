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
        type: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<div",
            range: [1, 4],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [5, 5],
          },
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  value: "\n",
                  range: [6, 6],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            value: "</DIV>",
            range: [7, 12],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
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
            value: "<DIV",
            range: [15, 18],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [19, 19],
          },
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [20, 25],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
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
            value: "<span",
            range: [28, 32],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [33, 33],
          },
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  value: "\n",
                  range: [34, 34],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            value: "</span>",
            range: [35, 41],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n\n",
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
            value: "<SPAN",
            range: [44, 48],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [49, 49],
          },
          close: {
            type: TokenTypes.CloseTag,
            value: "</SPAN>",
            range: [50, 56],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            value: "\n",
            range: [57, 57],
          },
        },
      },
    ],
  },
};
