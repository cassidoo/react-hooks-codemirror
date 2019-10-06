import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";

export default function CodeMirrorReact({ options, language }) {
  const inputElement = useRef();

  require(`codemirror/mode/${language}/${language}.js`);

  if (options.theme) {
    require(`codemirror/theme/${options.theme}.css`);
  }

  useEffect(() => {
    CodeMirror.fromTextArea(inputElement.current, options);
  }, [options]);

  return <textarea ref={inputElement} defaultValue={""} />;
}
