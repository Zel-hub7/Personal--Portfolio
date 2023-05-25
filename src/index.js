const ham = document.getElementById("ham");
const logo = document.getElementById("logo");
const mobile = document.querySelector(".mobiles-menu");
const hidden = document.querySelector("#hidden");
const mainSection = document.querySelector(".main-section");
const links = document.querySelectorAll("li");

mobile.classList.add("remove");
hidden.style.display = "none";

ham.addEventListener("click", () => {
  mobile.style.display = "block";
  hidden.style.display = "block";
  ham.style.display = "none";
  ham.classList.add("remove");
  logo.classList.add("remove");
});

hidden.addEventListener("click", () => {
  mobile.style.display = "none";
  hidden.style.display = "none";
  ham.style.display = "block";
  mainSection.style.display = "block";
  logo.classList.remove("remove");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    mobile.style.display = "none";
    logo.classList.remove("remove");
    hidden.style.display = "none";
    ham.style.display = "block";
  });
});

// The pop Up window
// 

const bannerProjects = [
  {
    Name: "projectOne",
    projectTitle: "Multi-Post Stories",
    projectDescription: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
    tech: ["CSS", "HTML", "Bootstrap", "Ruby"],
    img1: "Img/recent-works place holder.pngImg/recent-works place holder.png",
    img2: "Img/Img Placeholder (2).png",
  },
];



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


function mainProject() {
  const presentProject = bannerProjects[0];
  const headLineProject = `<div class="please">
   
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
    
    <button class="see-project" type="button">See project</button>
   </div>
  

  </div>
  `;
  return headLineProject;
}


const projectsArr = [
  {
    projectName: 'Multi-Post Stories',
    projectDescription:
       "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technology: ['HTML', 'Bootstrap ', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Data Dashboard Healthcare',
    projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Data Dashboard Healthcare',
    projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Website Portfolio',
    projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Professional Art Printing Data',
    projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Data Dashboard Healthcare',
    projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Website Portfolio',
    projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Keeping track of hundreds  of components website',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Keeping track of hundreds  of components website',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
  {
    projectName: 'Keeping track of hundreds  of components website',
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    linkToLive: 'https://meryemsanem.github.io/desktop-version/',
    linkToSource: 'https://github.com/Zel-hub7/Personal--Portfolio/tree/master/src',
    image: 'Img/Snapshoot Portfolio.png',
  },
];
const projectBtns = document.querySelectorAll('.see-project');
Array.from(projectBtns).forEach((projectBtns, i) => {
  projectBtns.addEventListener('click', () => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth >= 768.1) {
      const popDiv = document.createElement('div');
      popDiv.id = 'background-popup';
      popDiv.style.position = 'fixed';
      popDiv.style.display = 'block';
      popDiv.style.top = '5px';
      popDiv.style.left = '25px';
      popDiv.style.width = '90vw';
      popDiv.style.height = '100vh';
      popDiv.style.zIndex = '11';
      popDiv.innerHTML = `
      <div class="popup-container">
        <div class='desk-pop'>
        <i id = "close" class="fa-solid fa-xmark close"></i>
          </div> <br><br>
              <h3 class ="pro-name" id='name'>${projectsArr[i].projectName}</h3> <br>
     <div class='card-det'>
              <ul class='skill'>
              <a href="#" class="a"><li class='skills'>${projectsArr[i].technology[0]}</li></a> 
              <a href="#" class="a"><li class='skills'>${projectsArr[i].technology[1]}</li></a>
                <a href="#" class="a"><li class='skills'>${projectsArr[i].technology[2]}</li></a>
              </ul> <br><br>
<div class="text-img">
          <img class="Popup-image" src='${projectsArr[i].image}'/>   
          <p class='project-text'>
              ${projectsArr[i].projectDescription}
              </p>
        </div>
      <div class='button-pop'>
                <a href='${projectsArr[i].linkToLive}'>
                  <button class='desk-button'>
                    <span>See Live</span>
                   <i class="fa-sharp fa-light fa-arrow-up-left-from-circle fa-rotate-90 fa-2xs"></i>
                  </button>
                </a>
                <a href='${projectsArr[i].linkToSource}'>
                  <button class='desk-button'>
                    <span>See Source</span>
                    <i class='fa-brands fa-github fa-2xs'></i>
                  </button>
                </a>
              </div>
            </div>  
        </div>`;
      document.body.appendChild(popDiv);
    } else {
      const newDiv = document.createElement('div');
      newDiv.id = 'mobile';
      newDiv.style.position = 'fixed';
      newDiv.style.marginTop = '20px';
      newDiv.style.top = '0';
      newDiv.style.left = '50%';
      newDiv.style.height = '580px';
      newDiv.style.width = '94%';
      newDiv.style.transform = 'translateX(-50%)';
      newDiv.style.zIndex = '99';
      newDiv.innerHTML = `
      <div class='popup-container2'>
        <div class='mob-pop'>
        <h3 id='name'>${projectsArr[i + 1].projectName}</h3>

         <i id = "close" class="fa-solid fa-xmark close"></i>
          <br>
         </div> <br><br>
          <ul class='skill'>
         <a href="#" class="a"><li class='skills'>${
  projectsArr[i].technology[0]
}</li></a>
          <a href="#" class="a"><li class='skills'>${
  projectsArr[i].technology[1]
}</li></a>
          <a href="#" class="a"><li class='skills'>${
  projectsArr[i].technology[2]
}</li></a>
        </ul>
        <div class="text-img mob-img">
       <img class="Pop-Img" src='${
  projectsArr[i + 1].image
}' alt='mobile-popup' />
        <p class="project-text">${
  projectsArr[i + 1].projectDescription
}</p></div>
     <div class='button-pop'>
                <a href='${projectsArr[i + 1].linkToLive}'>
                  <button class='desk-button'>
                    <span>See Live</span>
                   <i class="fa-sharp fa-light fa-arrow-up-left-from-circle fa-rotate-90 fa-2xs"></i>
                  </button>
                </a>
                <a href='${projectsArr[i + 1].linkToSource}'>
                  <button class='desk-button'>
                    <span>See Source</span>
                    <i class='fa-brands fa-github fa-2xs'></i>
                  </button>
                </a>
              </div>
            </div>  
        </div>`;

      document.body.appendChild(newDiv);
    }
  });
});
function removeNewDiv() {
  const newDiv = document.querySelector('#mobile');
  const parentElement = newDiv.parentNode;
  parentElement.removeChild(newDiv);
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close') {
    removeNewDiv();
  }
});

function removeDeskPop() {
  const deskDiv = document.querySelector('#background-popup');
  const parentElement = deskDiv.parentNode;
  parentElement.removeChild(deskDiv);
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'close') {
    removeDeskPop();
  }
});


window.addEventListener("load", () => {
  // document.getElementById("multiStories").innerHTML = mainProject();
  
  // document.getElementById('grid_contentdesc').innerHTML = showSections().join('');
});