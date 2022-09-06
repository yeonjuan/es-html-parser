# ES HTML Parser

The HTML parser that generates [ESTree](https://github.com/estree/estree)-like ast.

This project began as a fork of [hyntax](https://github.com/mykolaharmash/hyntax).

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

### parse

```ts
parse(html: string): ParseResult
```

**Arguments**

- `html`:

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
  - [CloseNode](#closenode)
- [AttributeNode](#attributenode)
  - [AttributeKeyNode](#attributekeynode)
  - [AttributeValueWrapperStartNode](#attributevaluewrapperstartnode)
  - [AttributeValueWrapperEndNode](#attributevaluewrapperendnode)
  - [AttributeValueNode](#attributevaluenode)
- [ScriptTagNode](#scriptnode)
  - [OpenScriptTagStartNode](#ppentagstartscriptnode)
  - [OpenScriptTagEndNode](#ppentagendscriptnode)
  - [CloseScriptTagNode](#closetagscriptnode)
  - [ScriptTagContentNode](#scripttagcontentnode)
- [StyleNode](#stylenode)
  - [OpenStyleTagStartNode](#opentagstartstylenode)
  - [OpenStyleTagEndNode](#opentagendstylenode)
  - [CloseStyleTagNode](#closetagstylenode)
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
  - [DoctypeAttributeWrapperStart](#doctypeattributewrapperstart)
  - [DoctypeAttributeWrapperEnd](#doctypeattributewrapperend)

### Common

#### BaseNode

```ts
interface BaseNode {
  type: string;
  loc: SourceLocation;
  range: [number, number];
}
```

#### SourceLocation

```ts
interface SourceLocation {
  source?: string;
  start: Position;
  end: Position;
}
```

#### Position

```ts
interface Position {
  line: number; // >= 1
  column: number; // >= 0
}
```

#### Token

```ts
interface Token extends BaseNode {
  type: string;
  value: string;
}
```

### DocumentNode

```ts
interface DocumentNode extends BaseNode {
  type: "Document";
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
}
```

### TextNode

```ts
interface TextNode extends BaseNode {
  type: "Text";
  value: string;
}
```

### TagNode

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

```ts
interface OpenTagStartNode {
  type: "OpenTagStart";
  value: string;
}
```

#### OpenTagEndNode

```ts
interface OpenTagEndNode {
  type: "OpenTagEnd";
  value: string;
}
```

#### CloseTagNode

```ts
interface CloseTagNode {
  type: "CloseTag";
  value: string;
}
```

### AttributeNode

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

```ts
interface AttributeKeyNode extends BaseNode {
  type: "AttributeKey";
  value: string;
}
```

#### AttributeValueWrapperStartNode

```ts
interface AttributeValueWrapperStartNode extends BaseNode {
  type: "AttributeValueWrapperStart";
  value: string;
}
```

#### AttributeValueWrapperEndNode

```ts
interface AttributeValueWrapperEndNode extends BaseNode {
  type: "AttributeValueWrapperEnd";
  value: string;
}
```

#### AttributeValueNode

```ts
interface AttributeValueNode extends BaseNode {
  type: "AttributeValue";
  value: string;
}
```

### ScriptTagNode

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

```ts
interface CommentNode extends BaseNode {
  type: "Comment";
  start: CommentStartNode;
  end: CommentEndNode;
  value: CommentContentNode;
}
```

#### CommentStartNode

```ts
interface CommentStartNode extends BaseNode {
  type: "CommentStart";
  value: string;
}
```

#### CommentEndNode

```ts
interface CommentEndNode extends BaseNode {
  type: "CommentEnd";
  value: string;
}
```

#### CommentContentNode

```ts
interface CommentContentNode extends BaseNode {
  type: "CommentContent";
  value: string;
}
```

### DoctypeNode

```ts
interface DoctypeNode extends BaseNode {
  type: "Doctype";
  attributes: Array<DoctypeAttributeNode>;
  start: DoctypeStartNode;
  end: DoctypeEndNode;
}
```

#### DoctypeStartNode

```ts
interface DoctypeStartNode extends BaseNode {
  type: "DoctypeStart";
  value: string;
}
```

#### DoctypeEndNode

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

- MIT
