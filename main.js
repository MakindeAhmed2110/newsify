const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const wrapper = document.querySelector('.wrapper');
const about = document.querySelector(".about")

const test = document.querySelector('.test')


hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    wrapper.classList.toggle("active");
    about.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    wrapper.classList.remove("active");
    about.classList.remove("active");
}

test.innerHTML = 'makinde ahmed'
