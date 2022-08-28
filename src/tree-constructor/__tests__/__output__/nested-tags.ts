import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  content: {
    children: [
      {
        type: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            range: [0, 3],
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            range: [4, 4],
          },
          children: [
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  range: [5, 7],
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
                  range: [8, 11],
                },
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  range: [12, 12],
                },
                children: [
                  {
                    type: NodeTypes.Text,
                    content: {
                      value: {
                        type: TokenTypes.Text,
                        content: "\n    some text\n\n    ",
                        range: [14, 33],
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
                        range: [34, 37],
                      },
                      openEnd: {
                        type: TokenTypes.OpenTagEnd,
                        content: ">",
                        range: [38, 38],
                      },
                      children: [
                        {
                          type: NodeTypes.Text,
                          content: {
                            value: {
                              type: TokenTypes.Text,
                              content: "\n      another text\n    ",
                              range: [40, 63],
                            },
                          },
                        },
                      ],
                      close: {
                        type: TokenTypes.CloseTag,
                        content: "</span>",
                        range: [64, 68],
                      },
                    },
                  },
                  {
                    type: NodeTypes.Text,
                    content: {
                      value: {
                        type: TokenTypes.Text,
                        content: "\n  ",
                        range: [71, 73],
                      },
                    },
                  },
                ],
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</span>",
                  range: [74, 78],
                },
              },
            },
            {
              type: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  range: [81, 81],
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            range: [82, 85],
          },
        },
      },
      {
        type: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            range: [88, 88],
          },
        },
      },
    ],
  },
};
