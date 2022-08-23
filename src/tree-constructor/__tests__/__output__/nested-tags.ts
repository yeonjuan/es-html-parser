import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  nodeType: NodeTypes.Document,
  content: {
    children: [
      {
        nodeType: NodeTypes.Tag,
        content: {
          name: "div",
          selfClosing: false,
          openStart: {
            type: TokenTypes.OpenTagStart,
            content: "<div",
            startPosition: 0,
            endPosition: 3,
          },
          openEnd: {
            type: TokenTypes.OpenTagEnd,
            content: ">",
            startPosition: 4,
            endPosition: 4,
          },
          children: [
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n  ",
                  startPosition: 5,
                  endPosition: 7,
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
                  startPosition: 8,
                  endPosition: 11,
                },
                openEnd: {
                  type: TokenTypes.OpenTagEnd,
                  content: ">",
                  startPosition: 12,
                  endPosition: 12,
                },
                children: [
                  {
                    nodeType: NodeTypes.Text,
                    content: {
                      value: {
                        type: TokenTypes.Text,
                        content: "\n    some text\n\n    ",
                        startPosition: 14,
                        endPosition: 33,
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
                        startPosition: 34,
                        endPosition: 37,
                      },
                      openEnd: {
                        type: TokenTypes.OpenTagEnd,
                        content: ">",
                        startPosition: 38,
                        endPosition: 38,
                      },
                      children: [
                        {
                          nodeType: NodeTypes.Text,
                          content: {
                            value: {
                              type: TokenTypes.Text,
                              content: "\n      another text\n    ",
                              startPosition: 40,
                              endPosition: 63,
                            },
                          },
                        },
                      ],
                      close: {
                        type: TokenTypes.CloseTag,
                        content: "</span>",
                        startPosition: 64,
                        endPosition: 68,
                      },
                    },
                  },
                  {
                    nodeType: NodeTypes.Text,
                    content: {
                      value: {
                        type: TokenTypes.Text,
                        content: "\n  ",
                        startPosition: 71,
                        endPosition: 73,
                      },
                    },
                  },
                ],
                close: {
                  type: TokenTypes.CloseTag,
                  content: "</span>",
                  startPosition: 74,
                  endPosition: 78,
                },
              },
            },
            {
              nodeType: NodeTypes.Text,
              content: {
                value: {
                  type: TokenTypes.Text,
                  content: "\n",
                  startPosition: 81,
                  endPosition: 81,
                },
              },
            },
          ],
          close: {
            type: TokenTypes.CloseTag,
            content: "</div>",
            startPosition: 82,
            endPosition: 85,
          },
        },
      },
      {
        nodeType: NodeTypes.Text,
        content: {
          value: {
            type: TokenTypes.Text,
            content: "\n",
            startPosition: 88,
            endPosition: 88,
          },
        },
      },
    ],
  },
};
