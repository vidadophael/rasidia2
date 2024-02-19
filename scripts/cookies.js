const msgCookies = document.querySelector(".cookies-msg");

function aceite() {
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('show')
}

if(localStorage.lgpd == "sim") {
    msgCookies.classList.remove('show')
}else {
    msgCookies.classList.add('show')
}