import './style.css';
import initNavToggle, { initNavBar } from './components/nav.js';
import { initTaskInteractions, createTaskElement } from './components/taskItem.js';
import { initModalControls } from './components/modal.js'
import './forms/formHandler.js';
import './forms/projectHandler.js';
import { allTasks } from './utils/models.js';

// initNavBar();

initNavToggle();

initTaskInteractions();

initModalControls();


const allTaskTitle = document.querySelector(".main-body .title");
allTaskTitle.addEventListener("click",(e)=>{
    console.log(allTasks);
})



