import React, { useCallback, useEffect, useState } from "react";
import { HTMLEditor } from "./components/html-editor";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Panel } from "./components/panel";
import { ASTViewer } from "./components/ast-viewer";
import styled from "styled-components";
import "./styles/reset.css";
import { ParseResult, parse } from "es-html-parser";
import debounce from "lodash/debounce";

const DEFAULT_HTML = `<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <button> Click me </button>
  </body>
</html>`;

export const App = () => {
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [parseResult, setParseResult] = useState<ParseResult | null>({
    ast: null,
    tokens: [],
  });

  const parseAndUpdateAST = useCallback(
    debounce((html: string) => {
      const result = parse(html);
      setParseResult(result);
    }, 500),
    []
  );
  useEffect(() => parseAndUpdateAST(html), [html]);

  return (
    <Layout>
      <Header />
      <Main>
        <Panel title="HTML" width="40%">
          <HTMLEditor value={html} onDidMount={setHtml} onChange={setHtml} />
        </Panel>
        <Panel title="AST" width="60%">
          <ASTViewer parseResult={parseResult} />
        </Panel>
      </Main>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
