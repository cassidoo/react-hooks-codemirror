import React, { useState } from "react";

import CodeMirrorReact from "./codemirror";

function App() {
  let options = { lineNumbers: true };
  return (
    <div className="App">
      <CodeMirrorReact options={options} language={"javascript"} />
    </div>
  );
}

export default App;
