import { Range, TemplateTokenType } from "../types";

export enum CharsType {
  HTML = "HTML",
  OpenTemplate = "OpenTemplate",
  Template = "Template",
  CloseTemplate = "CloseTemplate",
}

export class Chars {
  public isTemplate: boolean;
  constructor(
    public type: CharsType,
    public templateTokenType: TemplateTokenType = TemplateTokenType.Inline,
    public value: string,
    public range: Range,
    public wrapper?: {
      open: Range;
      close: Range;
    }
  ) {
    this.isTemplate = type !== CharsType.HTML;
  }

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
