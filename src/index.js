const humBurger = document.getElementsByClassName("ham-container");
const navItems = document.getElementsByClassName("nav-list");
const body = document.getElementsByTagName("body")[0];
const ham = document.getElementById("ham");
const logo = document.getElementById("logo");
const mobile = document.querySelector(".mobiles-menu");
const mobile_li = document.getElementById("mobile-class");
const hidden = document.querySelector("#hidden");
const main_section = document.querySelector(".main-section");
const width = window.innerWidth;
const mediaQuery = window.matchMedia("(min-width: 768px)");
let check = true;

mobile.style.display = "none";
hidden.style.display = "none";

ham.addEventListener("click", function () {
  mobile.style.display = "block";
  hidden.style.display = "block";
  ham.style.display = "none";
  logo.classList.add('remove');
})
  // logo.style.color = "red";




hidden.addEventListener("click", function () {
  mobile.style.display = "none";
  hidden.style.display = "none";
  ham.style.display = "block";
  main_section.style.display = "block";
  logo.classList.remove('remove');
});

// ham.addEventListener("click", function() {
//     if(mobile.style.display == "none") {
//         mobile.style.display = "block";
//         ham.style.display = "none";
//         hidden.style.display = "block";
//     } else {
//         hidden.addEventListener("click", function() {
//          mobile.style.display == "none";
//          hidden.style.display = "none";
//          ham.style.display = "block";

//         })

//     }
// })

// mobile.style.display = "block";

// ham.addEventListener("click", function(){
//    mobile_li.foreach(function(mobile_li) {
//     mobile_li.remove();
//    });
// });

// function navItemsToggler() {
//     const humBurger = document.getElementsByClassName('ham-container');
//     const navItems = document.getElementsByClassName('nav-list');
//     const body = document.getElementsByTagName('body')[0];

//     navItems[0].classList.toggle('nav-toggle-show');
//     navItems[0].classList.remove('text-center');
//     navItems[0].classList.remove('align-items-center');

// }
// const element = document.getElementById("logo");

// const submit = document.getElementById("ham");

// submit.addEventListener("click", function() {
//   if(element.style.display == "block") {
//     element.style.display = "none";
//   } else {
//     element.style.display = "block";
//   }
// })
