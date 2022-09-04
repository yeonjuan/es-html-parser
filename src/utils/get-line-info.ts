//https://github.com/acornjs/acorn/blob/master/acorn/src/whitespace.js

function isNewLine(code: number) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
}
function nextLineBreak(code: string, from: number, end = code.length) {
  for (let i = from; i < end; i++) {
    let next = code.charCodeAt(i);
    if (isNewLine(next))
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10
        ? i + 2
        : i + 1;
  }
  return -1;
}

export function getLineInfo(input: string, offset: number) {
  for (let line = 1, cur = 0; ; ) {
    let nextBreak = nextLineBreak(input, cur, offset);
    if (nextBreak < 0) return { line, column: offset - cur };
    ++line;
    cur = nextBreak;
  }
}
