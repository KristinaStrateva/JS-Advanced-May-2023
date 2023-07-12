import { getAllIdeas } from "../api/data.js";

const section = document.getElementById('dashboard-holder');
section.remove();

export function showCatalog(context) {
    context.showSection(section);
    loadIdeas();
}

async function loadIdeas() {
    let ideas = await getAllIdeas();

    if (ideas.length === 0) {
        const h1Element = document.createElement('h1');
        h1Element.textContent = 'No ideas yet! Be the first one :)';

        section.replaceChildren(h1Element);

    } else {
        const fragment = document.createDocumentFragment();

        ideas.map(createIdeaCard).forEach(idea => fragment.appendChild(idea));

        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {
    const element = document.createElement('div');
    element.classList = 'card overflow-hidden';
    element.classList = 'current-card details';
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `<div class="card-body">
    <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea.id}" class="btn" href="">Details</a>`;

    return element;
}