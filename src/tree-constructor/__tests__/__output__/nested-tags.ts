import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 88],
  children: [
    {
      type: NodeTypes.Tag,
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [0, 3],
      },
      openEnd: {
        type: TokenTypes.OpenTagEnd,
        value: ">",
        range: [4, 4],
      },
      name: "div",
      selfClosing: false,
      close: {
        type: TokenTypes.CloseTag,
        value: "</div>",
        range: [82, 85],
      },

      children: [
        {
          type: NodeTypes.Text,
          value: "\n  ",
          range: [5, 7],
        },
        {
          type: NodeTypes.Tag,
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<span",
            range: [8, 11],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            value: ">",
            range: [12, 12],
          },
          name: "span",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</span>",
            range: [74, 78],
          },

          children: [
            {
              type: NodeTypes.Text,
              value: "\n    some text\n\n    ",
              range: [14, 33],
            },
            {
              type: NodeTypes.Tag,
              openStart: {
                type: TokenTypes.OpenTagStart,
                value: "<span",
                range: [34, 37],
              },
              openEnd: {
                type: TokenTypes.OpenTagEnd,
                value: ">",
                range: [38, 38],
              },
              name: "span",
              selfClosing: false,
              close: {
                type: TokenTypes.CloseTag,
                value: "</span>",
                range: [64, 68],
              },
              children: [
                {
                  type: NodeTypes.Text,
                  value: "\n      another text\n    ",
                  range: [40, 63],
                },
              ],
            },
            {
              type: NodeTypes.Text,
              value: "\n  ",
              range: [71, 73],
            },
          ],
        },
        {
          type: NodeTypes.Text,
          value: "\n",
          range: [81, 81],
        },
      ],
    },
    {
      type: NodeTypes.Text,
      value: "\n",
      range: [88, 88],
    },
  ],
};
