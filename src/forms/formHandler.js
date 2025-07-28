import '../utils/app.js'

const taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', handleAddTask);

function handleAddTask(event){
    console.log(Date.now());
    event.preventDefault();

    var taskTitle = document.getElementById("task-title").value;
    var taskDescription = document.getElementById("task-description").value;
    var taskDueDate = document.getElementById("task-duedate").value;
    var taskProject = null;

    const newTask = new Task(taskTitle,taskDescription,taskDueDate,taskProject);

    console.log(newTask);
}
