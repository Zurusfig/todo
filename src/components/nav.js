export function initNavBar(){
    const wrapper = document.querySelector('.wrapper');
    const navPanel = document.createElement('div');
    navPanel.classList.add('nav-panel','collapsed');
    wrapper.appendChild(navPanel);

    const panelIcon = document.createElement('div');
    panelIcon.classList.add('panel-icon');
    const menuIcon = document.createElement('span');
    menuIcon.classList.add('material-symbols-outlined');
    menuIcon.textContent = "menu";
    panelIcon.appendChild(menuIcon);
    navPanel.appendChild(panelIcon);

    const allTasksTab = document.createElement('div');
    allTasksTab.classList.add('all-tasks','active');
    allTasksTab.textContent = "ALL TASKS";
    navPanel.appendChild(allTasksTab);

    const defaultListTab = document.createElement('div');
    defaultListTab.classList.add('default-list');
    navPanel.appendChild(defaultListTab);

    const todayTask = document.createElement('div');
    todayTask.classList.add('list', 'clickable');
    todayTask.textContent = "TODAY";
    defaultListTab.appendChild(todayTask);

    const upcomingTask = document.createElement('div');
    upcomingTask.classList.add('list', 'clickable');
    upcomingTask.textContent = "UPCOMING";
    defaultListTab.appendChild(upcomingTask);

    const importantTask = document.createElement('div');
    importantTask.classList.add('list', 'clickable');
    importantTask.textContent = "IMPORTANT";
    defaultListTab.appendChild(importantTask);

    const completedTask = document.createElement('div');
    completedTask.classList.add('list', 'clickable');
    completedTask.textContent = "COMPLETED";
    defaultListTab.appendChild(completedTask);

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    navPanel.appendChild(projectContainer);

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');
    projectHeader.textContent = "PROJECTS";
    projectContainer.appendChild(projectHeader);

    const projectRectBar = document.createElement('div');
    projectRectBar.classList.add('rectangle-bar');
    projectContainer.appendChild(projectRectBar);

    const projectLists = document.createElement('div');
    projectLists.classList.add('project-lists');
    projectContainer.appendChild(projectLists);

    // potentially add project lists here later

    const addProjectBtn = document.createElement('div');
    addProjectBtn.classList.add('add-project-btn');
    const addIcon = document.createElement('span');
    addIcon.classList.add('material-symbols-outlined');
    addIcon.textContent = "add_circle";
    addProjectBtn.appendChild(addIcon);
    const addText = document.createElement('div');
    addText.classList.add('text');
    addText.textContent = "ADD PROJECT";
    addProjectBtn.appendChild(addText);

    projectContainer.appendChild(addProjectBtn);

    console.log("nav bar initiated");
}

function initNavToggle(){
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

    console.log("nav initiated");
}

export default initNavToggle;