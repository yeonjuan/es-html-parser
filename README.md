# ES HTML Parser

The HTML parser that generates [ESTree](https://github.com/estree/estree)-like ast.

This project began as a fork of [hyntax](https://github.com/mykolaharmash/hyntax). For using static analysis, it developed to follows ESTree-like ast specification.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API Reference](#api-reference)
- [AST Format](#ast-format)
- [License](#license)

## Install

```
npm install es-html-parser
```

## Usage

```js
import { parse } from "es-html-parser";

const input = `
<html>
  <body>
    <button type="button"> press here </button>
  </body>
</html>
`;

const { ast, tokens } = parse(input);
```

## API Reference

### Functions

#### parse

```ts
parse(html: string): ParseResult;
```

**Arguments**

- `html`: HTML string to parse.

**Returns**

- `ParseResult`: Result of parsing

### Types

#### ParseResult

```ts
interface ParseResult {
  ast: DocumentNode;
  tokens: AnyToken[];
}
```

- `ast`: The root node of the ast.
- `tokens`: An array of resulting tokens.

#### AnyNode

The `AnyNode` is an union type of all nodes.

```ts
type AnyNode =
  | DocumentNode
  | TextNode
  | TagNode
  | OpenTagStartNode
  | OpenTagEndNode
  | CloseTagNode
  | AttributeNode
  | AttributeKeyNode
  | AttributeValueNode
  | AttributeValueWrapperStartNode
  | AttributeValueWrapperEndNode
  | ScriptTagNode
  | OpenScriptTagStartNode
  | CloseScriptTagNode
  | OpenScriptTagEndNode
  | ScriptTagContentNode
  | StyleTagNode
  | OpenStyleTagStartNode
  | OpenStyleTagEndNode
  | StyleTagContentNode
  | CloseStyleTagNode
  | CommentNode
  | CommentStartNode
  | CommentEndNode
  | CommentContentNode
  | DoctypeNode
  | DoctypeStartNode
  | DoctypeEndNode
  | DoctypeAttributeNode
  | DoctypeAttributeValueNode
  | DoctypeAttributeWrapperStart
  | DoctypeAttributeWrapperEnd;
```

#### AnyToken

The `AnyToken` is an union type all tokens.

```ts
type AnyToken =
  | Token<TokenTypes.Text>
  | Token<TokenTypes.OpenTagStart>
  | Token<TokenTypes.OpenTagEnd>
  | Token<TokenTypes.CloseTag>
  | Token<TokenTypes.AttributeKey>
  | Token<TokenTypes.AttributeAssignment>
  | Token<TokenTypes.AttributeValueWrapperStart>
  | Token<TokenTypes.AttributeValue>
  | Token<TokenTypes.AttributeValueWrapperEnd>
  | Token<TokenTypes.DoctypeStart>
  | Token<TokenTypes.DoctypeAttributeValue>
  | Token<TokenTypes.DoctypeAttributeWrapperStart>
  | Token<TokenTypes.DoctypeAttributeWrapperEnd>
  | Token<TokenTypes.DoctypeEnd>
  | Token<TokenTypes.CommentStart>
  | Token<TokenTypes.CommentContent>
  | Token<TokenTypes.CommentEnd>
  | Token<TokenTypes.OpenScriptTagStart>
  | Token<TokenTypes.OpenScriptTagEnd>
  | Token<TokenTypes.ScriptTagContent>
  | Token<TokenTypes.CloseScriptTag>
  | Token<TokenTypes.OpenStyleTagStart>
  | Token<TokenTypes.OpenStyleTagEnd>
  | Token<TokenTypes.StyleTagContent>
  | Token<TokenTypes.CloseStyleTag>;
```

### NodeTypes

## AST Format

- [Common](#common)

  - [BaseNode](#basenode)
  - [SourceLocation](#sourcelocation)
  - [Position](#position)
  - [Token](#token)

- [DocumentNode](#documentnode)
- [TextNode](#textnode)
- [TagNode](#tagnode)
  - [OpenTagStartNode](#opentagstartnode)
  - [OpenTagEndNode](#opentagendnode)
  - [CloseTagNode](#closetagnode)
- [AttributeNode](#attributenode)
  - [AttributeKeyNode](#attributekeynode)
  - [AttributeValueWrapperStartNode](#attributevaluewrapperstartnode)
  - [AttributeValueWrapperEndNode](#attributevaluewrapperendnode)
  - [AttributeValueNode](#attributevaluenode)
- [ScriptTagNode](#scripttagnode)
  - [OpenScriptTagStartNode](#openscripttagstartnode)
  - [OpenScriptTagEndNode](#openscripttagendnode)
  - [CloseScriptTagNode](#closescripttagnode)
  - [ScriptTagContentNode](#scripttagcontentnode)
- [StyleTagNode](#styletagnode)
  - [OpenStyleTagStartNode](#openstyletagstartnode)
  - [OpenStyleTagEndNode](#openstyletagendnode)
  - [CloseStyleTagNode](#closestyletagnode)
  - [StyleTagContentNode](#styletagcontentnode)
- [CommentNode](#commentnode)
  - [CommentStartNode](#commentstartnode)
  - [CommentEndNode](#commentendnode)
  - [CommentContentNode](#commentcontentnode)
- [DoctypeNode](#doctypenode)
  - [DoctypeStartNode](#doctypestartnode)
  - [DoctypeEndNode](#doctypeendnode)
- [DoctypeAttributeNode](#doctypeattributenode)
  - [DoctypeAttributeValueNode](#doctypeattributevaluenode)
  - [DoctypeAttributeWrapperStartNode](#doctypeattributewrapperstartnode)
  - [DoctypeAttributeWrapperEndNode](#doctypeattributewrapperendnode)

### Common

#### BaseNode

Every AST nodes, and tokens implement `BaseNode` interface.

The `type` field is representing the AST type. It's value is one of the `NodeTypes` or `TokenTypes`.

The `loc` and `range` fields represent the source location of the node.

```ts
interface BaseNode {
  type: string;
  loc: SourceLocation;
  range: [number, number];
}
```

#### SourceLocation

The `start` field represents the start location of the node.

The `end` field represents the end location of the node.

```ts
interface SourceLocation {
  start: Position;
  end: Position;
}
```

#### Position

The `line` is a number representing the line number where the node positioned. It use 1-based index

The `column` is a number representing the offset in the line. It use 0-based index.

```ts
interface Position {
  line: number; // >= 1
  column: number; // >= 0
}
```

#### Token

All tokens implement `Token` interface.

```ts
interface Token<T extends TokenTypes> extends BaseNode {
  type: T;
  value: string;
}
```

### DocumentNode

The `DocumentNode` is the root node of the AST. It represents the HTML document.

```ts
interface DocumentNode extends BaseNode {
  type: "Document";
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
}
```

### TextNode

The `TextNode` represents any plain text in HTML.

```ts
interface TextNode extends BaseNode {
  type: "Text";
  value: string;
}
```

### TagNode

The `TagNode` represents all kinds of tag nodes in HTML except for `doctype`, `script`, `style`, `comment`. (e.g. `<div></div>`, `<span></span>` ...).

```ts
interface TagNode extends BaseNode {
  type: "Tag";
  selfClosing: boolean;
  name: string;
  openStart: OpenTagStartNode;
  openEnd: OpenTagEndNode;
  close?: CloseTagNode;
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
  attributes: Array<AttributeNode>;
}
```

#### OpenTagStartNode

The `OpenTagStartNode` represents the opening part in the [Start Tags](https://www.w3.org/TR/2011/WD-html5-20110405/syntax.html#start-tags). (e.g. `<div`)

```ts
interface OpenTagStartNode {
  type: "OpenTagStart";
  value: string;
}
```

#### OpenTagEndNode

The `OpenTagEndNode` represents the closing part of the open tag. (e.g. `>`, `/>`)

```ts
interface OpenTagEndNode {
  type: "OpenTagEnd";
  value: string;
}
```

#### CloseTagNode

The `ClosingTagNode` represents the end tags. (e.g. `</div>`)

```ts
interface CloseTagNode {
  type: "CloseTag";
  value: string;
}
```

### AttributeNode

The `AttributeNode` represents the attribute parts in the tags. (e.g. `id="foo"`).

```ts
interface AttributeNode extends BaseNode {
  type: "Attribute";
  key: AttributeKeyNode;
  value?: AttributeValueNode;
  startWrapper?: AttributeValueWrapperStartNode;
  endWrapper?: AttributeValueWrapperEndNode;
}
```

#### AttributeKeyNode

The `AttributeKeyNode` represents the key part in the attribute. (e.g. `id`)

```ts
interface AttributeKeyNode extends BaseNode {
  type: "AttributeKey";
  value: string;
}
```

#### AttributeValueWrapperStartNode

The `AttributeValueWrapperStartNode` represents the left side character which wrap the attributes value. (e.g. `"`, `'`).

```ts
interface AttributeValueWrapperStartNode extends BaseNode {
  type: "AttributeValueWrapperStart";
  value: string;
}
```

#### AttributeValueWrapperEndNode

The `AttributeValueWrapperEndNode` represents the right side character which wrap the attributes value. (e.g. `"`, `'`).

```ts
interface AttributeValueWrapperEndNode extends BaseNode {
  type: "AttributeValueWrapperEnd";
  value: string;
}
```

#### AttributeValueNode

The `AttributeValueNode` represents the value part of the attribute. It does not includes wrapper characters. (e.g. `foo`)

```ts
interface AttributeValueNode extends BaseNode {
  type: "AttributeValue";
  value: string;
}
```

### ScriptTagNode

The `ScriptTagNode` represents the script tags in the HTML. (e.g.` <script> ... </script>`).

```ts
interface ScriptTagNode extends BaseNode {
  type: "ScriptTag";
  attributes: Array<AttributeNode>;
  openStart: OpenScriptTagStartNode;
  openEnd: OpenScriptTagEndNode;
  close: CloseScriptTagNode;
  value?: ScriptTagContentNode;
}
```

#### OpenScriptTagStartNode

```ts
interface OpenScriptTagStartNode extends BaseNode {
  type: "OpenScriptTagStart";
  value: string;
}
```

#### OpenScriptTagEndNode

```ts
interface OpenScriptTagEndNode extends BaseNode {
  type: "OpenScriptTagEnd";
  value: string;
}
```

#### CloseScriptTagNode

```ts
interface CloseScriptTagNode extends BaseNode {
  type: "CloseScriptTag";
  value: string;
}
```

#### ScriptTagContentNode

```ts
interface ScriptTagContentNode extends BaseNode {
  type: "ScriptTagContent";
  value: string;
}
```

### StyleTagNode

The `StyleTagNode` represents `style` tags in HTML. (e.g. `<style>...</style>`)

```ts
interface StyleTagNode extends BaseNode {
  type: "StyleTag";
  attributes: Array<AttributeNode>;
  openStart: OpenStyleTagStartNode;
  openEnd: OpenStyleTagEndNode;
  close: CloseStyleTagNode;
  value?: StyleTagContentNode;
}
```

#### OpenStyleTagStartNode

The `OpenStyleTagStartNode` represents

```ts
interface OpenStyleTagStartNode extends BaseNode {
  type: "OpenStyleTagStart";
  value: string;
}
```

#### OpenStyleTagEndNode

```ts
interface OpenStyleTagEndNode extends BaseNode {
  type: "OpenStyleTagEnd";
  value: string;
}
```

#### CloseStyleTagNode

```ts
interface CloseStyleTagNode extends BaseNode {
  type: "CloseStyleTag";
  value: string;
}
```

#### StyleTagContentNode

```ts
interface StyleTagContentNode extends BaseNode {
  type: "StyleTagContent";
  value: string;
}
```

### CommentNode

The `CommentNode` represents comment in HTML. (e.g. `<!-- content --> `)

```ts
interface CommentNode extends BaseNode {
  type: "Comment";
  start: CommentStartNode;
  end: CommentEndNode;
  value: CommentContentNode;
}
```

#### CommentStartNode

The `CommentStartNode` represents comment start character sequence. (e.g. `<!--`)

```ts
interface CommentStartNode extends BaseNode {
  type: "CommentStart";
  value: string;
}
```

#### CommentEndNode

The `CommentEndNode` represents comment end character sequence. (e.g. `-->`)

```ts
interface CommentEndNode extends BaseNode {
  type: "CommentEnd";
  value: string;
}
```

#### CommentContentNode

The `CommentContentNode` represents text in the comment.

```ts
interface CommentContentNode extends BaseNode {
  type: "CommentContent";
  value: string;
}
```

### DoctypeNode

The `DoctypeNode` represents the [DOCTYPE](https://www.w3.org/TR/2011/WD-html5-20110525/syntax.html#the-doctype) in html.

```ts
interface DoctypeNode extends BaseNode {
  type: "Doctype";
  attributes: Array<DoctypeAttributeNode>;
  start: DoctypeStartNode;
  end: DoctypeEndNode;
}
```

#### DoctypeStartNode

The `DoctypeStartNode` represents the doctype start character sequence. (`<!DOCTYPE`)

```ts
interface DoctypeStartNode extends BaseNode {
  type: "DoctypeStart";
  value: string;
}
```

#### DoctypeEndNode

The `DoctypeEndNode` represents the doctype end character sequence (e.g. `>`)

```ts
interface DoctypeEndNode extends BaseNode {
  type: "DoctypeEnd";
  value: string;
}
```

### DoctypeAttributeNode

```ts
interface DoctypeAttributeNode extends BaseNode {
  type: "DoctypeAttribute";
  key: DoctypeAttributeKey;
}
```

#### DoctypeAttributeValueNode

```ts
interface DoctypeAttributeValueNode extends BaseNode {
  type: "DoctypeAttributeValue";
  value: string;
}
```

#### DoctypeAttributeWrapperStartNode

```ts
interface DoctypeAttributeWrapperStartNode extends BaseNode {
  type: "DoctypeAttributeWrapperStart";
  value: string;
}
```

#### DoctypeAttributeWrapperEndNode

```ts
interface DoctypeAttributeWrapperEndNode extends BaseNode {
  type: "DoctypeAttributeWrapperEnd";
  value: string;
}
```

## License

[MIT](./LICENSE.md)
