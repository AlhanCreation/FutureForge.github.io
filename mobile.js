// mobile.js

// Use touch events for menu button click
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevent default touch behavior
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevent default touch behavior
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Use touch events for form interactions
document.addEventListener('DOMContentLoaded', function() {
  const registerBtn = document.querySelector('.btn');
  const modal = document.getElementById('registerModal');
  const closeBtn = document.querySelector('.close');

  modal.style.display = 'none'; // Hide modal initially

  registerBtn.addEventListener('touchstart', function() {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('touchstart', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('touchstart', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const form = document.getElementById('registerForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    modal.style.display = 'none'; // Close the modal after form submission
  });
});

// Adjustments for form on mobile
document.addEventListener("DOMContentLoaded", function() {
  const registerBtn = document.getElementById('registerBtn');
  const formContainer = document.getElementById('formContainer');
  const formCloseBtn = document.querySelector('.form_close');
  const submitBtn = document.querySelector('.login_form button[type="submit"]');

  registerBtn.addEventListener('touchstart', function() {
    formContainer.classList.toggle('form_open');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
  });

  formCloseBtn.addEventListener('touchstart', function() {
    formContainer.classList.toggle('form_open');
    formContainer.style.display = 'none';
  });

  submitBtn.addEventListener('touchstart', function(event) {
    event.preventDefault();
    alert("Successfully Registered");
    formContainer.style.display = 'none';
    registerBtn.innerText = "ALL SET";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
