const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

let modalMain = document.getElementById("subscribe-modal");
let close = document.querySelector(".modal__close");
const cookieName = "popup";

if(getCookie(cookieName) === "close"){
    modalMain.classList.remove('modal_active');
}else{
    modalMain.classList.add('modal_active');
}

function closing(){
    modalMain.classList.remove("modal_active");
    document.cookie = "popup=close";
}

close.addEventListener("click", closing);
