let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function() {

    let taskText = input.value;

    if(taskText === "") {
        alert("Please enter a task");
        return;
    }

    // create li
    let li = document.createElement("li");
    li.textContent = taskText;

    // toggle complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function() { 
        li.remove();
    });

    li.appendChild(deleteBtn);
    
    list.appendChild(li);

    input.value = ""; // clear input
});
