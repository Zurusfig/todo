function initTaskInteractions(){
    const taskItems = document.querySelectorAll(".task-item");

    taskItems.forEach(element => {
        const taskItem = element;
        const taskCircle = taskItem.querySelector(".task-circle");
        const taskInfo = taskItem.querySelector(".task-info");
        const taskStar = taskItem.querySelector(".task-star");
        const taskName = taskItem.querySelector(".task-name");
        taskCircle.addEventListener("click", (e) => {
            taskCircle.querySelector(".checked").classList.toggle('display-none');
            taskCircle.querySelector(".unchecked").classList.toggle('display-none');
            taskInfo.classList.toggle("cross-text");
        });

        taskStar.addEventListener("click", (e) => {
            taskStar.querySelector(".unfilled-star").classList.toggle('display-none');
            taskStar.querySelector(".filled-star").classList.toggle('display-none');
            taskName.querySelector("span").classList.toggle('highlight');
        })

    });
}

export default initTaskInteractions;