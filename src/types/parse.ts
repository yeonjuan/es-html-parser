import { DocumentNode } from "./node";
import { TokenAdapter } from "./token-adapter";
import { AnyToken } from "./token";
import { TemplateSytaxToken } from "./tokenizer-state";

export type ParseResult = {
  ast: DocumentNode;
  tokens: AnyToken[];
};

export type Options = {
  tokenAdapter?: TokenAdapter;
  templateSyntaxTokens?: TemplateSytaxToken[];
};
