import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    value: "opening text\n\n",
    range: [0, 14],
  },
  {
    type: TokenTypes.OpenTagStart,
    value: "<div",
    range: [14, 18],
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 19],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</div>",
    range: [19, 25],
  },
  {
    type: TokenTypes.Text,
    value: "\n\nclosing text\n",
    range: [25, 40],
  },
];
