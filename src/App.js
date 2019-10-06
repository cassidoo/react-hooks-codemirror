import React from "react";
import CodeMirrorReact from "./codemirror";
import "codemirror/lib/codemirror.css";

function App() {
  let options = {
    lineNumbers: true,
    highlightFormatting: true,
    tabSize: 2
  };
  return (
    <div className="App">
      <CodeMirrorReact options={options} language={"javascript"} />
    </div>
  );
}

export default App;
