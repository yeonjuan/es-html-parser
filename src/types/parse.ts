import { DocumentNode } from "./node";
import { TokenAdapter } from "./token-adapter";
import { AnyToken } from "./token";
import { TemplateInfo } from "./template";

export type ParseResult = {
  ast: DocumentNode;
  tokens: AnyToken[];
};

export type CustomTagOptions = {
  rawContent: boolean;
};

export type CustomTagOptionsConfig = Record<string, CustomTagOptions>;

export type Options = {
  tokenAdapter?: TokenAdapter;
  customTags?: CustomTagOptionsConfig;
  templateInfos?: TemplateInfo[];
};
