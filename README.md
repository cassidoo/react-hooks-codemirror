# react-hooks-codemirror

A nice little React component for CodeMirror

## Usage

```jsx
let options = {
  lineNumbers: true,
  highlightFormatting: true,
  tabSize: 2,
  theme: "dracula"
};

let language = "javascript";

// if you want to have a custom theme, make this true, and include your CSS wherever this component is used.
// You can pick a default theme from here:
// https://codemirror.net/demo/theme.html
let customTheme = false;

<CodeMirrorReact options={options} language={language} customTheme />;
```
