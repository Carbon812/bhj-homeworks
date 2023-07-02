let taskList = document.querySelector(".tasks__list");
let taskInput = document.querySelector(".tasks__input");
let taskAdd = document.querySelector(".tasks__add");

taskAdd.addEventListener("click", function (event) {
    event.preventDefault();
    taskList.insertAdjacentHTML("beforeEnd","<div class=\"task\">\n" +
        "                      <div class=\"task__title\">\n" +
        taskInput.value +
        "                      </div>\n" +
        "                      <a href=\"#\" class=\"task__remove\">&times;</a>\n" +
        "                    </div>");
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        event.preventDefault();
        taskList.insertAdjacentHTML("beforeEnd","<div class=\"task\">\n" +
            "                      <div class=\"task__title\">\n" +
            taskInput.value +
            "                      </div>\n" +
            "                      <a href=\"#\" class=\"task__remove\">&times;</a>\n" +
            "                    </div>");
    }
});

document.addEventListener("click", function (event) {
    let tasks__remove = Array.from(document.querySelectorAll(".task__remove"));
    let tasks = Array.from(document.querySelectorAll(".task"));
    for(let i=0; i<tasks__remove.length; i++){
       if(event.target === tasks__remove[i]){
           tasks[i].remove();
       }
    }
});





