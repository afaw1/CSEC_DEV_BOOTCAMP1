// Arrays to store todos
let todos = [];
let todoStatus = [];

// Get HTML elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const totalTask = document.getElementById('totaltodos');
const completedTask = document.getElementById('completedtodos');
const clearAllBtn = document.getElementById('clearallbtn');
const emptyMessage = document.getElementById('emptymsg');

// Event listeners
addBtn.addEventListener('click', addTodo);
clearAllBtn.addEventListener('click', clearAll);

// Function to add a todo
function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText === '') {
        alert('Please enter a task');
        return;
    }
    
    todos.push(todoText);
    todoStatus.push(false);
    
    todoInput.value = '';
    showAllTodos();
    updateCounters();
}

// Function to show all todos
function showAllTodos() {
    // Clear the list first
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        emptyMessage.style.display = 'block';
        clearAllBtn.style.display = 'none';
        return;
    }
    
    emptyMessage.style.display = 'none';
    clearAllBtn.style.display = 'block';
    
    for (let i = 0; i < todos.length; i++) {
        createOneTodo(i);
    }
}

// Function to create one todo item
function createOneTodo(index) {
    let li = document.createElement('li');
    li.className = 'todo-item';
    
    let taskDiv = document.createElement('div');
    taskDiv.className = 'todo-text';
    taskDiv.textContent = todos[index];
    
    if (todoStatus[index]) {
        taskDiv.classList.add('completed');
    }
    
    let completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = todoStatus[index] ? 'Undo' : 'Complete';
    
    completeBtn.onclick = function() {
        todoStatus[index] = !todoStatus[index];
        showAllTodos();
        updateCounters();
    };
    
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    deleteBtn.onclick = function() {
        if (confirm('Delete this task?')) {
            todos.splice(index, 1);
            todoStatus.splice(index, 1);
            showAllTodos();
            updateCounters();
        }
    };
    
    let actionsDiv = document.createElement('div');
    actionsDiv.className = 'todo-actions';
    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    
    li.appendChild(taskDiv);
    li.appendChild(actionsDiv);
    
    todoList.appendChild(li);
}

// Function to update counters
function updateCounters() {
    let total = todos.length;
    
    let completed = 0;
    for (let i = 0; i < todoStatus.length; i++) {
        if (todoStatus[i]) {
            completed++;
        }
    }
    
    totalTask.textContent = 'Total tasks: ' + total;
    completedTask.textContent = 'Completed tasks: ' + completed;
}

// Function to clear all todos
function clearAll() {
    if (todos.length === 0) {
        alert('No tasks to clear');
        return;
    }
    
    if (confirm('Delete ALL tasks?')) {
        todos = [];
        todoStatus = [];
        showAllTodos();
        updateCounters();
    }
}

// Initialize the app
showAllTodos();
updateCounters();