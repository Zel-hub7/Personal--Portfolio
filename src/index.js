const ham = document.getElementById('ham');
const logo = document.getElementById('logo');
const mobile = document.querySelector('.mobiles-menu');
const hidden = document.querySelector('#hidden');
const mainSection = document.querySelector('.main-section');
const links = document.querySelectorAll('li');

mobile.classList.add('remove');
hidden.style.display = 'none';

ham.addEventListener('click', () => {
  mobile.style.display = 'block';
  hidden.style.display = 'block';
  ham.style.display = 'none';
  ham.classList.add('remove');
  logo.classList.add('remove');
});

hidden.addEventListener('click', () => {
  mobile.style.display = 'none';
  hidden.style.display = 'none';
  ham.style.display = 'block';
  mainSection.style.display = 'block';
  logo.classList.remove('remove');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    mobile.style.display = 'none';
    logo.classList.remove('remove');
    hidden.style.display = 'none';
    ham.style.display = 'block';
  });
});

// Validation form

const form = document.querySelector('form');
// const container = document.querySelector('form #form-btn-container');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('email').value;
  const error = document.querySelector('#error');
  if (emailInput !== emailInput.toLowerCase()) {
    error.innerText = 'Error: \n Form was not Sent! \n The email should be in LOWERCASE';
  } else {
    form.submit();
  }
});

// console.log(he)
