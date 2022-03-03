const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

input.addEventListener('keydown', (event) => {
  if (event.code === "Enter") {
    let taskText = input.value.trim();
    if (taskText) {
      createTask(taskText);
      input.value = '';
    }
    return false;
  }
})

button.onclick = function() {
  let taskText = input.value.trim();
  if (taskText) {
      createTask(taskText);
      input.value = '';
  }
  return false;
}

function createTask(text) {
  const divTask = document.createElement('div');
  divTask.className = 'task';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'task__title';
  taskTitle.textContent = text;

  const taskRemove = document.createElement('a');
  taskRemove.className = 'task__remove';
  taskRemove.href = '#';
  taskRemove.innerHTML = '&times;';
  taskRemove.onclick = removeTask;

  tasksList.append(divTask);
  divTask.prepend(taskTitle);
  divTask.append(taskRemove);
  return divTask;
}
function removeTask() {
  this.closest('div.task').remove();
}