import React, { Suspense } from "react";
import { ParseResult } from "es-html-parser";

const ReactJson = React.lazy(() => import("react-json-view"));

type Props = {
  parseResult: ParseResult;
};

export const ASTViewer = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactJson
        src={props.parseResult}
        displayObjectSize={false}
        displayDataTypes={false}
        quotesOnKeys={false}
        enableClipboard={false}
        style={{ overflow: "auto", maxHeight: "100vh" }}
        shouldCollapse={(field) => {
          return (
            field.name === "range" ||
            field.name === "loc" ||
            field.name === "tokens"
          );
        }}
      />
    </Suspense>
  );
};
