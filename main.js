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

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});
function openRegistrationPage() {
  var registrationForm = document.getElementById('registrationForm');
  registrationForm.style.display = (registrationForm.style.display === 'none') ? 'block' : 'none';
}

// Add a click event listener to the button to open the registration form
document.getElementById('openRegistrationFormBtn').addEventListener('click', openRegistrationPage);

function validateRegistration() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repassword = document.getElementById('repassword').value;

  // Validate email
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate password
  if (!validatePassword(password)) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // Validate re-entered password
  if (password !== repassword) {
    alert('Passwords do not match.');
    return;
  }

    // Registration is valid, you can submit the form or perform other actions here
    alert('Registration successful!');
    // Redirect to the home page
    window.location.href = 'index.html';
}

function validateEmail(email) {
  // You can add a more complex email validation if needed
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password must be at least 8 characters long
  return password.length >= 8;
}
 // Function to open the registration page with a specific message
function openRegistrationPage(message) {
// You can customize the URL and the registration page content as needed
var registrationPageUrl = 'registration.html';
window.location.href = registrationPageUrl + '?message=' + encodeURIComponent(message);
}

