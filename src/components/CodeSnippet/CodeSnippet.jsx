import React from "react";
import "./CodeSnippet.scss";
import { CopyBlock } from "react-code-blocks";

function CodeSnippet({ code, language, showLineNumbers, theme }) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={theme}
      wrapLines
    />
  );
}

export default CodeSnippet;
