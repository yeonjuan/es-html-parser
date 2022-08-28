import { ConstructTreeContextTypes } from "../constants";
import { AnyNode, DocumentNode } from "./node";

export type ConstructTreeState = {
  caretPosition: number;
  currentContext: {
    type: ConstructTreeContextTypes;
    parentRef?: any;
    content?: any;
  };
  currentNode: AnyNode;
  rootNode: DocumentNode;
};
