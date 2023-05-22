let dropdown = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let item = document.querySelectorAll(".dropdown__item");
let link = document.querySelectorAll(".dropdown__link");

dropdown.addEventListener("click", ()=>list.classList.toggle("dropdown__list_active"));

link.forEach(function (elem) {
    elem.onclick = function (event) {
        event.preventDefault();
    }
});

for(let i=0; i<item.length; i++){
    item[i].onclick = function() {
        list.classList.remove("dropdown__list_active");
        dropdown.textContent = this.textContent;
    }
}

