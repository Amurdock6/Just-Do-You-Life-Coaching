
// Nav Bar JS Dynamic Styling
const burgerXButton = document.querySelector("#burgerXButton");
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const x = document.querySelector("#nav-x");
const burgerWrapper = document.querySelector("#logo-and-hamburger");

burgerXButton.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        menu.classList.add('w-full');
        menu.classList.add('h-screen');
        nav.classList.add('h-screen');
        nav.classList.remove('items-center');
        nav.classList.add('absolute')
        burgerWrapper.classList.remove('items-center');
        burger.classList.add('items-center');
        burger.classList.add('flex');
        burger.classList.add('hidden');
        x.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        menu.classList.remove('w-full');
        menu.classList.remove('h-screen');
        nav.classList.remove('h-screen');
        nav.classList.add('items-center');
        nav.classList.remove('absolute');
        burgerWrapper.classList.add('items-center');
        burger.classList.remove('items-center');
        burger.classList.remove('flex');
        burger.classList.remove('hidden');
        x.classList.add('hidden');
    }
});

// Nav Drop Down on Click Listener
const dropdown = document.querySelector("#dropdown");
const dropdownContent = document.querySelector("#dropdwon-content")

dropdown.addEventListener('click', () => {
    if(dropdownContent.classList.contains('block')) {
        dropdownContent.classList.remove('block');
    } else {
        dropdownContent.classList.add('block');
    }
});