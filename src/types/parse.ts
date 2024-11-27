import { DocumentNode } from "./node";
import { TokenAdapter } from "./token-adapter";
import { AnyToken } from "./token";
import { Range } from "./range";

export type ParseResult = {
  ast: DocumentNode;
  tokens: AnyToken[];
};

export type Options = {
  tokenAdapter?: TokenAdapter;
  templateRanges?: Range[];
};
