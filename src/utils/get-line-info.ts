//https://github.com/acornjs/acorn/blob/master/acorn/src/whitespace.js

function isNewLine(code: number) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
}

function nextLineBreak(code: string, from: number, end = code.length) {
  for (let i = from; i < end; i++) {
    const next = code.charCodeAt(i);
    if (isNewLine(next))
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10
        ? i + 2
        : i + 1;
  }
  return -1;
}

export function getLineInfo(input: string, offset: number) {
  for (let line = 1, cur = 0; ; ) {
    const nextBreak = nextLineBreak(input, cur, offset);
    if (nextBreak < 0) return { line, column: offset - cur };
    ++line;
    cur = nextBreak;
  }
}

// Offsets where each line starts (offsets[0] is always 0). Compute once per
// source and reuse via findLineIndex, instead of rescanning from the start
// of the source for every offset.
export function computeLineStartOffsets(input: string): number[] {
  const offsets = [0];
  const length = input.length;
  let i = 0;
  while (i < length) {
    const code = input.charCodeAt(i);
    if (isNewLine(code)) {
      // "\r\n" is a single line break, not two, so skip both chars.
      const isCRLF =
        code === 13 && i + 1 < length && input.charCodeAt(i + 1) === 10;
      const next = isCRLF ? i + 2 : i + 1;
      offsets.push(next);
      i = next;
    } else {
      i++;
    }
  }
  return offsets;
}

export function getLineInfoFromOffsets(offsets: number[], offset: number) {
  let low = 0;
  let high = offsets.length - 1;
  while (low < high) {
    const mid = (low + high + 1) >> 1;
    if (offsets[mid] <= offset) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return { line: low + 1, column: offset - offsets[low] };
}
