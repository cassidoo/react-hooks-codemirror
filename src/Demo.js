import React from "react";
import CodeMirrorReact from "./codemirror";

// If you wanna try this, add a customTheme var set
// to true to the component and make the theme
// "exampleuglytheme"
import "./exampleuglytheme.css";

function Demo() {
  let options = {
    lineNumbers: true,
    highlightFormatting: true,
    tabSize: 2,
    theme: "dracula",
    hint: true,
    extraKeys: { "Ctrl-Space": "autocomplete" }
  };
  return (
    <div className="demo">
      <CodeMirrorReact options={options} language={"python"} />
    </div>
  );
}

export default Demo;
