import { NodeTypes } from "../constants";

export interface BaseNode {
  type: NodeTypes;
  [key: string]: any;
}

export interface DocumentNode extends BaseNode {
  type: NodeTypes.Document;
}

export type AnyNode = any;

export namespace HTMLNode {
  export interface Text {
    type: NodeTypes.Text;
    value: string;
    range: [number, number];
    parentRef?: any;
  }
}
