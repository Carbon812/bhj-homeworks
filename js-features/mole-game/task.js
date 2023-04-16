let dead_elem = document.getElementById("dead");
let lost_elem = document.getElementById("lost");
let dead = document.getElementById("dead").textContent;
let lost = document.getElementById("lost").textContent;

dead = parseInt(dead);
lost = parseInt(lost);

let hole = document.getElementsByClassName("hole");
console.log(hole);

getHole = index => document.getElementById(`hole${index}`);

for(let i = 1; i < hole.length + 1; i++){
    (getHole(i).addEventListener("click", f));
}

function f() {
    if(this.className.includes( 'hole_has-mole' )){
        if(dead === 10){
            alert("Victory!");
            dead_elem.textContent = 0;
            dead = -1;
            lost_elem.textContent = 0;
            lost = 0;
        }
        dead += 1;
        dead_elem.textContent = dead;
    }else{
        if(lost === 5){
            alert("Lost!");
            dead_elem.textContent = 0;
            dead = 0;
            lost_elem.textContent = 0;
            lost = -1;
        }
        lost += 1;
        lost_elem.textContent = lost;
    }
}




