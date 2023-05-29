let tabs = document.querySelectorAll(".tab");
let _tabs = Array.from(tabs);
let tabs_content = document.querySelectorAll(".tab__content");
let _tabs_content = Array.from(tabs_content);

for(let i=0; i<_tabs.length; i++){
    _tabs[i].addEventListener("click", func);
}

function func() {
    _tabs.forEach(elem => elem.classList.remove("tab_active"));
    _tabs_content.forEach(elem => elem.classList.remove("tab__content_active"));
    this.classList.add("tab_active");
    _tabs_content[_tabs.indexOf(this)].classList.add("tab__content_active");
}