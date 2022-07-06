import './style.css'

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

navBtn.addEventListener('click', ()=> {
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})

const toggleDarkMode = function(){
    checkbox.checked ? html.classList.add("dark")
    : html.classList.remove("dark");
}

toggleDarkMode();

checkbox.addEventListener('click', toggleDarkMode);