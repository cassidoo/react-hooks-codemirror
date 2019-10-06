import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";

export default function CodeMirrorReact({ options, language }) {
  const inputElement = useRef();

  require(`codemirror/mode/${language}/${language}.js`);

  useEffect(() => {
    CodeMirror.fromTextArea(inputElement.current, options);
  }, [options]);

  return <textarea ref={inputElement} defaultValue={"new note"} />;
}
