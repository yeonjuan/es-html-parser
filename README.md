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

- [Node](#node)

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
  - [ScriptNode](#scriptnode)
    - [OpenTagStartScriptNode](#ppentagstartscriptnode)
    - [OpenTagEndScriptNode](#ppentagendscriptnode)
    - [CloseTagScriptNode](#closetagscriptnode)
    - [ScriptTagContentNode](#scripttagcontentnode)
  - [StyleNode](#stylenode)
    - [OpenTagStartStyleNode](#opentagstartstylenode)
    - [OpenTagEndStyleNode](#opentagendstylenode)
    - [CloseTagStyleNode](#closetagstylenode)
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

### Node

#### DocumentNode

```ts
interface DocumentNode extends BaseNode {
  type: "Document";
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
}
```

#### TextNode

```ts
interface TextNode extends BaseNode {
  type: "Text";
  value: string;
}
```

#### TagNode

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

#### ScriptNode

```ts
interface ScriptNode extends BaseNode {
  type: NodeTypes.ScriptTag;
  attributes: Array<AttributeNode>;
  openStart: OpenTagStartScriptNode;
  openEnd: OpenTagEndScriptNode;
  close: CloseTagScriptNode;
  value?: ScriptTagContentNode;
}
```

#### StyleNode

```ts
interface StyleNode extends BaseNode {
  type: NodeTypes.StyleTag;
  attributes: Array<AttributeNode>;
  openStart: OpenTagStartStyleNode;
  openEnd: OpenTagEndStyleNode;
  close: CloseTagStyleNode;
  value?: StyleTagContentNode;
}
```

#### CommentNOde

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

## License

- MIT
