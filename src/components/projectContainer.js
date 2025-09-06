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
}
