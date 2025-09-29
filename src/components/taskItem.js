import { Task, Project, allTasks } from '../utils/models.js';
import { formatDateToDDMMYY, passDue, removeItemOnce } from '../utils/format.js';
import initOverlayToggle, { loadEditModal } from './modal.js';

function initSingleTaskInteraction(element,task){
        const taskItem = element;
        const taskCircle = taskItem.querySelector(".task-circle");
        const taskInfo = taskItem.querySelector(".task-info");
        const taskStar = taskItem.querySelector(".task-star");
        const taskName = taskItem.querySelector(".task-name");
        const taskKebab = taskItem.querySelector(".task-kebab");

        circleInteraction(element,task);

        starInteraction(element,task);

        taskKebab.addEventListener("click", (e) => {
            console.log("kebab clicked");
            const overlay = document.querySelector(".overlay");
            const addOverlayContainer = document.querySelector(".overcontainer");
            const editOverlayContainer = document.querySelector(".editcontainer");

            overlay.classList.toggle("hidden");
            addOverlayContainer.classList.add("display-none");
            editOverlayContainer.classList.remove("display-none");

            loadEditModal(task);
            editTask(element,task);
            circleInteraction(element,task);
            starInteraction(element,task);
        })
}

function circleInteraction(element,task){
    const taskItem = element;
    const taskCircle = taskItem.querySelector(".task-circle");
    const taskInfo = taskItem.querySelector(".task-info");
    
    const newTaskCircle = taskCircle.cloneNode(true);
    taskCircle.parentNode.replaceChild(newTaskCircle, taskCircle);
    
    newTaskCircle.addEventListener("click", (e) => {
            newTaskCircle.querySelector(".checked").classList.toggle('display-none');
            newTaskCircle.querySelector(".unchecked").classList.toggle('display-none');
            taskInfo.classList.toggle("cross-text");
            task.toggleIsCompleted();
    });
}

function starInteraction(element,task){
    const taskItem = element;
    const taskStar = taskItem.querySelector(".task-star");
    const taskName = taskItem.querySelector(".task-name");
    
    const newTaskStar = taskStar.cloneNode(true);
    taskStar.parentNode.replaceChild(newTaskStar, taskStar);
    
    newTaskStar.addEventListener("click", (e) => {
        newTaskStar.querySelector(".unfilled-star").classList.toggle('display-none');
        newTaskStar.querySelector(".filled-star").classList.toggle('display-none');
        taskName.querySelector("span").classList.toggle('highlight');
        task.toggleIsImportant();
    });
}


export function initTaskInteractions(){
    if(allTasks.length){
        allTasks.forEach(element => {
        initSingleTaskInteraction(element);
        });
    }
}


