let _hasTooltip = document.getElementsByClassName("has-tooltip");
let hasTooltip = Array.from(_hasTooltip);

for(let i=0; i<hasTooltip.length; i++){
    hasTooltip[i].addEventListener("click", function (event) {
        event.preventDefault();

        let _tooltip = document.getElementsByClassName("tooltip");
        let tooltip = Array.from(_tooltip);
        tooltip.forEach(elem => elem.remove());
        let clue = '<div class="tooltip tooltip_active">' + this.getAttribute("title") + '</div>';
        this.insertAdjacentHTML("beforeEnd", clue);

    })
}