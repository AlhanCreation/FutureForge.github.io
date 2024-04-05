const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const headerImage = document.querySelector(".header__image");
headerImage.addEventListener(
  "animationend",
  (e) => {
    setTimeout(() => {
      headerImage.classList.add("reveal");
    });
  },
  { once: true }
);

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 500,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content div", {
  ...scrollRevealOption,
  delay: 0,
});

ScrollReveal().reveal(".header .nav__links", {
  delay: 0,
});

document.addEventListener('DOMContentLoaded', function() {
  const registerBtn = document.getElementById('registerBtn');
  const formContainer = document.getElementById('formContainer');
  const formCloseBtn = document.querySelector('.form_close');
  const submitBtn = document.querySelector('.login_form button[type="submit"]');

  registerBtn.addEventListener('click', function() {
    formContainer.classList.toggle('form_open');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  });

  formCloseBtn.addEventListener('click', function() {
    formContainer.classList.toggle('form_open');
    formContainer.style.display = 'none';
  });

  
});
