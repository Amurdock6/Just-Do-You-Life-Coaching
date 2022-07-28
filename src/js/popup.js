// Pop on Click Close/ Open logic
const popXClose = document.querySelector("#popclosex");
const closepop = document.querySelector("#close")
const popupback = document.querySelector("#popup")

if(window.location.href == "http://localhost:5500/index.html#contactform") {
    popupback.classList.add('hidden');
}

popXClose.addEventListener('click', () => {
    if(popupback.classList.contains('hidden')) {
        popupback.classList.remove('hidden');
        popupback.classList.add('block');
    } else {
        popupback.classList.remove('block');
        popupback.classList.add('hidden');
    }

});

closepop.addEventListener('click', () => {
    if(popupback.classList.contains('hidden')) {
        popupback.classList.remove('hidden');
        popupback.classList.add('block');
    } else {
        popupback.classList.remove('block');
        popupback.classList.add('hidden');
    }
});