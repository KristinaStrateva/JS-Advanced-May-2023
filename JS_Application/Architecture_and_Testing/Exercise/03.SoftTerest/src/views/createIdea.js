const section = document.getElementById('createPage');
section.remove();

export function showCreate(context) {
    context.showSection(section);
}