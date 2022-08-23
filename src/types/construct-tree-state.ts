import { ConstructTreeContextTypes } from "../constants";

export type ConstructTreeState = {
  caretPosition: number;
  currentContext: {
    type: ConstructTreeContextTypes;
    parentRef?: any;
    content?: any;
  };
  currentNode: any;
  rootNode: any;
};
