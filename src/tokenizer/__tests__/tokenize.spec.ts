import * as fs from "fs";
import * as path from "path";
import { tokenize } from "../tokenize";
import OPENING_CLOSING_TEXT from "./__output__/opening-closing-text";
import NESTED_TAGS from "./__output__/nested-tags";
import COMMENTS from "./__output__/comments";
import ATTRIBUTES_EMPTY from "./__output__/attributes-empty";
import ATTRIBUTES_BARE from "./__output__/attributes-bare";
import ATTRIBUTES_APOSTROPHE from "./__output__/attributes-apostrophe";
import ATTRIBUTES_QUOTE from "./__output__/attributes-quote";
import CUSTOM_ELEMENTS from "./__output__/custom-elements";
import DOCTYPES from "./__output__/doctypes";
import SCRIPT_ELEMENTS_ATTRIBUTES from "./__output__/script-elements-attributes";
import SCRIPT_ELEMENTS from "./__output__/script-elements";
import STYLE_ELEMENTS_ATTRIBUTES from "./__output__/style-elements-attributes";
import STYLE_ELEMENTS from "./__output__/style-elements";
import TAGS_REGISTER from "./__output__/tags-register";
import VOID_TAGS from "./__output__/void-tags";
import EMPTY from "./__output__/empty";
import SVG from "./__output__/svg";
import ATTRIBUTES_MULTILINE_CRLF from "./__output__/attributes-multiline-crlf";
import ATTRIBUTES_BARE_WRONG_QUOTE from "./__output__/attributes-bare-wrong-quote";
import TEMPLATE_SYNTAX_ATTRIBUTES from "./__output__/template-syntax-attributes";
import TEMPLATE_SYNTAX_ATTRIBUTES_KEY from "./__output__/template-syntax-attributes-key";
import TEMPLATE_SYNTAX_DATA from "./__output__/template-syntax-data";
import TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_BARE from "./__output__/template-syntax-attributes-value-bare";
import TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_QUOTE from "./__output__/template-syntax-attributes-value-quote";
import TEMPLATE_SYNTAX_SCRIPT_ATTRIBUTES from "./__output__/template-syntax-script-attributes";
import TEMPLATE_SYNTAX_STYLE_ATTRIBUTES from "./__output__/template-syntax-style-attributes";
import TEMPLATE_SYNTAX_ATTRIBUTES_KEY_VALUE from "./__output__/template-syntax-attributes-key-value";
import TEMPLATE_SYNTAX_SCRIPT_CONTENT from "./__output__/template-syntax-script-content";
import TEMPLATE_SYNTAX_STYLE_CONTENT from "./__output__/template-syntax-style-content";
import TEMPLATE_SYNTAX_COMMENT_CONTENT from "./__output__/template-syntax-comment-content";

import { defaultTokenAdapter } from "../../token-adapter";
import { Range } from "../../types";

