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





mobile.classList.add('remove')
hidden.style.display = "none";




ham.addEventListener("click", function () {
  mobile.style.display = "block";
  hidden.style.display = "block";
  ham.style.display = "none";
  ham.classList.add('remove');
  logo.classList.add('remove');
  document.body.style.overflow = 'hidden';
  


 
});

hidden.addEventListener("click", function () {
  mobile.style.display = "none";
  hidden.style.display = "none";
  ham.style.display = "block";
  main_section.style.display = "block";
  logo.classList.remove('remove');
  document.body.style.overflow = 'auto';

});



// links.forEach(link => {
//   link.addEventListener('click', () => {
//     document.body.style.overflow = 'auto';
//   });
// });

