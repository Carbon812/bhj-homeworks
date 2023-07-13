let inc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
let dec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
let amnt = Array.from(document.querySelectorAll(".product__quantity-value"));
let add = Array.from(document.querySelectorAll(".product__add"));
let product = Array.from(document.querySelectorAll(".product"));
let cart = document.querySelector(".cart__products");
let imag = Array.from(document.querySelectorAll(".product__image"));

for(let i=0; i<inc.length; i++){
    inc[i].addEventListener("click", function () {
        amnt[i].textContent = parseInt(amnt[i].textContent) + 1;
    });
}

for(let i=0; i<dec.length; i++){
    dec[i].addEventListener("click", function () {
        if(parseInt(amnt[i].textContent) === 1){
            return;
        }
        amnt[i].textContent = parseInt(amnt[i].textContent) - 1;
    });
}

for(let i=0; i<add.length; i++){

    add[i].addEventListener("click", function () {

        let dataID = parseInt(product[i].getAttribute("data-id"));

        let compare = (elem) => parseInt(elem.getAttribute("data-id")) === dataID;

        let cartProduct = Array.from(document.querySelectorAll(".cart__product"));

        if(cartProduct.some(compare)){
            let current = parseInt(document.querySelector('.cart__product[data-id="' + dataID + '"]').lastChild.textContent);
            document.querySelector('.cart__product[data-id="' + dataID + '"]').lastChild.textContent = current + parseInt(amnt[i].textContent);
        }else{
            cart.insertAdjacentHTML("beforeEnd", '<div class="cart__product" data-id=' + product[i].getAttribute("data-id") + '>' + '<img class="cart__product-image" src=' + imag[i].getAttribute("src") + '>' + '<div class="cart__product-count">' + amnt[i].textContent + '</div>');
        }
    });
}




