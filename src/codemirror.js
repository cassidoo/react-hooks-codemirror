import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";

export default function CodeMirrorReact({
  options = {},
  language = "javascript",
  customTheme
}) {
  const inputElement = useRef();

  if (options.theme && !customTheme) {
    require(`codemirror/theme/${options.theme}.css`);
  }

  useEffect(() => {
    CodeMirror.fromTextArea(
      inputElement.current,
      getOptions(options, language)
    );
  }, [options, language]);

  return <textarea ref={inputElement} defaultValue={""} />;
}

const supportedLanguages = {
  html: "htmlmixed",
  javascript: "javascript",
  python: "python",
  css: "css",
  sql: "sql"
};

function getOptions(options, language) {
  const mode = supportedLanguages[language];

  let optionsCopy = { ...options };

  // Checking if language is supported
  if (mode) {
    require(`codemirror/mode/${mode}/${mode}.js`);
    optionsCopy = { ...optionsCopy, mode };
  } else {
    throw new Error("Language mode not supported");
  }

  // Configure hint for autocomplete
  if (options.hint) {
    require("codemirror/addon/hint/show-hint.js");
    require("codemirror/addon/hint/show-hint.css");

    // Getting hint function from path
    const path =
      language === supportedLanguages.python
        ? "./python-hint.js"
        : `codemirror/addon/hint/${language}-hint.js`;
    const hint = require(`${path}`);
    optionsCopy = { ...optionsCopy, hint };
  }

  return optionsCopy;
}
