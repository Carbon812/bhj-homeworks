let xhr = new XMLHttpRequest();

let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {

        let title = xhr.response.data.title;
        pollTitle.innerHTML = title;

        let arrAnswers = xhr.response.data.answers;

        for(let i=0; i<arrAnswers.length; i++){
            pollAnswers.insertAdjacentHTML("beforeEnd", '<button class="poll__answer">' + arrAnswers[i] + '</button>');
        }

        let btns = Array.from(document.querySelectorAll(".poll__answer"));

        let checkClick = function (el) {
            el.addEventListener("click", function(){
                alert("Спасибо, ваш голос засчитан!")
            })
        }

        btns.some(checkClick);
    }
};

