let _sizes = document.querySelectorAll(".font-size");
let sizes = Array.from(_sizes);
let book = document.querySelector(".book");
let book_color = document.querySelector(".book__control_color");
let book_color_children = Array.from(book_color.children);
let colors = book_color_children.filter(elem => elem.classList.contains("color"));
let book_bgc = document.querySelector(".book__control_background");
let book_bgc_children = Array.from(book_bgc.children);
let bgcs = book_bgc_children.filter(elem => elem.classList.contains("color"));

for(let i=0; i<sizes.length; i++){
    sizes[i].addEventListener("click", function (event) {
        event.preventDefault();
        sizes.forEach(elem => elem.classList.remove("font-size_active"));
        this.classList.add("font-size_active");
        let dataSize = this.getAttribute("data-size");
        switch (dataSize) {
            case "small":
                book.classList.add("font-size_small");
                break;
            case "big":
                book.classList.add("font-size_big");
                break;
            default:
                book.classList.remove("font-size_small", "font-size_big");
        }
    })
}

for(let i=0; i<colors.length; i++){
    colors[i].addEventListener("click", function (event) {
        event.preventDefault();
        colors.forEach(elem => elem.classList.remove("color_active"));
        this.classList.add("color_active");
        let dataTextColor = this.getAttribute("data-text-color");
        switch (dataTextColor) {
            case "gray":
                book.classList.add("book_color-gray");
                book.classList.remove("book_color-whitesmoke");
                break;
            case "whitesmoke":
                book.classList.add("book_color-whitesmoke");
                book.classList.remove("book_color-gray");
                break;
            default:
                book.classList.remove("book_color-gray", "book_color-whitesmoke");
        }
    })
}

for(let i=0; i<bgcs.length; i++){
    bgcs[i].addEventListener("click", function (event) {
        event.preventDefault();
        bgcs.forEach(elem => elem.classList.remove("color_active"));
        this.classList.add("color_active");
        let dataTextColor = this.getAttribute("data-bg-color");
        switch (dataTextColor) {
            case "gray":
                book.classList.add("book_bg-gray");
                book.classList.remove("book_bg-white");
                break;
            case "black":
                book.classList.add("book_bg-black");
                book.classList.remove("book_bg-gray");
                break;
            default:
                book.classList.remove("book_bg-gray", "book_bg-black");
        }
    })
}