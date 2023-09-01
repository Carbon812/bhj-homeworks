const form = document.getElementById('signin__form');
const user = document.getElementById("user_id");
const welcome = document.getElementById("welcome");

if(localStorage.getItem("user_id").length !== 0){
    welcome.classList.add("welcome_active");
    user.innerHTML = localStorage.getItem("user_id");
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    xhr.addEventListener('readystatechange', function(){
        let data = JSON.parse(this.response);
        if (this.readyState === xhr.DONE && data.success === true){
            localStorage.setItem("user_id", data.user_id);
            user.innerHTML = data.user_id;
            welcome.classList.add("welcome_active");
        }
        if (this.readyState === xhr.DONE && data.success === false){
            alert('«Неверный логин/пароль»');
        }
    })
    xhr.send(formData);
})