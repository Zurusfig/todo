import { clearAddTask } from "../forms/formHandler";

function initOverlayToggle(){
    const addTaskBtn = document.querySelector(".add-task-btn");
    const overlay = document.querySelector(".overlay");
    const overlayCancelBtn = document.querySelectorAll(".button2"); // cancel button

    addTaskBtn.addEventListener("click", (e) => {
        clearAddTask();
        overlay.classList.toggle("hidden");
    });

    overlayCancelBtn.forEach(element => {
        element.addEventListener("click",(e) => {
            overlay.classList.toggle("hidden");
        })
    })

}

export default initOverlayToggle;