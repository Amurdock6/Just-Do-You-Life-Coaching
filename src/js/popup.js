// Pop on Click Close/ Open logic
const popXClose = document.querySelector("#popclosex");
const closepop = document.querySelector("#close")
const popupback = document.querySelector("#popup")

popXClose.addEventListener('click', () => {
    if(popupback.classList.contains('hidden')) {
        popupback.classList.remove('hidden');
        popupback.classList.add('block');
        console.log('clicked');
    } else {
        popupback.classList.remove('block');
        popupback.classList.add('hidden');
        console.log('clicked else');
    }

});

closepop.addEventListener('click', () => {
    if(popupback.classList.contains('hidden')) {
        popupback.classList.remove('hidden');
        popupback.classList.add('block');
        console.log('clicked');
    } else {
        popupback.classList.remove('block');
        popupback.classList.add('hidden');
        console.log('clicked else');
    }
});