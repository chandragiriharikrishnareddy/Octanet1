document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">X</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function manageTask(e) {
        if (e.target.classList.contains('delete-button')) {
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.classList.toggle('completed');
        }
    }
});
