import './src/api/api.js';
import { showCreate } from './src/views/createIdea.js';
import { showCatalog } from './src/views/dashboard.js';
import { showDetails } from './src/views/detals.js';
import { showHome } from './src/views/home.js';
import { showLogin } from './src/views/login.js';
import { showRegister } from './src/views/register..js';

const mainElement = document.querySelector('main');

const links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create',
    'catalogLink': 'catalog',
    'detailsLink': 'details'
}

const views = {
    'home': showHome,
    'login': showLogin,
    'register': showRegister,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails
}

const navElement = document.querySelector('nav');
navElement.addEventListener('click', onNavigation);

const context = {
    showSection,
    goTo,
    updateNavBar
}

updateNavBar();

function onNavigation(event) {
    event.preventDefault();

    const currLink = links[event.target.id];

    goTo(currLink)
}


function goTo(name, ...params) {
    const currFunction = views[name];

    currFunction(context, ...params);
}

function showSection(sectionName) {
    mainElement.replaceChildren(sectionName);
}

function updateNavBar() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData) {
        [...navElement.querySelectorAll('.user')].forEach(li => li.style.display = 'block');
        [...navElement.querySelectorAll('.guest')].forEach(li => li.style.display = 'none');

    } else {
        [...navElement.querySelectorAll('.user')].forEach(li => li.style.display = 'none');
        [...navElement.querySelectorAll('.guest')].forEach(li => li.style.display = 'block');
    }
}