import { clearAddTask } from "../forms/formHandler";
import { Task,Project,allTasks } from "../utils/app";

export function initOverlayToggle(){
    const addTaskBtn = document.querySelector(".add-task-btn");
    const overlay = document.querySelector(".overlay");
    const overlayCancelBtn = document.querySelectorAll(".button2"); // cancel button

    addTaskBtn.addEventListener("click", (e) => {
        clearAddTask();
        overlay.classList.toggle("hidden");
        document.querySelector(".overcontainer").classList.remove("display-none");
        document.querySelector(".editcontainer").classList.add("display-none");
    });

    overlayCancelBtn.forEach(element => {
        element.addEventListener("click",(e) => {
            overlay.classList.toggle("hidden");
        })
    })

    const editButton = document.querySelector(".edit-box .button1");
    editButton.addEventListener("click", (e) => {
    overlay.classList.toggle("hidden");
})

}

export function loadEditModal(task){
    console.log("edit loaded");
    const taskTitle = document.getElementById("edit-title");
    taskTitle.value = task.name;

    const taskDescription = document.getElementById("edit-description");
    taskDescription.value = task.description;

    const taskDueDate = document.getElementById("edit-duedate");
    taskDueDate.value = task.dueDate;

    const taskProject = document.getElementById("edit-select");
    taskProject.value = task.projectId; //have to change this
}