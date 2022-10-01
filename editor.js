var htmlEditor = CodeMirror.fromTextArea(
  document.getElementById("HTMLeditor"),
  {
    mode: "xml",
    tabSize: 4,
    theme: "pastel-on-dark",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    autoRefresh: true,
  }
);

var cssEditor = CodeMirror.fromTextArea(document.getElementById("CSSeditor"), {
  mode: "css",
  tabSize: 4,
  theme: "pastel-on-dark",
  lineNumbers: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  autoRefresh: true,
});

var jsEditor = CodeMirror.fromTextArea(document.getElementById("JSeditor"), {
  mode: "javascript",
  tabSize: 4,
  theme: "pastel-on-dark",
  lineNumbers: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  autoRefresh: true,
});

function refresh() {
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  let jsCode = "<script>" + jsEditor.getValue() + "</script>";
  let previewWindow =
    document.querySelector("#preview-window").contentWindow.document;

  previewWindow.open();
  console.log(previewWindow);
  previewWindow.write(htmlCode + cssCode + jsCode);
  previewWindow.close();
}

window.addEventListener("keydown", function() {
  clearTimeout(300);
  delay = setTimeout(refresh, 300);
});
