import React from "react";
import CodeMirrorReact from "./codemirror";
import "codemirror/lib/codemirror.css";

// If you wanna try this, add a customTheme var set
// to true to the component and make the theme
// "exampleuglytheme"
import "./exampleuglytheme.css";

function Demo() {
  let options = {
    lineNumbers: true,
    highlightFormatting: true,
    tabSize: 2,
    theme: "dracula"
  };
  return (
    <div className="demo">
      <CodeMirrorReact options={options} language={"javascript"} />
    </div>
  );
}

export default Demo;
