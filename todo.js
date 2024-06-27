// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // Create task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="deleteBtn">Delete</button>
    `;
    // Add event listener to the checkbox
    const checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        taskItem.classList.add("completed");
      } else {
        taskItem.classList.remove("completed");
      }
    });
    // Add event listener to the delete button
    const deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
      taskItem.remove();
    });
    // Append task item to the task list
    taskList.appendChild(taskItem);
    // Clear the input field
    taskInput.value = "";
  }
}

// Event listener for adding a task
addTaskBtn.addEventListener("click", addTask);

// Event listener for pressing Enter to add a task
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
