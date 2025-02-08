import { Range, TemplateInfo } from "../types";
import { SourceLocation } from "../types/source-location";
import { getLineInfo, getRange } from "../utils";
import { Chars, CharsType } from "./chars";

export class SourceCode {
  private charsList: Chars[];
  private charsIndex = 0;

  public constructor(
    public readonly source: string,
    templateInfos: TemplateInfo[]
  ) {
    this.charsList = this.createCharsList(templateInfos);
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

  private createCharsList(templateInfo: TemplateInfo[]) {
    const charsList: Chars[] = [];
    let sourceIndex = 0;
    let templateInfoIndex = 0;

    while (sourceIndex < this.source.length) {
      const info = templateInfo[templateInfoIndex];
      if (info) {
        const range = getRange(info);
        if (range[0] <= sourceIndex && sourceIndex < range[1]) {
          charsList.push(
            new Chars(
              CharsType.Template,
              this.source.slice(range[0], range[1]),
              [range[0], range[1]],
              Array.isArray(info) ? undefined : info
            )
          );
          templateInfoIndex++;
          sourceIndex = range[1];
          continue;
        }
      }
      charsList.push(
        new Chars(CharsType.HTML, this.source[sourceIndex], [
          sourceIndex,
          sourceIndex + 1,
        ])
      );
      sourceIndex++;
    }
    return charsList;
  }
}
