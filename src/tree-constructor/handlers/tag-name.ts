import { TokenTypes } from "../../constants";
import { ConstructTreeState, Token } from "../../types";
import { parseOpenTagName } from "../../utils";

function handleTagOpenStart(state: ConstructTreeState, token: Token) {
  state.currentNode.content.name = parseOpenTagName(token.value);

  state.currentContext = state.currentContext.parentRef;

  return state;
}

export function construct(token: Token, state: ConstructTreeState) {
  if (token.type === TokenTypes.OpenTagStart) {
    handleTagOpenStart(state, token);
  }

  state.caretPosition++;

  return state;
}
