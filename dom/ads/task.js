const arr_rotator = document.querySelectorAll(".rotator__case");
let num = 0;
let speed = 1000;
function loop() {
    arr_rotator.forEach(elem => elem.classList.remove("rotator__case_active"));
    arr_rotator[num].classList.add("rotator__case_active");
    arr_rotator[num].style.color = arr_rotator[num].getAttribute("data-color");
    speed = arr_rotator[num].getAttribute("data-speed");
    num++;
    if(num === arr_rotator.length){
        num = 0;
    }
}

setInterval(loop, speed);
