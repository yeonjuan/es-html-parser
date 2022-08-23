import { OPEN_TAG_NAME_PATTERN } from "../constants";

export function parseOpenTagName(openTagStartTokenContent: string) {
  const match = openTagStartTokenContent.match(OPEN_TAG_NAME_PATTERN);

  if (match === null) {
    throw new Error(
      "Unable to parse open tag name.\n" +
        `${openTagStartTokenContent} does not match pattern of opening tag.`
    );
  }

  return match[1].toLowerCase();
}
