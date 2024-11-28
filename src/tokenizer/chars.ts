import { Range } from "../types";

export class Chars {
  constructor(
    public value: string,
    public range: Range,
    public isTemplate: boolean
  ) {}

  public concat(chars: Chars): void {
    this.value += chars.value;
    this.range[1] = chars.range[1];
  }

  public equals(chars: string): boolean {
    return this.value === chars;
  }

  public length() {
    return this.value.length;
  }
}
