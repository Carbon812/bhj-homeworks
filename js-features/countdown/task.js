const deadlineTime = 20000;

const deadline = new Date().getTime() + deadlineTime;

console.log(deadline);
// id таймера
let timerId = null;

// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
function countdownTimer() {
    const diff = deadline - new Date();

    console.log(diff);

    if (diff <= 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }

    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

}
// получаем элементы, содержащие компоненты даты
const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');
// вызываем функцию countdownTimer
countdownTimer();
// вызываем функцию countdownTimer каждую секунду
timerId = setInterval(countdownTimer, 1000);

