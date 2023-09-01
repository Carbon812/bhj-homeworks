const textarea = document.getElementById("editor");
const clear = document.getElementById("clear");

textarea.oninput = function () {
    localStorage.setItem("textarea", this.value);
}

textarea.value = localStorage.getItem("textarea");
clear.onclick = function () {
    textarea.value = "";
    localStorage.clear();
}

