import { ConstructTreeContextTypes } from "../constants";
import { AnyNode, DocumentNode } from "./node";

export type ConstructTreeState<CurNode = any> = {
  caretPosition: number;
  currentContext: {
    type: ConstructTreeContextTypes;
    parentRef?: any;
    content?: any;
  };
  currentNode: CurNode;
  rootNode: DocumentNode;
};
