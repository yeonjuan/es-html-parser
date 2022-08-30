import { NodeTypes, TokenTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 89],
  children: [
    {
      type: NodeTypes.Tag,
      range: [0, 86],
      openStart: {
        type: TokenTypes.OpenTagStart,
        value: "<div",
        range: [0, 4],
      },
      openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [4, 5] },
      name: "div",
      selfClosing: false,
      close: { type: TokenTypes.CloseTag, value: "</div>", range: [82, 86] },
      children: [
        { type: NodeTypes.Text, value: "\n  ", range: [5, 8] },
        {
          type: NodeTypes.Tag,
          range: [8, 79],
          openStart: {
            type: TokenTypes.OpenTagStart,
            value: "<span",
            range: [8, 12],
          },
          openEnd: { type: TokenTypes.OpenTagEnd, value: ">", range: [12, 13] },
          name: "span",
          selfClosing: false,
          close: {
            type: TokenTypes.CloseTag,
            value: "</span>",
            range: [74, 79],
          },
          children: [
            {
              type: NodeTypes.Text,
              value: "\n    some text\n\n    ",
              range: [14, 34],
            },
            {
              type: NodeTypes.Tag,
              range: [34, 69],
              openStart: {
                type: TokenTypes.OpenTagStart,
                value: "<span",
                range: [34, 38],
              },
              openEnd: {
                type: TokenTypes.OpenTagEnd,
                value: ">",
                range: [38, 39],
              },
              name: "span",
              selfClosing: false,
              close: {
                type: TokenTypes.CloseTag,
                value: "</span>",
                range: [64, 69],
              },
              children: [
                {
                  type: NodeTypes.Text,
                  value: "\n      another text\n    ",
                  range: [40, 64],
                },
              ],
            },
            { type: NodeTypes.Text, value: "\n  ", range: [71, 74] },
          ],
        },
        { type: NodeTypes.Text, value: "\n", range: [81, 82] },
      ],
    },
    { type: NodeTypes.Text, value: "\n", range: [88, 89] },
  ],
};
