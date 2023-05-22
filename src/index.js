const humBurger = document.getElementsByClassName("ham-container");
const navItems = document.getElementsByClassName("nav-list");
const body = document.getElementsByTagName("body")[0];
const ham = document.getElementById("ham");
const logo = document.getElementById("logo");
const mobile = document.querySelector(".mobiles-menu");
const mobile_li = document.querySelectorAll("#mobile-class");
const hidden = document.querySelector("#hidden");
const main_section = document.querySelector(".main-section");
const width = window.innerWidth;
const mediaQuery = window.matchMedia("(min-width: 768px)");
const active = document.querySelector("active");
const links = document.querySelectorAll('a');

mobile.classList.add('remove');
hidden.style.display = "none";

ham.addEventListener('click', () => {
  mobile.classList.remove('remove');
  ham.classList.add('remove')
  hidden.style.display = "block"; 
  logo.classList.add('remove')
  mobile.style.overflow = 'hidden';
})
hidden.addEventListener('click', function() {
  mobile.classList.add('remove');
  ham.classList.remove('remove');
  hidden.style.display = "none";
  logo.classList.remove('remove');
  
});


