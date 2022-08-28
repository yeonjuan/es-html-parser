import { TokenTypes } from "../../../constants";

export default [
  {
    type: TokenTypes.Text,
    content: "opening text\n\n",
    range: [0, 13],
  },
  {
    type: TokenTypes.OpenTagStart,
    content: "<div",
    range: [14, 17],
  },
  {
    type: TokenTypes.OpenTagEnd,
    content: ">",
    range: [18, 18],
  },
  {
    type: TokenTypes.CloseTag,
    content: "</div>",
    range: [19, 24],
  },
  {
    type: TokenTypes.Text,
    content: "\n\nclosing text\n",
    range: [25, 39],
  },
];
