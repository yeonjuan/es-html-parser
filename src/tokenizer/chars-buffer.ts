import { Chars } from "./chars";

export class CharsBuffer {
  public charsBuffer: Chars[] = [];

  public concat(chars: Chars) {
    const last = this.last();
    if (!last || last.isTemplate || chars.isTemplate) {
      this.charsBuffer.push(chars);
    } else {
      last.concat(chars);
    }
  }

  public concatBuffer(buffer: CharsBuffer) {
    const last = this.last();
    const first = buffer.first();
    if (last?.isTemplate === false && first?.isTemplate === false) {
      last.concat(first);
      this.charsBuffer.push(...buffer.charsBuffer.slice(1));
      return;
    }
    this.charsBuffer.push(...buffer.charsBuffer);
  }

  public length(): number {
    return this.charsBuffer
      .map((chars) => chars.length())
      .reduce((a, b) => a + b, 0);
  }

  public clear() {
    this.charsBuffer = [];
  }

  public value() {
    return this.charsBuffer.map((chars) => chars.value).join("");
  }

  public last(): Chars | undefined {
    return this.charsBuffer[this.charsBuffer.length - 1];
  }

  public first(): Chars | undefined {
    return this.charsBuffer[0];
  }

  public removeLast(): void {
    this.charsBuffer.splice(this.charsBuffer.length - 1, 1);
  }

  public removeFirst(): void {
    this.charsBuffer.splice(0, 1);
  }
}
