import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-one",
    range: [0, 11],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [11, 12],
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [12, 28],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-two",
    range: [28, 39],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 40],
  },
  {
    type: TokenTypes.Text,
    value: "\n    another text\n  ",
    range: [40, 60],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-two>",
    range: [60, 73],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [73, 74],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-one>",
    range: [74, 87],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [87, 88],
  },
];
