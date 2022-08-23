import { CLOSE_TAG_NAME_PATTERN } from "../constants";

export function parseCloseTagName(closeTagTokenContent: string): string {
  const match = closeTagTokenContent.match(CLOSE_TAG_NAME_PATTERN);

  if (match === null) {
    throw new Error(
      "Unable to parse close tag name.\n" +
        `${closeTagTokenContent} does not match pattern of closing tag.`
    );
  }

  return match[1].trim().toLowerCase();
}
