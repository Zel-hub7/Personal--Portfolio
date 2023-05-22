const ham = document.getElementById('ham');
const logo = document.getElementById('logo');
const mobile = document.querySelector('.mobiles-menu');
const hidden = document.querySelector('#hidden');
const mainSection = document.querySelector('.main-section');
const links = document.querySelectorAll('li');

mobile.classList.add('remove')
hidden.style.display = "none";

ham.addEventListener("click", function () {
  mobile.style.display = "block";
  hidden.style.display = "block";
  ham.style.display = "none";
  ham.classList.add('remove');
  logo.classList.add('remove');
});

hidden.addEventListener("click", function () {
  mobile.style.display = "none";
  hidden.style.display = "none";
  ham.style.display = "block";
  mainSection.style.display = "block";
  logo.classList.remove('remove');
 
});

links.forEach(link => {
  link.addEventListener('click', () => {
    mobile.style.display = "none";
    logo.classList.remove('remove');
    hidden.style.display = "none";
    ham.style.display = "block";

  });
});

