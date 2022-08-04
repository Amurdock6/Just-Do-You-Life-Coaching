// Pop on Click Close/ Open logic
const popXClose = document.querySelector("#popclosex");
const closepop = document.querySelector("#close");
const popupback = document.querySelector("#popup");

if(window.location.href == "http://localhost:5500/index.html#contactform") {
    popupback.classList.add('hidden');
}

/* Checks to see if cookie exist if it does then the pop up will not be showen to user */
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function checkCookie() {
    
    var myCookie = getCookie("poppedup");

    if (myCookie == null) {
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
        
        document.cookie = "poppedup=true";

    }
    else {
        popupback.classList.remove('block');
        popupback.classList.add('hidden');
    }
}

checkCookie();