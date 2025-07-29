import { TokenTypes } from "../../../constants";
import { AnyToken } from "../../../types";

const OUTPUT: AnyToken[] = [
  {
    type: TokenTypes.OpenTagStart,
    value: "<markdown",
    range: [0, 9],
    loc: {
      start: {
        column: 0,
        line: 1,
      },
      end: {
        line: 1,
        column: 9,
      },
    },
  },
  {
    type: TokenTypes.AttributeKey,
    value: "attr",
    loc: {
      start: {
        column: 10,
        line: 1,
      },
      end: {
        line: 1,
        column: 14,
      },
    },
    range: [10, 14],
    parts: [],
  },
  {
    type: TokenTypes.AttributeAssignment,
    value: "=",
    range: [14, 15],
    loc: {
      start: {
        column: 14,
        line: 1,
      },
      end: {
        line: 1,
        column: 15,
      },
    },
  },
  {
    type: TokenTypes.AttributeValueWrapperStart,
    value: '"',
    range: [15, 16],
    loc: {
      start: {
        column: 15,
        line: 1,
      },
      end: {
        line: 1,
        column: 16,
      },
    },
  },
  {
    type: TokenTypes.AttributeValue,
    value: "1",
    range: [16, 17],
    loc: {
      start: {
        column: 16,
        line: 1,
      },
      end: {
        line: 1,
        column: 17,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.AttributeValueWrapperEnd,
    value: '"',
    range: [17, 18],
    loc: {
      start: {
        column: 17,
        line: 1,
      },
      end: {
        line: 1,
        column: 18,
      },
    },
  },
  {
    type: TokenTypes.OpenTagEnd,
    value: ">",
    range: [18, 19],
    loc: {
      start: {
        column: 18,
        line: 1,
      },
      end: {
        line: 1,
        column: 19,
      },
    },
  },
  {
    type: TokenTypes.RawContent,
    value: `
# Hello, world!

\`\`\`cpp{4-6,9}
#include <iostream>

class Example {
    Example() {
        std::cout << "Hello, world!" << std::endl;
    }

    Example(std::string name) {
        std::cout << "Hello, " << name << std::endl;
    }
};
\`\`\`
`,
    range: [19, 260],
    loc: {
      start: {
        column: 19,
        line: 1,
      },
      end: {
        line: 17,
        column: 0,
      },
    },
    parts: [],
  },
  {
    type: TokenTypes.CloseTag,
    value: "</markdown>",
    range: [260, 271],
    loc: {
      start: {
        column: 0,
        line: 17,
      },
      end: {
        line: 17,
        column: 11,
      },
    },
  },
];

export default OUTPUT;
