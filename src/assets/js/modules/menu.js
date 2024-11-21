function initMenu() {
    toggleBurger();
}

function toggleBurger() {
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-menu');
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
}
export default initMenu;