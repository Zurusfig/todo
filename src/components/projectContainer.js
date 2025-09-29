import { allProjects } from '../utils/models.js';

export function initProjectContainer(navPanel) {
  console.log("project container initiated");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  navPanel.appendChild(projectContainer);

  const projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");
  projectHeader.textContent = "PROJECTS";
  projectContainer.appendChild(projectHeader);

  const projectRectBar = document.createElement("div");
  projectRectBar.classList.add("rectangle-bar");
  projectContainer.appendChild(projectRectBar);

  const projectLists = document.createElement("div");
  projectLists.classList.add("project-lists");
  projectContainer.appendChild(projectLists);

  // potentially add project lists here later

  const addProjectBtn = document.createElement("div");
  addProjectBtn.classList.add("add-project-btn");
  const addIcon = document.createElement("span");
  addIcon.classList.add("material-symbols-outlined");
  addIcon.textContent = "add_circle";
  addProjectBtn.appendChild(addIcon);
  const addText = document.createElement("div");
  addText.classList.add("text");
  addText.textContent = "ADD PROJECT";
  addProjectBtn.appendChild(addText);

  projectContainer.appendChild(addProjectBtn);
  
  // Add event listeners to existing project kebab menus in template
  initExistingProjectKebabs();
}

export function addProjectToList(projectName) {
  const projectLists = document.querySelector(".project-lists");
  const newProject = document.createElement("div");
  newProject.classList.add("project-list-item");
  const projectNameElement = document.createElement("div");
  projectNameElement.classList.add("project-name", "clickable");
  projectNameElement.textContent = projectName;
  newProject.appendChild(projectNameElement);
  projectLists.appendChild(newProject);

  // add kebab menu
  const projectKebabElement = document.createElement("div");
  projectKebabElement.classList.add("project-kebab");
  const projectKebabSpan = document.createElement("span");
  projectKebabSpan.classList.add('material-symbols-outlined');
  projectKebabSpan.innerHTML = "more_vert";
  projectKebabElement.appendChild(projectKebabSpan);
  
  // add popup menu
  const popupMenu = document.createElement("div");
  popupMenu.classList.add("project-popup-menu");
  
  const editItem = document.createElement("div");
  editItem.classList.add("project-popup-item");
  editItem.textContent = "Edit";
  popupMenu.appendChild(editItem);
  
  const deleteItem = document.createElement("div");
  deleteItem.classList.add("project-popup-item", "delete");
  deleteItem.textContent = "Delete";
  popupMenu.appendChild(deleteItem);
  
  projectKebabElement.appendChild(popupMenu);
  newProject.appendChild(projectKebabElement);
  
  // add event listeners
  addProjectKebabListeners(projectKebabElement, projectNameElement, popupMenu, editItem, deleteItem);
}

function addProjectKebabListeners(kebabElement, nameElement, popupMenu, editItem, deleteItem) {
  // Show/hide popup on kebab click
  kebabElement.addEventListener("click", (e) => {
    e.stopPropagation();
    
    // Close all other popups first
    const allPopups = document.querySelectorAll(".project-popup-menu.show");
    allPopups.forEach(popup => {
      if (popup !== popupMenu) {
        popup.classList.remove("show");
      }
    });
    
    // Toggle current popup
    popupMenu.classList.toggle("show");
  });
  
  // Edit functionality
  editItem.addEventListener("click", (e) => {
    e.stopPropagation();
    popupMenu.classList.remove("show");
    editProject(nameElement);
  });
  
  // Delete functionality
  deleteItem.addEventListener("click", (e) => {
    e.stopPropagation();
    popupMenu.classList.remove("show");
    deleteProject(nameElement);
  });
  
  // Close popup when clicking outside
  document.addEventListener("click", (e) => {
    if (!kebabElement.contains(e.target)) {
      popupMenu.classList.remove("show");
    }
  });
}

function editProject(nameElement) {
  const currentName = nameElement.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentName;
  input.maxLength = 20;
  input.style.cssText = `
    flex: 1;
  padding: 0.5rem;
  background-color: var(--color4);
  border: 2px solid var(--color2);
  font-size: var(--size1-5-o);
  font-family: "Figtree",sans-serif;
  color: var(--color4);
  background-color: var(--color1);
  `;
  
  // Replace text with input
  nameElement.style.display = "none";
  nameElement.parentNode.insertBefore(input, nameElement);
  input.focus();
  input.select();
  
  const finishEdit = () => {
    const newName = input.value.trim();
    if (newName && newName !== currentName) {
      nameElement.textContent = newName;
      // Update project in allProjects array
      updateProjectInArray(currentName, newName);
    }
    nameElement.style.display = "block";
    input.remove();
  };
  
  input.addEventListener("blur", finishEdit);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      finishEdit();
    } else if (e.key === "Escape") {
      nameElement.style.display = "block";
      input.remove();
    }
  });
}

function deleteProject(nameElement) {
  const projectName = nameElement.textContent;
  const confirmed = confirm(`Are you sure you want to delete the project "${projectName}"?`);
  
  if (confirmed) {
    // Remove from DOM
    nameElement.closest(".project-list-item").remove();
    
    // Remove from allProjects array
    const projectIndex = allProjects.findIndex(p => p.name === projectName);
    if (projectIndex !== -1) {
      allProjects.splice(projectIndex, 1);
    }
    
    // Update project dropdowns
    renderProjectDropdowns();
  }
}

function updateProjectInArray(oldName, newName) {
  const project = allProjects.find(p => p.name === oldName);
  if (project) {
    project.setName(newName);
    // Update project dropdowns
    renderProjectDropdowns();
  }
}

function initExistingProjectKebabs() {
  // Wait for DOM to be ready
  setTimeout(() => {
    const existingProjects = document.querySelectorAll('.project-list-item');
    existingProjects.forEach(projectItem => {
      const kebabElement = projectItem.querySelector('.project-kebab');
      const nameElement = projectItem.querySelector('.project-name');
      const popupMenu = projectItem.querySelector('.project-popup-menu');
      const editItem = popupMenu.querySelector('.project-popup-item:not(.delete)');
      const deleteItem = popupMenu.querySelector('.project-popup-item.delete');
      
      if (kebabElement && nameElement && popupMenu && editItem && deleteItem) {
        addProjectKebabListeners(kebabElement, nameElement, popupMenu, editItem, deleteItem);
      }
    });
  }, 100);
}

export function renderProjectDropdowns() {
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

const addProjectBtn = document.querySelector(".add-project-btn");
addProjectBtn.addEventListener("click", (e) => {
  const projectFormContainer = document.querySelector(
    ".project-form-container"
  );
  projectFormContainer.classList.remove("display-none");
});
