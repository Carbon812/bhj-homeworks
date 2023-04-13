let item = document.getElementById("timer");
let value = parseInt(item.textContent);

function timer() {
    value = value - 1;
    item.textContent = value;
    if(value === -1){
        alert("Вы победили в конкурсе!");
    }
}

setInterval(timer, 1000);