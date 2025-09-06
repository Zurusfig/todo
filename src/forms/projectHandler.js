import { createTaskElement } from '../components/taskItem.js';
import { Task, Project, allTasks, allProjects } from '../utils/app.js';

const projectForm = document.getElementById('projectForm');
const overlay = document.querySelector(".overlay");

projectForm.addEventListener('submit', handleAddProject);

function handleAddProject(event){
    console.log("add project clicked");
    event.preventDefault();
    const projectName = document.getElementById("project-name");
    const projectNameValue = projectName.value;

    const newProject = new Project(projectNameValue);
    allProjects.push(newProject);
    console.log(allProjects);
}