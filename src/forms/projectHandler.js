import { addProjectToList, renderProjectDropdowns } from '../components/projectContainer.js';
import { Project, allProjects } from '../utils/models.js';

const projectForm = document.getElementById('projectForm');

projectForm.addEventListener('submit', handleAddProject);



function handleAddProject(event){
    console.log("add project clicked");
    event.preventDefault();
    
    const projectName = document.getElementById("project-name");
    const projectNameValue = projectName.value;

    if(projectNameValue.trim() === ''){
        return; // Don't add empty project names
    }

    const newProject = new Project(projectNameValue);
    allProjects.push(newProject);
    
    projectName.value = '';
    
    const projectFormContainer = document.querySelector(".project-form-container");
    projectFormContainer.classList.add("display-none");
    
    console.log("Project added:", newProject);
    console.log("All projects:", allProjects);
    addProjectToList(projectNameValue);
    renderProjectDropdowns();
}
