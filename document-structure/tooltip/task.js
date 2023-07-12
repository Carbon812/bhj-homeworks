let _hasTooltip = document.getElementsByClassName("has-tooltip");
let hasTooltip = Array.from(_hasTooltip);

for(let i=0; i<hasTooltip.length; i++){

    hasTooltip[i].insertAdjacentHTML("afterEnd", '<div class="tooltip">' + hasTooltip[i].getAttribute("title") + '</div>');

    hasTooltip[i].addEventListener("click", function (event) {
        event.preventDefault();

        let _tooltip = document.getElementsByClassName("tooltip");
        let tooltip = Array.from(_tooltip);

        this.nextSibling.classList.toggle("tooltip_active");

        let ind = hasTooltip.indexOf(this);

        tooltip.splice(ind, 1);

        tooltip.forEach(elem => elem.classList.remove("tooltip_active"));

        this.nextSibling.style.left = hasTooltip[i].getBoundingClientRect().left + 'px';

        // let _tooltip = document.getElementsByClassName("tooltip");
        // let tooltip = Array.from(_tooltip);
        // tooltip.forEach(elem => elem.remove());
        // let clue = '<div class="tooltip tooltip_active">' + this.getAttribute("title") + '</div>';
        // hasTooltip[i].insertAdjacentHTML("afterEnd", '<div class="tooltip">' + hasTooltip[i].getAttribute("title") + '</div>');

    })
}