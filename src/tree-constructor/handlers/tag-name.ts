import { TokenTypes } from "../../constants";
import {
  AnyToken,
  ConstructTreeState,
  Token,
  ContextualTagNode,
} from "../../types";
import { parseOpenTagName } from "../../utils";

function handleTagOpenStart(
  state: ConstructTreeState<ContextualTagNode>,
  token: Token<TokenTypes.OpenTagStart>
) {
  state.currentNode.name = parseOpenTagName(token.value);

  state.currentContext = state.currentContext.parentRef;

  return state;
}

export function construct(
  token: AnyToken,
  state: ConstructTreeState<ContextualTagNode>
) {
  if (token.type === TokenTypes.OpenTagStart) {
    handleTagOpenStart(state, token);
  }

  state.caretPosition++;

  return state;
}
