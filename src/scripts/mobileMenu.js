const menuButton = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile');
menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle("visible");
})
