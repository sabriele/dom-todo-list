const tasks = ['buy milk', 'eat dinner', 'nail javascript', 'give feedback'];
const allTasks = document.querySelector('#todo-list');

const removeButton = () => {
  const button = document.createElement('button');
  button.textContent = 'Remove';
  return button;
};

const toggleDone = () => {
  const task = document.querySelectorAll('li');
  task.forEach((node) => {
    node.addEventListener('click', () => {
      node.classList.toggle('done');
    });
  });
};

const displayTasks = () => {
  tasks.forEach((task) => {
    const newTask = document.createElement('li');
    newTask.textContent = task;
    allTasks.appendChild(newTask);
    toggleDone();
    removeButton();
  });
};

const addTask = () => {
  const taskSubmit = document.querySelector('#submission');
  const addButton = document.querySelector('#addButton');

  addButton.addEventListener('click', () => {
    const ul = document.querySelector('#todo-list');
    while (ul.hasChildNodes()) {
      ul.lastChild.remove();
    }
    tasks.push(taskSubmit.value);
    displayTasks();
  });

  taskSubmit.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      const newTask = document.createElement('li');
      newTask.textContent = taskSubmit.value;
      allTasks.appendChild(newTask);
      tasks.push(newTask.textContent);
    }
  });
};

displayTasks();
addTask();
toggleDone();
