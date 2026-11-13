export const INCOMPLETE_CLOSING_TAG_PATTERN = /<\/[^>]+$/;

export const CLOSING_SCRIPT_TAG_PATTERN = /<\/script\s*>/i;

export const CLOSING_STYLE_TAG_PATTERN = /<\/style\s*>/i;

/**
 * Elements whose content is text up to the matching end tag:
 * escapable raw text (RCDATA) and raw text (RAWTEXT) elements, except script and style.
 * https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
 */
export const RAW_TEXT_TAGS = [
  "textarea",
  "title",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
];

export const OPEN_TAG_NAME_PATTERN = /^<(\S+)/;

export const CLOSE_TAG_NAME_PATTERN = /^<\/((?:.|\r?\n)*)>$/;
