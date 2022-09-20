import React, { useRef, useEffect, Suspense } from "react";
import { EditorDidMount, monaco } from "react-monaco-editor";
import styled from "styled-components";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onDidMount: (value: string) => void;
};

const MonacoEditor = React.lazy(() => import("react-monaco-editor"));

export const HTMLEditor = (props: Props) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const onEditorDidMount: EditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.layout();
    props.onDidMount(editor.getValue());
  };

  useEffect(() => {
    editorRef.current?.layout();
  }, []);

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <MonacoEditor
          width="100%"
          height="100%"
          language="html"
          value={props.value}
          theme="vs"
          onChange={() => props.onChange(editorRef.current.getValue())}
          editorDidMount={onEditorDidMount}
        />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 500px;
  height: 100%;
`;
