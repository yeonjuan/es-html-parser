import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [0, 4],
    loc: {
      start: { line: 1, column: 0 },
      end: { line: 1, column: 4 },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "class",
    range: [5, 10],
    loc: {
      start: { line: 1, column: 5 },
      end: { line: 1, column: 10 },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [10, 11],
    loc: {
      start: { line: 1, column: 10 },
      end: { line: 1, column: 11 },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [11, 12],
    loc: {
      start: { line: 1, column: 11 },
      end: { line: 1, column: 12 },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    range: [12, 31],
    loc: {
      start: { line: 1, column: 12 },
      end: { line: 1, column: 31 },
    },
    value: "one ${two} ${three}",
    parts: [
      {
        type: TokenTypes.Part,
        range: [12, 16],
        loc: {
          start: { line: 1, column: 12 },
          end: { line: 1, column: 16 },
        },
        partOf: TokenTypes.AttributeValue,
        value: "one ",
      },
      {
        partOf: TokenTypes.AttributeValue,
        type: TokenTypes.Template,
        range: [16, 22],
        loc: {
          start: { line: 1, column: 16 },
          end: { line: 1, column: 22 },
        },
        value: "${two}",
      },
      {
        type: TokenTypes.Part,
        range: [22, 23],
        loc: {
          start: { line: 1, column: 22 },
          end: { line: 1, column: 23 },
        },
        partOf: TokenTypes.AttributeValue,
        value: " ",
      },
      {
        partOf: TokenTypes.AttributeValue,
        type: TokenTypes.Template,
        range: [23, 31],
        loc: {
          start: { line: 1, column: 23 },
          end: { line: 1, column: 31 },
        },
        value: "${three}",
      },
    ],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [31, 32],
    loc: {
      start: { line: 1, column: 31 },
      end: { line: 1, column: 32 },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    range: [32, 33],
    loc: {
      start: { line: 1, column: 32 },
      end: { line: 1, column: 33 },
    },
    value: ">",
  },
  {
    type: TokenTypes.CloseTag,
    range: [33, 39],
    loc: {
      start: { line: 1, column: 33 },
      end: { line: 1, column: 39 },
    },
    value: "</div>",
  },
];

export default OUTPUT;
