import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    loc: {
      end: {
        column: 10,
        line: 1,
      },
      start: {
        column: 0,
        line: 1,
      },
    },
    range: [0, 10],
    type: TokenTypes.Text,
    value: "${content}",
    templates: [
      {
        loc: {
          end: {
            column: 10,
            line: 1,
          },
          start: {
            column: 0,
            line: 1,
          },
        },
        range: [0, 10],
        type: TokenTypes.Text,
        value: "${content}",
        isTemplate: true,
      },
    ],
  },
];
export default OUTPUT;