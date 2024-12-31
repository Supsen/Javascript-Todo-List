//store the reference to the input and tasklist in ul
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//add new task to list dynamically when user submit it.
function addTask() {
    const taskText = taskInput.value.trim(); // get user input, retrieves and trim extra space
    if (taskText === "") { // check for empty
        alert("Please enter a task");
        return;
    }
    
    const li = document.createElement("li"); // create new task li, dynamically
    li.className = "task-item"; // assigns class task-item for styling 

    const taskSpan = document.createElement("span"); // create span for task text
    taskSpan.textContent = taskText; // set its text content to the user's input
    taskSpan.onclick = () => toggleTaskComplete(li); // add onclick event that call toggleTaskComplete

    const deleteButton = document.createElement("button"); // create delete button dynamically
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(li);

    // Assemble the task item
    li.appendChild(taskSpan); // Appends the span and delete button to the li
    li.appendChild(deleteButton);
    taskList.appendChild(li); // add li to the ul taskList

    taskInput.value = ""; // clear input after adding

}
// marks a task as completed or uncompleted
function toggleTaskComplete(task) {
    task.classList.toggle("computed");
}
// delete a task from the list when the delete button is clicked
function deleteTask(task){
    taskList.removeChild(task); // Uses the removeChild method to delete the specific <li> element (task) from the <ul> (taskList)
}