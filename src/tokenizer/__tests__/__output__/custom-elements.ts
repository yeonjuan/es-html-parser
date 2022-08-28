import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-one",
    range: [0, 10],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [11, 11],
  },
  {
    type: TokenTypes.Text,
    value: "\n  some text\n\n  ",
    range: [12, 27],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<custom-two",
    range: [28, 38],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [39, 39],
  },
  {
    type: TokenTypes.Text,
    value: "\n    another text\n  ",
    range: [40, 59],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-two>",
    range: [60, 72],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [73, 73],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</custom-one>",
    range: [74, 86],
  },
  {
    type: TokenTypes.Text,
    value: "\n",
    range: [87, 87],
  },
];
