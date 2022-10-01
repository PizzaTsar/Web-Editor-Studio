function showEditor(editor) {
  editor = document.getElementById(editor + "editor");
  editor.parentNode.classList.toggle("hide");
}

function rotateView() {
  document
    .getElementsByClassName("editor")[0]
    .classList.toggle("horizontal-view");
}

function copyText(trigger) {
  type = trigger.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;
  message = trigger.parentNode.childNodes[1]

  let i = -1;
  let copyText = "";

  switch (type) {
    case "HTML":
      i = 0;
      copyText =
        document.getElementsByClassName("CodeMirror-line")[i].childNodes[0]
          .innerHTML;
      break;
    case "CSS":
      i = 1;
      copyText =
        document.getElementsByClassName("CodeMirror-line")[i].childNodes[0]
          .childNodes[0].innerHTML;
      break;
    case "JS":
      i = 2;
      copyText =
        document.getElementsByClassName("CodeMirror-line")[i].childNodes[0]
          .childNodes[0].innerHTML;
      break;
    default:
      i = -1;
  }

  navigator.clipboard.writeText(copyText);
  message.classList.add("show-message");

  setTimeout(() => {
    message.classList.remove("show-message");
  }, 1500)

}
