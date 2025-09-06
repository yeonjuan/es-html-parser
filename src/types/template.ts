import { Range } from "./range";

export type TemplateInfo =
  | Range
  | {
      type?:
        | "inline"
        | "blockOpen"
        | "blockClose"
        | "conditionalBlockOpen"
        | "conditionalBlockClose"
        | "alternativeBlockOpen";
      open: Range;
      close: Range;
    };
