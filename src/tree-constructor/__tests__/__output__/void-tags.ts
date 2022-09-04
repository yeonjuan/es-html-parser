import { NodeTypes } from "../../../constants";

export default {
  type: NodeTypes.Document,
  range: [0, 16],
  loc: {
    start: {
      line: 1,
    },
    end: {
      line: 4,
    },
  },
  children: [
    {
      type: NodeTypes.Tag,
      attributes: [],
      children: [],
      range: [0, 7],
      selfClosing: true,
      name: "img",
      loc: {
        start: {
          line: 1,
        },
        end: {
          line: 1,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<img",
        range: [0, 4],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: "/>",
        range: [5, 7],
        loc: {
          start: {
            line: 1,
          },
          end: {
            line: 1,
          },
        },
      },
    },
    {
      type: NodeTypes.Text,
      value: "\n\n",
      range: [7, 9],
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
      type: NodeTypes.Tag,
      range: [9, 16],
      attributes: [],
      children: [],
      selfClosing: true,
      name: "img",
      loc: {
        start: {
          line: 3,
        },
        end: {
          line: 4,
        },
      },
      openStart: {
        type: NodeTypes.OpenTagStart,
        value: "<img",
        range: [9, 13],
        loc: {
          start: {
            line: 3,
          },
          end: {
            line: 3,
          },
        },
      },
      openEnd: {
        type: NodeTypes.OpenTagEnd,
        value: "/>",
        range: [14, 16],
        loc: {
          start: {
            line: 4,
          },
          end: {
            line: 4,
          },
        },
      },
    },
  ],
};
