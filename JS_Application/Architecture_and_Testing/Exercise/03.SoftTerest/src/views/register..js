const section = document.getElementById('registerPage');
section.remove();

export function showRegister(context) {
    context.showSection(section);
}