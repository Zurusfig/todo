import './style.css';
import initNavToggle from './components/nav.js';
import initTaskInteractions from './components/taskItem.js';
import initOverlayToggle from './components/modal.js'
import './forms/formHandler.js';

console.log("Webpack is working!");

initNavToggle();

initTaskInteractions();

initOverlayToggle();



