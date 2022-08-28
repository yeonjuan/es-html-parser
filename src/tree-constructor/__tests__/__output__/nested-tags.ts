import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  content: {
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
        content: {
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
              content: {
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
                    content: {
                      children: [
                        {
                          type: NodeTypes.Text,
                          value: "\n      another text\n    ",
                          range: [40, 63],
                        },
                      ],
                      close: {
                        type: TokenTypes.CloseTag,
                        value: "</span>",
                        range: [64, 68],
                      },
                    },
                  },
                  {
                    type: NodeTypes.Text,
                    value: "\n  ",
                    range: [71, 73],
                  },
                ],
                close: {
                  type: TokenTypes.CloseTag,
                  value: "</span>",
                  range: [74, 78],
                },
              },
            },
            {
              type: NodeTypes.Text,
              value: "\n",
              range: [81, 81],
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            value: "</div>",
            range: [82, 85],
          },
        },
      },
      {
        type: NodeTypes.Text,
        value: "\n",
        range: [88, 88],
      },
    ],
  },
};
