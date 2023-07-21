let xhr = new XMLHttpRequest();

let items = document.getElementById("items");
let loader = document.getElementById("loader");

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let valutes = xhr.response.response.Valute;
        let arr = Object.values(valutes);

        for(let i=0; i<arr.length; i++){
            items.insertAdjacentHTML("beforeEnd", '<div class="item">' + '<div class="item__code">' + arr[i].CharCode + '</div>' + '<div class="item__value">' + arr[i].Value + '</div>' + '<div class="item__currency">' + 'руб.' + '</div>' + '</div>');
        }
        loader.classList.remove("loader_active");
    }

};