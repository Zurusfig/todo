import './style.css';

console.log("Webpack is working!");

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