export function createTaskElement(task){
    const taskItemElement = document.createElement("div");
    taskItemElement.classList.add('task-item');


    function createTaskCircle(){
        const taskCircleElement = document.createElement("div");
        taskCircleElement.classList.add('task-circle');

        const checkedCircleElement = document.createElement("div");
        checkedCircleElement.classList.add('checked');
        checkedCircleElement.classList.add('display-none');

        const checkedCircleSpan = document.createElement("span");
        checkedCircleSpan.classList.add('material-symbols-outlined');
        checkedCircleSpan.innerHTML = "radio_button_checked";

        checkedCircleElement.appendChild(checkedCircleSpan);
        taskCircleElement.append(checkedCircleElement);

        const uncheckedCircleElement = document.createElement("div");
        uncheckedCircleElement.classList.add('unchecked');

        const uncheckedCircleSpan = document.createElement("span");
        uncheckedCircleSpan.classList.add('material-symbols-outlined');
        uncheckedCircleSpan.innerHTML = "radio_button_unchecked";

        uncheckedCircleElement.appendChild(uncheckedCircleSpan);
        taskCircleElement.appendChild(uncheckedCircleElement);
        
        if(task.isCompleted){
            checkedCircleElement.classList.remove("display-none");
            uncheckedCircleElement.classList.add("display-none");
        }

        return taskCircleElement;
    }

    const taskCircleElement = createTaskCircle();
    taskItemElement.appendChild(taskCircleElement);

    function createTaskInfo(){
        const taskInfoElement = document.createElement("div");
        taskInfoElement.classList.add("task-info");

        const taskNameElement = document.createElement("div");
        taskNameElement.classList.add("task-name");
        taskNameElement.innerHTML = `<span>${task.name}</span>`
        taskInfoElement.appendChild(taskNameElement);

        const taskDescriptionElemenet = document.createElement("div");
        taskDescriptionElemenet.classList.add("task-description");
        taskDescriptionElemenet.innerHTML = `${task.description}`;
        taskInfoElement.appendChild(taskDescriptionElemenet);

        return taskInfoElement;
    }
    const taskInfoElement = createTaskInfo();
    taskItemElement.appendChild(taskInfoElement);
    
    if(task.isCompleted){
        taskInfoElement.classList.add("cross-text");
    }

    function createTaskData(){
        const taskDataElement = document.createElement("div");
        taskDataElement.classList.add("task-data");

        const taskStarElement = document.createElement("div");
        taskStarElement.classList.add("task-star");

        const unfilledStarElement = document.createElement("div");
        unfilledStarElement.classList.add("unfilled-star");
        const unfilledStarSpan = document.createElement("span");
        unfilledStarSpan.classList.add('material-symbols-outlined');
        unfilledStarSpan.innerHTML = "star";
        unfilledStarElement.appendChild(unfilledStarSpan);
        taskStarElement.appendChild(unfilledStarElement);

        const filledStarElement = document.createElement("div");
        filledStarElement.classList.add("filled-star");
        filledStarElement.classList.add("display-none")
        const filledStarSpan = document.createElement("span");
        filledStarSpan.classList.add('material-symbols-outlined');
        filledStarSpan.innerHTML = "star";
        filledStarElement.appendChild(filledStarSpan);
        taskStarElement.appendChild(filledStarElement);
        
        if(task.isImportant){
            unfilledStarElement.classList.add("display-none");
            filledStarElement.classList.remove("display-none");
            taskItemElement.querySelector(".task-name span").classList.add('highlight');
        }

        taskDataElement.appendChild(taskStarElement);

        const taskDateElement = document.createElement("div");
        taskDateElement.classList.add("task-date");
        
        if(task.dueDate && task.dueDate.trim() !== ''){
            taskDateElement.innerHTML = formatDateToDDMMYY(task.dueDate);
            if(passDue(task.dueDate)){
                taskDateElement.classList.add("date-pass-due");
                taskItemElement.querySelector(".task-name").classList.add("date-pass-due");
            }
        } else {
            taskDateElement.style.display = 'none';
        }

        taskDataElement.appendChild(taskDateElement);

        const taskKebabElement = document.createElement("div");
        taskKebabElement.classList.add("task-kebab");
        const taskKebabSpan = document.createElement("span");
        taskKebabSpan.classList.add('material-symbols-outlined');
        taskKebabSpan.innerHTML = "more_vert";
        taskKebabElement.appendChild(taskKebabSpan);

        taskDataElement.appendChild(taskKebabElement);

        return taskDataElement;
    }

    const taskDataElement = createTaskData();
    taskItemElement.appendChild(taskDataElement);


    initSingleTaskInteraction(taskItemElement,task);


    const taskList = document.querySelector(".task-list");
    taskList.appendChild(taskItemElement);
}

function updateTaskElement(element,task){
    const taskItem = element;
    const taskName = taskItem.querySelector(".task-name");
    const taskDescription = taskItem.querySelector(".task-description");
    const taskDateElement = taskItem.querySelector(".task-date");

    taskName.innerHTML = `<span>${task.name}</span>`;
    taskDescription.innerHTML = task.description;
    
    taskDateElement.classList.remove("date-pass-due");
    taskName.classList.remove("date-pass-due");
    
    if(task.dueDate && task.dueDate.trim() !== ''){
        taskDateElement.innerHTML = formatDateToDDMMYY(task.dueDate);
        taskDateElement.style.display = 'block';
        
        if(passDue(task.dueDate)){
            taskDateElement.classList.add("date-pass-due");
            taskName.classList.add("date-pass-due");
        }
    } else {
        taskDateElement.style.display = 'none';
    }
}

function editTask(element,task){
    const editForm = document.getElementById("editForm");
    const overlay = document.querySelector(".overlay");

    const newEditForm = editForm.cloneNode(true);
    editForm.parentNode.replaceChild(newEditForm, editForm);
    
    newEditForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const taskTitle = document.getElementById("edit-title");
        task.name = taskTitle.value;

        const taskDescription = document.getElementById("edit-description");
        task.description = taskDescription.value;

        const taskDueDate = document.getElementById("edit-duedate");
        task.dueDate = taskDueDate.value || ''; // Ensure it's an empty string if undefined

        const taskProject = document.getElementById("edit-select");
        task.projectId = taskProject.value;

        updateTaskElement(element,task);
        
        circleInteraction(element,task);
        starInteraction(element,task);
        
        overlay.classList.toggle("hidden");
    });

    const deleteBtn = document.getElementById("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
        removeItemOnce(allTasks,task);
        element.remove();
        overlay.classList.toggle("hidden");
    });
}
