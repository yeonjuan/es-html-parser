import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenScriptTagStart,
    value: "<script",
    range: [0, 7],
    loc: {
      start: { line: 1, column: 0 },
      end: { line: 1, column: 7 },
    },
  },
  {
    type: TokenTypes.OpenScriptTagEnd,
    value: ">",
    range: [7, 8],
    loc: {
      start: { line: 1, column: 7 },
      end: { line: 1, column: 8 },
    },
  },
  {
    type: TokenTypes.ScriptTagContent,
    value: "${content}",
    range: [8, 18],
    loc: {
      start: { line: 1, column: 8 },
      end: { line: 1, column: 18 },
    },
    parts: [
      {
        type: TokenTypes.Template,
        value: "${content}",
        range: [8, 18],
        loc: {
          start: { line: 1, column: 8 },
          end: { line: 1, column: 18 },
        },
        partOf: TokenTypes.ScriptTagContent,
        open: undefined,
        close: undefined,
      },
    ],
  },
  {
    type: TokenTypes.CloseScriptTag,
    value: "</script>",
    range: [18, 27],
    loc: {
      start: { line: 1, column: 18 },
      end: { line: 1, column: 27 },
    },
  },
];
export default OUTPUT;
