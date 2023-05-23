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
    img1: 'Img/recent-works place holder.pngImg/recent-works place holder.png',
    img2: 'Img/Img Placeholder (2).png',
  },
];

function mainProject() {
  const presentProject = bannerProjects[0];
  const headLineProject =`<div class="please">
   
   <div class="multi-note">
   <h2 class="multi">${presentProject.projectTitle}</h2>
   <p>${presentProject.projectDescription}</p>
   <ul class="recent-project-tech works-flex-item">
      <li class="recent-lists">
        <a href="#">${presentProject.tech[0]}</a>
      </li>
      <li class="recent-lists">
        <a href="#">${presentProject.tech[1]}</a>
      </li>
      <li class="recent-lists">
        <a href="#">${presentProject.tech[2]}</a>
      </li>
      <li class="recent-lists">
        <a href="#">${presentProject.tech[3]}</a>
      </li>
    </ul>
    
    <button id=${presentProject.Name} onclick="clickedButton(this.id)" type ="button" class = "works-flex-item see-recent-project" >See project</button>
   </div>
  

  </div>
  ` 
  return headLineProject;
}

const projectInfo = [
  {
    id: 1,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/pro_sec.svg',
  },
  {
    id: 2,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 3,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/website.svg',
  },
  {
    id: 4,
    projectName: 'Profesional Art Printing Data',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/professional.svg',
  },
  {
    id: 5,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 6,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/website.svg',
  },
];



window.addEventListener('load', () => {
  document.getElementById('multiStories').innerHTML = mainProject();
  // document.getElementById('popWindow').innerHTML = showPopup();
  // document.getElementById('grid_contentdesc').innerHTML = showSections().join('');
});
  
