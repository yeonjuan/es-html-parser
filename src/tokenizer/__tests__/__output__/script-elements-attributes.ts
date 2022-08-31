import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
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
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [4, 5],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 1,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  dummy content\n\n  ",
    range: [5, 25],
    loc: {
      start: {
        line: 1,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [25, 32],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [33, 37],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [37, 38],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [38, 39],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [39, 54],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [54, 55],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "some-custom",
    range: [56, 67],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [68, 69],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [71, 72],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "thing",
    range: [72, 77],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [77, 78],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [79, 80],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 4,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    console.log('test 1')\n  ",
    range: [80, 109],
    loc: {
      start: {
        line: 4,
      },
      end: {
        line: 6,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [109, 118],
    loc: {
      start: {
        line: 6,
      },
      end: {
        line: 6,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n  ",
    range: [118, 122],
    loc: {
      start: {
        line: 6,
      },
      end: {
        line: 8,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [122, 129],
    loc: {
      start: {
        line: 8,
      },
      end: {
        line: 8,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [134, 138],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [138, 139],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [139, 140],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [140, 155],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [155, 156],
    loc: {
      start: {
        line: 9,
      },
      end: {
        line: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [161, 166],
    loc: {
      start: {
        line: 10,
      },
      end: {
        line: 10,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [169, 170],
    loc: {
      start: {
        line: 11,
      },
      end: {
        line: 11,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n    let a = '<div></div>'\n    console.log(a)\n  ",
    range: [170, 218],
    loc: {
      start: {
        line: 11,
      },
      end: {
        line: 14,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [218, 227],
    loc: {
      start: {
        line: 14,
      },
      end: {
        line: 14,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [227, 228],
    loc: {
      start: {
        line: 14,
      },
      end: {
        line: 15,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [228, 234],
    loc: {
      start: {
        line: 15,
      },
      end: {
        line: 15,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n\n",
    range: [234, 236],
    loc: {
      start: {
        line: 15,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<script",
    range: [236, 243],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "async",
    range: [244, 249],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [250, 254],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [254, 255],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [255, 256],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "text/javascript",
    range: [256, 271],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [271, 272],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [272, 273],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 17,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n  console.log('test 2')\n",
    range: [273, 298],
    loc: {
      start: {
        line: 17,
      },
      end: {
        line: 19,
      },
    },
  },
  {
    type: TokenTypes.CloseTag,
    value: "</script>",
    range: [298, 307],
    loc: {
      start: {
        line: 19,
      },
      end: {
        line: 19,
      },
    },
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [307, 308],
    loc: {
      start: {
        line: 19,
      },
      end: {
        line: 20,
      },
    },
  },
];
