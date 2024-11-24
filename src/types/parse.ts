import { DocumentNode } from "./node";
import { TokenAdapter } from "./token-adapter";
import { AnyToken } from "./token";

export type ParseResult = {
  ast: DocumentNode;
  tokens: AnyToken[];
};

export type TemplateSyntaxOption = {
  name: string;
  start: string;
  end: string;
};

export type Options = {
  tokenAdapter?: TokenAdapter;
  templateSyntax?: TemplateSyntaxOption[];
};
