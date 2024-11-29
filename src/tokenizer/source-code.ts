import { Range } from "../types";
import { SourceLocation } from "../types/source-location";
import { getLineInfo } from "../utils";
import { Chars } from "./chars";

export class SourceCode {
  private charsList: Chars[];
  private charsIndex = 0;

  public constructor(
    public readonly source: string,
    templateRanges: Range[]
  ) {
    this.charsList = this.createCharsList(templateRanges);
  }

  public getLocationOf(range: Range): SourceLocation {
    return {
      start: getLineInfo(this.source, range[0]),
      end: getLineInfo(this.source, range[1]),
    };
  }

  public current(): Chars {
    return this.charsList[this.charsIndex];
  }

  public next() {
    this.charsIndex++;
  }

  public prev() {
    this.charsIndex--;
  }

  public isEof() {
    return this.charsIndex >= this.charsList.length;
  }

  public index() {
    const current = this.current();
    return current.range[1] - 1;
  }

  private createCharsList(templateRanges: Range[]) {
    const charsList: Chars[] = [];
    let sourceIndex = 0;
    let templateRangeIndex = 0;

    while (sourceIndex < this.source.length) {
      const templateRange = templateRanges[templateRangeIndex];
      if (
        templateRange &&
        templateRange[0] <= sourceIndex &&
        sourceIndex < templateRange[1]
      ) {
        charsList.push(
          new Chars(
            this.source.slice(templateRange[0], templateRange[1]),
            [templateRange[0], templateRange[1]],
            true
          )
        );
        templateRangeIndex++;
        sourceIndex = templateRange[1];
        continue;
      }
      charsList.push(
        new Chars(
          this.source[sourceIndex],
          [sourceIndex, sourceIndex + 1],
          false
        )
      );
      sourceIndex++;
    }
    return charsList;
  }
}
