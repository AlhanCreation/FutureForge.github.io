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
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__content div", {
  ...scrollRevealOption,
  delay: 3000,
});

ScrollReveal().reveal(".header .nav__links", {
  delay: 3500,
});




document.addEventListener('DOMContentLoaded', function() {
  const registerBtn = document.querySelector('.btn');
  const modal = document.getElementById('registerModal');
  const closeBtn = document.querySelector('.close');

  // Hide modal initially
  modal.style.display = 'none';

  // Show modal when Register button is clicked
  registerBtn.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Close modal when user clicks outside the modal
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  // Handle form submission
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Retrieve form data
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');

      // Do something with the form data, like sending it to a server
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);

      // Close the modal after form submission
      modal.style.display = 'none';
  });
});










document.addEventListener("DOMContentLoaded", function() {
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

  submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting (just for demonstration)
    alert("Successfully Registered");
    formContainer.style.display = 'none'; // Hide the registration form again
    registerBtn.innerText = "ALL SET"; // Change text of registerBtn
    // Here you can add code to submit the form data to your server if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
