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
    
    <button id=${presentProject.Name} onclick="clickedButton(this.id)" type ="button" class = "works-flex-item see-recent-project" >See project</button>
   </div>
  

  </div>
  `;
  return headLineProject;
}

const showSections = () => {
  const divCard = projectInfo.map((item) => {
    if (item.id === 1) {
      return `<section class="center_content">
    <section class="content_desc">
      <img src=${item.img} alt="" />
      <div class="top_left1">
      <h2>${item.projectName}</h2>
      <p>
       ${item.projectInfo}
      </p>
      <ul>
        <li>
          <a href="#">${item.tech[0]}</a>
        </li>
        <li>
          <a href="#">${item.tech[1]}</a>
        </li>
        <li>
          <a href="#">${item.tech[2]}</a>
        </li>
        </ul>
        <button id=${item.id} onclick="clickedButton(this.id)" type="button">See project</button>
      </div>
    </section>
  </section>`;
    }
    return `<section class="center_content">
  <section class="content_desc">
    <img src=${item.img} alt="" />
    <div class="top_left">
      <h2>${item.projectName}</h2>
      <p>
       ${item.projectInfo}
      </p>
      <ul>
        <li>
          <a href="#">${item.tech[0]}</a>
        </li>
        <li>
          <a href="#">${item.tech[1]}</a>
        </li>
        <li>
          <a href="#">${item.tech[2]}</a>
        </li>
      </ul>
      <button id=${item.id} onclick="clickedButton(this.id)" type="button">See project</button>
    </div>
  </section>
</section>`;
  });

  return divCard;
};



function showPopup() {
  const pop = `<div class="popup">
  <div class="popup_content">
    <div class="titleContent">
      <div class="heading">
        <h2 id="headingSection"></h2>
      </div>
      <img id="closeButton" onclick="closed()" src="icons/close.svg" alt="">
    </div>
    <ul>
      <li>
        <a href="#">CSS</a>
      </li>
      <li>
        <a href="#">HTML</a>
      </li>
      <li>
        <a href="#">BOOTSTRAP</a>
      </li>
      <li>
        <a href="#">RUBY</a>
      </li>
    </ul>
    <div class="desktopView">
      <div id="popup_info">
        <img id="popup-img" src="icons/Snapshoot Portfolio.jpg" alt="Portfolio">
      </div>
      <div class ="all_info">
        <p id="projectDesc"></p>
        <div class="bottom_section">
          <button id="projectSeven" type="button">See project <img src="icons/live_icon.svg" alt="" class="btnIcon"></button>
          <button id="projectSeven" type="button">See project <img src="icons/github_2.svg" class="btnIcon"> </button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return pop;
}
function clickedButton(theId) {
  const savedInfo = theId;
  const titleSelect = document.getElementById('headingSection');
  const paragraphSelect = document.getElementById('projectDesc');
  const popWin = document.querySelector('.popup');

  projectInfo.forEach((e, i) => {
    const project = i;
    if (projectInfo[project].id === Number(savedInfo)) {
      titleSelect.innerHTML = projectInfo[project].projectName;
      paragraphSelect.innerHTML = projectInfo[project].projectInfo;
      popWin.style.visibility = 'visible';
    }
  });

  bannerProjects.forEach((bannerPrj) => {
    if (bannerPrj.Name === savedInfo) {
      titleSelect.innerHTML = bannerPrj.projectTitle;
      paragraphSelect.innerHTML = bannerPrj.projectDescription;
      popWin.style.visibility = 'visible';
    }
  });
}

clickedButton();

// close popup window
function closed() {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
}



window.addEventListener('load', () => {
  document.getElementById('multiStories').innerHTML = mainProject();
  document.getElementById('popWindow').innerHTML = showPopup();
  document.getElementById('grid_contentdesc').innerHTML = showSections().join('');
});
mobileMenu();
closed();