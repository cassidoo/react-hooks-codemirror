import React from "react";
import CodeMirrorReact from "./codemirror";
import "codemirror/lib/codemirror.css";

function Demo() {
  let options = {
    lineNumbers: true,
    highlightFormatting: true,
    tabSize: 2
  };
  return (
    <div className="demo">
      <CodeMirrorReact options={options} language={"javascript"} />
    </div>
  );
}

export default Demo;
