const section = document.getElementById('loginPage');
section.remove();

export function showLogin(context) {
    context.showSection(section);
}