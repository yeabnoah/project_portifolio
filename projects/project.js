const Projects = [
  {
    name: "Youtube clone - Hopebridge",
    about:
      "Hopebridge is a clone of youtube i build to showcase my advanced frontend skills using the latest technologies. i have put so much effort on this project and also learn a lot",
    img: "https://i.ibb.co/qsHFpZQ/1st-project.png",
    gitrepo: "https://github.com/yeabnoah/Project_Maya",
    blog: "#",
    tech_stack: "HTML | CSS | JAVASCRIPT | React | Redux | RapidApi | Nodejs",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
      `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
    ],
    project_link: "https://mayya.netlify.app",
    project_type: "Personal Project",
  },
  {
    name: "Nike Clone - UI",
    about:
      "this is project is a showcase of my skills with latest and trending frontend designs.",
    img: "https://i.ibb.co/R6BrS79/Orange-Simple-Talk-About-Nature-You-Tube-Tumbnail.png",
    gitrepo: "https://github.com/yeabnoah/project_Nike",
    blog: "#",
    tech_stack: "HTML | CSS | JAVASCRIPT | React |  Nodejs | Tailwindcss",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/Tailwindcss.png"/>`,
      `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
    ],
    project_link: "https://Nikecloned.netlify.app/",
    project_type: "Personal Project",
  },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about" style="">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ""}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ""}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ""}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ""}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ""}
      </span>
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
