function initTaskInteractions(){
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
}

export default initTaskInteractions;