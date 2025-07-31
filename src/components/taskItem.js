import { Task, Project, allTasks } from '../utils/app.js';
import { formatDateToDDMMYY, passDue } from '../utils/format.js';

function initSingleTaskInteraction(element,task){
        const taskItem = element;
        const taskCircle = taskItem.querySelector(".task-circle");
        const taskInfo = taskItem.querySelector(".task-info");
        const taskStar = taskItem.querySelector(".task-star");
        const taskName = taskItem.querySelector(".task-name");
        taskCircle.addEventListener("click", (e) => {
            taskCircle.querySelector(".checked").classList.toggle('display-none');
            taskCircle.querySelector(".unchecked").classList.toggle('display-none');
            taskInfo.classList.toggle("cross-text");
            task.toggleIsCompleted();
        });

        taskStar.addEventListener("click", (e) => {
            taskStar.querySelector(".unfilled-star").classList.toggle('display-none');
            taskStar.querySelector(".filled-star").classList.toggle('display-none');
            taskName.querySelector("span").classList.toggle('highlight');
            task.toggleIsImportant();
        })
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

        taskDataElement.appendChild(taskStarElement);

        const taskDateElement = document.createElement("div");
        taskDateElement.classList.add("task-date");
        taskDateElement.innerHTML = formatDateToDDMMYY(task.dueDate);
        if(passDue(task.dueDate)){
            taskDateElement.classList.add("date-pass-due");
            taskItemElement.querySelector(".task-name").classList.add("date-pass-due");
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
