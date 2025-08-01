import './style.css';
import initNavToggle from './components/nav.js';
import { initTaskInteractions, createTaskElement } from './components/taskItem.js';
import { initOverlayToggle } from './components/modal.js'
import './forms/formHandler.js';
import { allTasks } from './utils/app.js';

initNavToggle();

initTaskInteractions();

initOverlayToggle();

const allTaskTitle = document.querySelector(".main-body .title");
allTaskTitle.addEventListener("click",(e)=>{
    console.log(allTasks);
})




