let hasTooltip = Array.from(document.getElementsByClassName("has-tooltip"));

for(let i=0; i<hasTooltip.length; i++){

    hasTooltip[i].insertAdjacentHTML("afterEnd", '<div class="tooltip">' + hasTooltip[i].getAttribute("title") + '</div>');

    hasTooltip[i].addEventListener("click", function (event) {
        event.preventDefault();

        let tooltip = Array.from(document.getElementsByClassName("tooltip"));

        this.nextSibling.classList.toggle("tooltip_active");

        let ind = hasTooltip.indexOf(this);

        tooltip.splice(ind, 1);

        tooltip.forEach(elem => elem.classList.remove("tooltip_active"));

        this.nextSibling.style.left = hasTooltip[i].getBoundingClientRect().left + 'px';

    })
}