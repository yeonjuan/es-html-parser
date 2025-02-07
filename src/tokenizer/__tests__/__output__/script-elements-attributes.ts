import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
    loc: {
      start: {
        column: 0,
        line: 1,
      },
      end: {
        line: 1,
        column: 4,
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
        column: 4,
      },
      end: {
        line: 1,
        column: 5,
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
        column: 5,
      },
      end: {
        line: 4,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [25, 32],
    loc: {
      start: {
        line: 4,
        column: 2,
      },
      end: {
        line: 4,
        column: 9,
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
        column: 10,
      },
      end: {
        line: 4,
        column: 14,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [37, 38],
    loc: {
      start: {
        line: 4,
        column: 14,
      },
      end: {
        line: 4,
        column: 15,
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
        column: 15,
      },
      end: {
        line: 4,
        column: 16,
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
        column: 16,
      },
      end: {
        line: 4,
        column: 31,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [54, 55],
    loc: {
      start: {
        line: 4,
        column: 31,
      },
      end: {
        line: 4,
        column: 32,
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
        column: 33,
      },
      end: {
        line: 4,
        column: 44,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [68, 69],
    loc: {
      start: {
        line: 4,
        column: 45,
      },
      end: {
        line: 4,
        column: 46,
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
        column: 48,
      },
      end: {
        line: 4,
        column: 49,
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
        column: 49,
      },
      end: {
        line: 4,
        column: 54,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [77, 78],
    loc: {
      start: {
        line: 4,
        column: 54,
      },
      end: {
        line: 4,
        column: 55,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [79, 80],
    loc: {
      start: {
        line: 4,
        column: 56,
      },
      end: {
        line: 4,
        column: 57,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: "\n    console.log('test 1')\n  ",
    range: [80, 109],
    loc: {
      start: {
        line: 4,
        column: 57,
      },
      end: {
        line: 6,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [109, 118],
    loc: {
      start: {
        line: 6,
        column: 2,
      },
      end: {
        line: 6,
        column: 11,
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
        column: 11,
      },
      end: {
        line: 8,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [122, 129],
    loc: {
      start: {
        line: 8,
        column: 2,
      },
      end: {
        line: 8,
        column: 9,
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
        column: 4,
      },
      end: {
        line: 9,
        column: 8,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [138, 139],
    loc: {
      start: {
        line: 9,
        column: 8,
      },
      end: {
        line: 9,
        column: 9,
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
        column: 9,
      },
      end: {
        line: 9,
        column: 10,
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
        column: 10,
      },
      end: {
        line: 9,
        column: 25,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [155, 156],
    loc: {
      start: {
        line: 9,
        column: 25,
      },
      end: {
        line: 9,
        column: 26,
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
        column: 4,
      },
      end: {
        line: 10,
        column: 9,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [169, 170],
    loc: {
      start: {
        column: 2,
        line: 11,
      },
      end: {
        line: 11,
        column: 3,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: "\n    let a = '<div></div>'\n    console.log(a)\n  ",
    range: [170, 218],
    loc: {
      start: {
        column: 3,
        line: 11,
      },
      end: {
        line: 14,
        column: 2,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [218, 227],
    loc: {
      start: {
        column: 2,
        line: 14,
      },
      end: {
        line: 14,
        column: 11,
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
        column: 11,
      },
      end: {
        line: 15,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [228, 234],
    loc: {
      start: {
        line: 15,
        column: 0,
      },
      end: {
        line: 15,
        column: 6,
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
        column: 6,
      },
      end: {
        line: 17,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [236, 243],
    loc: {
      start: {
        line: 17,
        column: 0,
      },
      end: {
        line: 17,
        column: 7,
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
        column: 8,
      },
      end: {
        line: 17,
        column: 13,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeKey,
    value: "type",
    range: [250, 254],
    loc: {
      start: {
        line: 17,
        column: 14,
      },
      end: {
        line: 17,
        column: 18,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [254, 255],
    loc: {
      start: {
        line: 17,
        column: 18,
      },
      end: {
        line: 17,
        column: 19,
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
        column: 19,
      },
      end: {
        line: 17,
        column: 20,
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
        column: 20,
      },
      end: {
        line: 17,
        column: 35,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [271, 272],
    loc: {
      start: {
        line: 17,
        column: 35,
      },
      end: {
        line: 17,
        column: 36,
      },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [272, 273],
    loc: {
      start: {
        line: 17,
        column: 36,
      },
      end: {
        line: 17,
        column: 37,
      },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: "\n  console.log('test 2')\n",
    range: [273, 298],
    loc: {
      start: {
        line: 17,
        column: 37,
      },
      end: {
        line: 19,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [298, 307],
    loc: {
      start: {
        line: 19,
        column: 0,
      },
      end: {
        line: 19,
        column: 9,
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
        column: 9,
      },
      end: {
        line: 20,
        column: 0,
      },
    },
    parts: [],
  },
];

export default OUTPUT;
