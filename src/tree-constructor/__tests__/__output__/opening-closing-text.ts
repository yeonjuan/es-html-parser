import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 40],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 6,
    },
  },
  children: [
    {
      range: [0, 14],
      type: NodeTypes.Text,
      value: `opening text

`,
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 3,
        },
      },
    },
    {
      close: {
        loc: {
          end: {
            line: 3,
          },
          start: {
            line: 3,
          },
        },
        range: [19, 25],
        type: NodeTypes.CloseTag,
        value: "</div>",
      },
      name: "div",
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 3,
        },
      },
      openEnd: {
        loc: {
          end: {
            line: 3,
          },
          start: {
            line: 3,
          },
        },
        range: [18, 19],
        type: NodeTypes.OpenTagEnd,
        value: ">",
      },
      openStart: {
        loc: {
          end: {
            line: 3,
          },
          start: {
            line: 3,
          },
        },
        range: [14, 18],
        type: NodeTypes.OpenTagStart,
        value: "<div",
      },
      range: [14, 25],
      selfClosing: false,
      attributes: [],
      children: [],
      type: NodeTypes.Tag,
    },
    {
      range: [25, 40],
      type: "Text",
      value: `

closing text
`,
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 6,
        },
      },
    },
  ],
};
