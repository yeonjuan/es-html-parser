import { Range } from "../types";
import { SourceLocation } from "../types/source-location";
import { getLineInfo } from "../utils";
import { CharPointer } from "./char-pointer";

export class SourceCode {
  private pointer: CharPointer = new CharPointer();

  public constructor(public readonly source: string) {}

  public currentCode() {
    return this.source[this.pointer.index];
  }

  public getLocationOf(range: Range): SourceLocation {
    return {
      start: getLineInfo(this.source, range[0]),
      end: getLineInfo(this.source, range[1]),
    };
  }
}
