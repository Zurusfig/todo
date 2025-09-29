import { addProjectToList } from '../components/projectContainer.js';
import { Project, allProjects } from '../utils/app.js';

const projectForm = document.getElementById('projectForm');

projectForm.addEventListener('submit', handleAddProject);

 function renderProjectDropdowns() {
    const selects = [document.getElementById('project-select'), document.getElementById('edit-project-select')];
    selects.forEach(select => {
        if (!select) return;
        select.innerHTML = '';
        allProjects.forEach(project => {
            const option = document.createElement('option');
            option.value = project.id || project.name;
            option.textContent = project.name;
            select.appendChild(option);
        });
    });
}


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