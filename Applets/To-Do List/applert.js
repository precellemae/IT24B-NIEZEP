class TodoList {
    constructor() {
        this.editingIndex = -1;
        this.addButton = document.getElementById('addButton');
        this.todoInput = document.getElementById('todoInput');
        this.dueDateInput = document.getElementById('dueDateInput');
        this.todoList = document.getElementById('todoList');

        this.addButton.addEventListener('click', () => this.addOrUpdateTask());
        this.todoList.addEventListener('click', (e) => this.handleListClick(e));
    }
}
handleListClick(event) {
    const target = event.target;
    if (target.classList.contains('removeButton')) {
        this.removeTask(target);
    } else if (target.classList.contains('editButton')) {
        this.editTask(target);
    } else if (target.classList.contains('doneButton')) {
        this.doneTask(target);
    }
}

addOrUpdateTask() {
    const taskText = this.todoInput.value.trim();
    const dueDate = this.dueDateInput.value;
    if (taskText) {
        this.editingIndex === -1 ? this.addTask(taskText, dueDate) : this.updateTask(taskText, dueDate);
        this.todoInput.value = '';
        this.dueDateInput.value = '';  
    }
}
addTask(taskText, dueDate) {
    const listItem = this.createTaskElement(taskText, dueDate);
    this.todoList.appendChild(listItem);
}

updateTask(taskText, dueDate) {
    const taskItem = this.todoList.children[this.editingIndex];
    taskItem.querySelector('.task-text').textContent = taskText;
    taskItem.querySelector('.due-date').textContent = `Due Date: ${dueDate ? new Date(dueDate).toLocaleString() : 'No due date'}`;
    this.resetEditing();
}

removeTask(target) {
    this.todoList.removeChild(target.closest('.todo-item'));
}

editTask(target) {
    const taskItem = target.closest('.todo-item');
    this.todoInput.value = taskItem.querySelector('.task-text').textContent;
    const dueDateText = taskItem.querySelector('.due-date').textContent.replace('Due Date: ', '');
    this.dueDateInput.value = new Date(dueDateText).toISOString().slice(0, -1);  // Set due date input
    this.editingIndex = Array.from(this.todoList.children).indexOf(taskItem);
    this.addButton.textContent = 'Update';
}
resetEditing() {
    this.editingIndex = -1;
    this.addButton.textContent = 'Add';
}

disableButtons(taskItem) {
    const buttons = taskItem.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

document.addEventListener('DOMContentLoaded', () => new TodoList());