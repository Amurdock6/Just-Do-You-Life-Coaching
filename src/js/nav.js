
// Nav Bar JS Dynamic Styling
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const burgerWrapper = document.querySelector("#logo-and-hamburger");


burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        menu.classList.add('text-center');
        menu.classList.add('w-full');
        menu.classList.add('items-center');
        menu.classList.add('h-screen');
        nav.classList.add('h-screen');
        nav.classList.remove('items-center');
        nav.classList.add('absolute')
        burgerWrapper.classList.remove('items-center');
        burger.classList.add('items-center');
        burger.classList.add('flex');

    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        menu.classList.remove('text-center');
        menu.classList.remove('w-full');
        menu.classList.remove('items-center');
        menu.classList.remove('h-screen');
        nav.classList.remove('h-screen');
        nav.classList.add('items-center');
        nav.classList.remove('absolute');
        burgerWrapper.classList.add('items-center');
        burger.classList.remove('items-center');
        burger.classList.remove('flex');

    }
});