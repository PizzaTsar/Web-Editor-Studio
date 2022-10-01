function showEditor(editor){
    editor = document.getElementById(editor+"editor");
    editor.parentNode.classList.toggle("hide")
}

function rotateView(){
    document.getElementsByClassName("editor")[0].classList.toggle("horizontal-view");
}