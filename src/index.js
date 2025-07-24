import './style.css';

console.log("Webpack is working!");

const navIconInHeader = document.querySelector(".nav-icon");
const navPanel = document.querySelector(".nav-panel");
const main = document.querySelector('.main-body');

navIconInHeader.addEventListener("click", (e) => {
        console.log("display off off")
        navPanel.classList.toggle("collapsed");
        navIconInHeader.classList.toggle("hidden");
        main.classList.toggle('expanded');
})

const navIconInPanel = document.querySelector(".panel-icon");

navIconInPanel.addEventListener("click", (e) => {
    navPanel.classList.toggle("collapsed");
    navIconInHeader.classList.toggle("hidden");
    main.classList.toggle('expanded');
});



const taskItems = document.querySelectorAll(".task-item");

taskItems.forEach(element => {
    const taskItem = element;
    const taskCircle = taskItem.querySelector(".task-circle");
    const taskInfo = taskItem.querySelector(".task-info");
    const taskStar = taskItem.querySelector(".task-star");
    taskCircle.addEventListener("click", (e) => {
        taskCircle.querySelector(".checked").classList.toggle('display-none');
        taskCircle.querySelector(".unchecked").classList.toggle('display-none');
        taskInfo.classList.toggle("cross-text");
    });

    taskStar.addEventListener("click", (e) => {
        taskStar.querySelector(".material-symbols-outlined").classList.toggle("fill-star");
    })

});

const addTaskBtn = document.querySelector(".add-task-btn");
const overlay = document.querySelector(".overlay");
const overlayCancelBtn = document.querySelector(".button2"); // cancel button

addTaskBtn.addEventListener("click", (e) => {
    overlay.classList.toggle("hidden");
});

overlayCancelBtn.addEventListener("click",(e) => {
    overlay.classList.toggle("hidden");
});
