import { Range } from "./range";

export enum TemplateTokenType {
  Inline = "inline",
  BlockOpen = "blockOpen",
  BlockClose = "blockClose",
  ConditionalBlockOpen = "conditionalBlockOpen",
  ConditionalBlockClose = "conditionalBlockClose",
  AlternativeBlockOpen = "alternativeBlockOpen",
}

export type TemplateInfo = {
  type?: TemplateTokenType;
  open: Range;
  close: Range;
};
