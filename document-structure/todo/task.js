let taskList = document.querySelector(".tasks__list");
let taskInput = document.querySelector(".tasks__input");
let taskAdd = document.querySelector(".tasks__add");
let tasks = Array.from(document.querySelectorAll(".task"));

taskAdd.addEventListener("click", function (event) {
    event.preventDefault();

    let checkInput = taskInput.value.trim();

    if(checkInput !== ""){
        taskList.insertAdjacentHTML("beforeEnd","<div class=\"task\">\n" +
            "                      <div class=\"task__title\">\n" +
                                        taskInput.value +
            "                      </div>\n" +
            "                      <a href=\"#\" class=\"task__remove\">&times;</a>\n" +
            "                    </div>");
    }
    taskInput.value = "";
});

taskList.addEventListener("click", function (event) {

    if(event.target.classList.contains("task__remove")){
        this.removeChild(event.target.parentNode);
    }

});










