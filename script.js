const menuButton = document.getElementById('menu-button');
const navULContainer = document.getElementById('nav-ul-container');

menuButton.addEventListener('click', () => {
    if(navULContainer.classList.contains('show')){
        navULContainer.classList.toggle('hidden');
        setTimeout(() => {
            navULContainer.classList.remove('show');
        },600)
    } else {
        navULContainer.classList.remove('hidden')
        navULContainer.classList.toggle('show');
    }
})