describe("tokenize", () => {
  test.each(
    // prettier-ignore
    [
      [
        "Attributes apostrophe",
        "attributes-apostrophe.html",
        ATTRIBUTES_APOSTROPHE,
      ],
      [
        "Attributes bare",
        "attributes-bare.html",
        ATTRIBUTES_BARE,
      ],
      [
        "Attributes bare wrong quotes",
        "attributes-bare-wrong-quote.html",
        ATTRIBUTES_BARE_WRONG_QUOTE,
      ],
      [
        "Attributes empty",
        "attributes-empty.html",
        ATTRIBUTES_EMPTY,
      ],
      [
        "Attributes quote",
        "attributes-quote.html",
        ATTRIBUTES_QUOTE,
      ],
      [
        "Comments",
        "comments.html",
        COMMENTS,
      ],
      [
        "Custom elements",
        "custom-elements.html",
        CUSTOM_ELEMENTS,
      ],
      [
        "Doctypes",
        "doctypes.html",
        DOCTYPES,
      ],
      [
        "Nested tags",
        "nested-tags.html",
        NESTED_TAGS,
      ],
      [
        "Opening and closing text",
        "opening-closing-text.html",
        OPENING_CLOSING_TEXT,
      ],
      [
        "Script elements attributes",
        "script-elements-attributes.html",
        SCRIPT_ELEMENTS_ATTRIBUTES,
      ],
      [
        "Script element",
        "script-elements.html",
        SCRIPT_ELEMENTS,
      ],
      [
        "Tags register",
        "tags-register.html",
        TAGS_REGISTER,
      ],
      [
        "Style elements attributes",
        "style-elements-attributes.html",
        STYLE_ELEMENTS_ATTRIBUTES,
      ],
      [
        "Style elements",
        "style-elements.html",
        STYLE_ELEMENTS,
      ],
      [
        "Void tags",
        "void-tags.html",
        VOID_TAGS,
      ],
      [
        "Empty",
        "empty.html",
        EMPTY,
      ],
      [
        "Svg",
        "svg.html",
        SVG,
      ],
      [
        "Attributes multiline CRLF",
        "attributes-multiline.html",
        ATTRIBUTES_MULTILINE_CRLF,
        (html: string) => {
          return html.replace(/\n/gi, "\r\n");
        },
      ],
      [
        "Template Syntax Attributes",
        "template-syntax-attributes.html",
        TEMPLATE_SYNTAX_ATTRIBUTES,
        null,
        [
          [5, 14]
        ] as Range[]
      ],
      [
        "Template Syntax Attributes key",
        "template-syntax-attributes-key.html",
        TEMPLATE_SYNTAX_ATTRIBUTES_KEY,
        null,
        [
          [5, 14]
      ] as Range[]
    ],
    [
      "Template Syntax Data",
      "template-syntax-data.html",
      TEMPLATE_SYNTAX_DATA,
      null,
      [
        [7, 17]
      ] as Range[]
    ],
    [
      "Template Syntax Attributes Value Bare",
      "template-syntax-attributes-value-bare.html",
      TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_BARE,
      null,
      [
        [8, 13]
      ] as Range[]
    ],
    [
      "Template Syntax Attributes Value Quote",
      "template-syntax-attributes-value-quote.html",
      TEMPLATE_SYNTAX_ATTRIBUTES_VALUE_QUOTE,
      null,
      [
        [9, 14]
      ] as Range[]
    ],
    [
      "Template Syntax Script Attributes",
      "template-syntax-script-attributes.html",
      TEMPLATE_SYNTAX_SCRIPT_ATTRIBUTES,
      null,
      [
        [8, 15]
      ] as Range[]
    ],
    [
      "Template Syntax Style Attributes",
      "template-syntax-style-attributes.html",
      TEMPLATE_SYNTAX_STYLE_ATTRIBUTES,
      null,
      [
        [12, 19]
      ] as Range[]
    ],
    [
      "Template Syntax Attributes Key Value",
      "template-syntax-attributes-key-value.html",
      TEMPLATE_SYNTAX_ATTRIBUTES_KEY_VALUE, null, [
        [5, 11], [12, 20]
      ] as Range[]
    ],
    [
      "Template Syntax Script Content",
      "template-syntax-script-content.html",
      TEMPLATE_SYNTAX_SCRIPT_CONTENT, null, [
        [9, 19]
      ] as Range[]
    ],
    [
      "Template Syntax Style Content",
      "template-syntax-style-content.html",
      TEMPLATE_SYNTAX_STYLE_CONTENT, null, [
        [8, 18]
      ] as Range[]
    ],
    [
      "Template Syntax Comment Content",
      "template-syntax-comment-content.html",
      TEMPLATE_SYNTAX_COMMENT_CONTENT,null,[
        [4, 14]
      ] as Range[]
    ]
    ]
  )(
    "%s",
    (
      name,
      input,
      output,
      process: null | ((html: string) => string) = null,
      ranges: null | Range[] = null
    ) => {
      const inputPath = path.join(__dirname, "__input__", input);
      let html = fs.readFileSync(inputPath, "utf-8");
      if (process) {
        html = process(html);
      }
      const { tokens } = tokenize(html, defaultTokenAdapter, ranges || []);
      expect(tokens).toEqual(output);
    }
  );
});
