import React from "react";
import "./CodeSnippet.scss";
import { CopyBlock, vs2015 } from "react-code-blocks";

function CodeSnippet({ code, language, showLineNumbers }) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={vs2015}
      wrapLines
      codeBlock
    />
  );
}

export default CodeSnippet;
