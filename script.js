const tasks = [];

const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const errorMessage = document.querySelector('#task-error');

function trimInput(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validateTaskInput(value) {
  const trimmed = trimInput(value);
  if (!trimmed) {
    return {
      isValid: false,
      trimmedValue: '',
      message: 'Task cannot be empty.'
    };
  }

  return {
    isValid: true,
    trimmedValue: trimmed,
    message: ''
  };
}

function renderTasks() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    const emptyState = document.createElement('li');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No tasks yet. Add your first task above.';
    taskList.appendChild(emptyState);
    return;
  }

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const checkboxId = `task-checkbox-${task.id}`;
    const checkboxLabel = document.createElement('label');
    checkboxLabel.className = 'task-toggle';
    checkboxLabel.htmlFor = checkboxId;

    const checkbox = document.createElement('input');
    checkbox.className = 'task-completion';
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = task.completed;
    checkbox.dataset.taskId = task.id;

    const description = document.createElement('span');
    description.className = 'task-description';
    description.id = `task-description-${task.id}`;
    description.textContent = task.description;
    checkbox.setAttribute('aria-labelledby', description.id);

    if (task.completed) {
      description.classList.add('task-description--complete');
    }

    checkboxLabel.append(checkbox, description);
    listItem.appendChild(checkboxLabel);
    taskList.appendChild(listItem);
  });
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.hidden = true;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

function handleTaskSubmit(event) {
  event.preventDefault();
  clearError();

  const result = validateTaskInput(taskInput.value);
  if (!result.isValid) {
    showError(result.message);
    taskInput.focus();
    return;
  }

  const newTask = {
    id: `task-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    description: result.trimmedValue,
    createdAt: new Date().toISOString(),
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

taskForm.addEventListener('submit', handleTaskSubmit);

taskList.addEventListener('change', (event) => {
  const checkbox = event.target;
  if (!checkbox.matches('.task-completion')) {
    return;
  }

  const task = tasks.find((item) => item.id === checkbox.dataset.taskId);
  if (!task) {
    return;
  }

  task.completed = checkbox.checked;
  const description = checkbox.closest('.task-toggle').querySelector('.task-description');
  description.classList.toggle('task-description--complete', task.completed);
});

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    taskForm.requestSubmit();
  }
});

renderTasks();
