let cookie = document.querySelector(".clicker__cookie");
let amnt_clicks = document.getElementById("clicker__counter");
let value = parseInt(amnt_clicks.textContent);
let indicator = false;

cookie.onclick = switcher;

function switcher() {
    value++;
    amnt_clicks.textContent = value;
    if(indicator === false){
        cookie.style.width = "250px";
        indicator = true
    }
    else{
        cookie.style.width = "200px";
        indicator = false;
    }
}

