let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    const taskText = input.value;

    if(taskText === "") return;

    // create li
    const li = document.createElement("li");
    li.innerText = taskText;

    // toggle complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // prevent toggle
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = ""; // clear input
});
