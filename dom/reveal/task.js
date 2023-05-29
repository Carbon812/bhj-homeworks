const _reveal = document.querySelectorAll(".reveal");
const reveal = Array.from(_reveal);

const a = function(element){
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    if(elementTop < viewportHeight){
        element.classList.add("reveal_active");
    }
    if(elementBottom < 0 || elementTop > viewportHeight){
        element.classList.remove("reveal_active");
    }
};

setInterval(() => reveal.some(a), 1000);
