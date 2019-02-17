const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const allTasks = document.querySelector("#todo-list");
const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#add-button");

const handleSubmitTask = () => {
  tasks.push(inputBox.value);
  displayTasks(inputBox.value);
  inputBox.value = null;
};

const handleComplete = task => {
  task.addEventListener("click", () => {
    task.classList.toggle("done");
  });
};

const handleRemoveTask = () => {
  const taskRow = document.querySelectorAll(".remove-button");
  taskRow.forEach(row => {
    row.addEventListener("click", () => {
      row.parentNode.remove();
    });
  });
};

const displayTasks = task => {
  const taskRow = document.createElement("li");
  const taskDetails = document.createElement("div");
  const removeButton = document.createElement("button");
  taskDetails.textContent = task;
  taskDetails.classList.add("task-details");

  removeButton.textContent = "🚮";
  removeButton.classList.add("remove-button");

  taskRow.appendChild(taskDetails);
  taskRow.appendChild(removeButton);
  allTasks.appendChild(taskRow);

  handleComplete(taskDetails);
  handleRemoveTask();
};

tasks.forEach(displayTasks);
addButton.addEventListener("click", () => {
  if (inputBox.value) handleSubmitTask();
});
inputBox.addEventListener("keypress", e => {
  if (e.key === "Enter" && inputBox.value) handleSubmitTask();
});
