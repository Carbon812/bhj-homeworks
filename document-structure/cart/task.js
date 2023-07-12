let _inc = document.querySelectorAll(".product__quantity-control_inc");
let inc = Array.from(_inc);
let _dec = document.querySelectorAll(".product__quantity-control_dec");
let dec = Array.from(_dec);
let _amnt = document.querySelectorAll(".product__quantity-value");
let amnt = Array.from(_amnt);
let _add = document.querySelectorAll(".product__add");
let add = Array.from(_add);
let _product = document.querySelectorAll(".product");
let product = Array.from(_product);
let cart = document.querySelector(".cart__products");
let _imag = document.querySelectorAll(".product__image");
let imag = Array.from(_imag);
let arr = [];

for(let i=0; i<inc.length; i++){
    inc[i].addEventListener("click", function () {
        amnt[i].textContent = parseInt(amnt[i].textContent) + 1;
    });
}

for(let i=0; i<dec.length; i++){
    dec[i].addEventListener("click", function () {
        if(amnt[i].textContent === "0"){
            return;
        }
        amnt[i].textContent = parseInt(amnt[i].textContent) - 1;
    });
}

for(let i=0; i<add.length; i++){

    add[i].addEventListener("click", function () {

        let dataID = parseInt(product[i].getAttribute("data-id"));

        let compare = (elem) => elem === dataID;

        let _cartProduct = document.querySelectorAll(".cart__product");
        let cartProduct = Array.from(_cartProduct);

        let cartFunc = function(){
            for(let k=0; k<cartProduct.length; k++){
                arr.push(parseInt(cartProduct[k].getAttribute("data-id")));
                console.log("this is " + arr);
            }
        }
        cartFunc();

        if(arr.some(compare)){
            let current = parseInt(document.querySelector('.cart__product[data-id="' + dataID + '"]').lastChild.textContent);
            document.querySelector('.cart__product[data-id="' + dataID + '"]').lastChild.textContent = current + parseInt(amnt[i].textContent);
        }else{
            cart.insertAdjacentHTML("beforeEnd", '<div class="cart__product" data-id=' + product[i].getAttribute("data-id") + '>' + '<img class="cart__product-image" src=' + imag[i].getAttribute("src") + '>' + '<div class="cart__product-count">' + amnt[i].textContent + '</div>');
        }
    });
}



