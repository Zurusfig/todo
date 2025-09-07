import { createTaskElement } from '../components/taskItem.js';
import { Task, Project, allTasks } from '../utils/app.js';

const taskForm = document.getElementById('taskForm');
const overlay = document.querySelector(".overlay");

taskForm.addEventListener('submit', handleAddTask);

function handleAddTask(event){
    console.log(Date.now());
    event.preventDefault();

    const taskTitle = document.getElementById("task-title");
    console.log(taskTitle);
    const taskTitleValue = taskTitle.value;
    console.log(taskTitleValue);

    const taskDescription = document.getElementById("task-description");
    console.log(taskDescription);
    const taskDescriptionValue = taskDescription.value;
    console.log(taskDescriptionValue);

    const taskDueDate = document.getElementById("task-duedate");
    console.log(taskDueDate);
    const taskDueDateValue = taskDueDate.value || '';
    console.log(taskDueDateValue);

    const taskProject = document.getElementById("project-select");
    console.log(taskProject);
    const taskProjectValue = taskProject.value;
    console.log(taskProjectValue);

    const newTask = new Task(taskTitleValue,taskDescriptionValue,taskDueDateValue,taskProjectValue);

    console.log(newTask);
    overlay.classList.toggle('hidden');

    createTaskElement(newTask);
    allTasks.push(newTask);
}

export function clearAddTask(){
    const taskTitle = document.getElementById("task-title");
    taskTitle.value = "";

    const taskDescription = document.getElementById("task-description");
    taskDescription.value = "";

    const taskDueDate = document.getElementById("task-duedate");
    taskDueDate.value = "";
    
    const taskProject = document.getElementById("project-select");
    taskProject.value = "";
}

import { allProjects } from '../utils/app.js';

export function renderProjectDropdown() {
    const select = document.getElementById('project-select');
    if (!select) return;
    select.innerHTML = '';
    allProjects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.id || project.name; // use id if available
        option.textContent = project.name;
        select.appendChild(option);
    });
}