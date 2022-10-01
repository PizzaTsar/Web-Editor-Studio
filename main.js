function showEditor(editor){
    console.log(editor+"test")
    editor = document.getElementById(editor+"editor");
    editor.nextSibling.classList.toggle("hide");
}

function rotateView(){
    document.getElementsByClassName("editor")[0].classList.toggle("horizontal-view");
}