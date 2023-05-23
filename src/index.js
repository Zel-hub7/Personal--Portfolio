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

// The pop Up window
const bannerProjects = [
  {
    Name: 'projectOne',
    projectTitle: 'Multi-Post Stories',
    projectDescription:
      `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    img1: 'Img/recent-works place holder.png',
    img2: 'Img/Img Placeholder (2).png',
  },
];

function mainProject() {
  const presentProject = bannerProjects[0];
  const headLineProject =`<div class="please">
   <img src = ${presentProject.img1} class = "project-img works-flex-item" alt ="The banner" />
   <img src = ${presentProject.img2} class = "desktop-img" alt ="The banner" />
  

  </div>
  ` 

  return headLineProject;
}
  
