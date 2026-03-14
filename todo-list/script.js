(function() {
  // grab DOM elements
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const pendingList = document.getElementById('pending-list');
  const completedList = document.getElementById('completed-list');
  const pendingCounter = document.getElementById('pending-counter');
  const completedCounter = document.getElementById('completed-counter');
  const headerDate = document.getElementById('current-date');
  const deleteAllBtn = document.getElementById('delete-all-btn');

  // helper: get current timestamp in a readable format
  const getCurrentTimestamp = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${day} ${month}, ${hours}:${minutes}`;
  };

  // update header with today's date
  const updateHeaderDate = () => {
    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    headerDate.textContent = today.toLocaleDateString('en-US', options);
  };
  updateHeaderDate();

  // Task class — holds data and basic methods
  class Task {
    constructor(description, addedTime = null) {
      this.id = `task-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
      this.description = description;
      this.addedAt = addedTime || getCurrentTimestamp();
      this.completedAt = null;     // null = pending, string = completed
    }

    // switch between pending and completed
    toggleCompletion() {
      if (this.completedAt === null) {
        this.completedAt = getCurrentTimestamp();
      } else {
        this.completedAt = null;
      }
    }

    // change description text
    updateDescription(newText) {
      if (newText.trim()) {
        this.description = newText.trim();
      }
    }
  }

  // main task array
  let tasks = [];

  // load from localStorage
  const loadTasks = () => {
    const saved = localStorage.getItem('nuevo-todo-tasks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // rebuild as Task instances
        tasks = parsed.map(t => Object.assign(new Task(''), t));
      } catch (e) {
        tasks = [];
      }
    } else {
      // a couple of examples for first visit
      const now = getCurrentTimestamp();
      tasks = [
        new Task('design team sync', now),
        new Task('water balcony plants', now),
      ];
      // mark one as completed to show both lists
      tasks[1].toggleCompletion();
    }
    render();
  };

  // save to localStorage
  const saveTasks = () => {
    localStorage.setItem('nuevo-todo-tasks', JSON.stringify(tasks));
  };

  // render everything based on current tasks
  const render = () => {
    const pending = tasks.filter(t => t.completedAt === null);
    const completed = tasks.filter(t => t.completedAt !== null);

    pendingCounter.textContent = pending.length;
    completedCounter.textContent = completed.length;

    pendingList.innerHTML = '';
    pending.forEach(task => {
      pendingList.appendChild(createTaskElement(task, false));
    });

    completedList.innerHTML = '';
    completed.forEach(task => {
      completedList.appendChild(createTaskElement(task, true));
    });

    saveTasks();
  };

  // create a DOM element for a single task
  const createTaskElement = (task, isCompleted) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = task.id;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';

    const descSpan = document.createElement('span');
    descSpan.className = 'task-text';
    descSpan.textContent = task.description;

    const timeSpan = document.createElement('span');
    timeSpan.className = 'task-timestamp';
    if (isCompleted) {
      timeSpan.innerHTML = `<i class="fa-regular fa-circle-check"></i> done ${task.completedAt}`;
    } else {
      timeSpan.innerHTML = `<i class="fa-regular fa-clock"></i> added ${task.addedAt}`;
    }

    contentDiv.appendChild(descSpan);
    contentDiv.appendChild(timeSpan);

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';

    // toggle completion button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = `btn-icon ${!isCompleted ? 'btn-complete' : ''}`;
    toggleBtn.setAttribute('aria-label', isCompleted ? 'move to pending' : 'mark complete');
    toggleBtn.innerHTML = isCompleted ? '<i class="fa-regular fa-rotate-left"></i>' : '<i class="fa-regular fa-check"></i>';
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTask(task.id);
    });

    // edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-icon';
    editBtn.setAttribute('aria-label', 'edit task');
    editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      editTask(task.id);
    });

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-icon';
    deleteBtn.setAttribute('aria-label', 'delete task');
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });

    actionsDiv.appendChild(toggleBtn);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(contentDiv);
    li.appendChild(actionsDiv);

    return li;
  };

  // task actions
  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.toggleCompletion();
      render();
    }
  };

  const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    const newDesc = prompt('Edit your task:', task.description);
    if (newDesc !== null && newDesc.trim() !== '') {
      task.updateDescription(newDesc.trim());
      render();
    } else if (newDesc !== null && newDesc.trim() === '') {
      alert('task description cannot be empty');
    }
  };

  const deleteTask = (id) => {
    if (confirm('Delete this task?')) {
      tasks = tasks.filter(t => t.id !== id);
      render();
    }
  };

  // delete all tasks at once
  const deleteAllTasks = () => {
    if (tasks.length === 0) {
      alert('No tasks to delete.');
      return;
    }
    if (confirm('Are you sure you want to delete EVERY task? This cannot be undone.')) {
      tasks = [];
      render();
    }
  };

  // add a new task from the input
  const addTask = (description) => {
    if (!description.trim()) return;
    const newTask = new Task(description.trim(), getCurrentTimestamp());
    tasks.push(newTask);
    render();
    taskInput.value = '';
    taskInput.focus();
  };

  // event listeners
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
  });

  deleteAllBtn.addEventListener('click', deleteAllTasks);

  // initialize
  loadTasks();
})();