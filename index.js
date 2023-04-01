const wrap = document.querySelector('.wrap');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrap.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrap.classList.remove('active');
});

btnLoginPopup.addEventListener('click', ()=> {
    wrap.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrap.classList.remove('active-popup');
});

