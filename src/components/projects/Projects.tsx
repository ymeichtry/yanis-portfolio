import "./Projects.css";

const pimg2 = require("../../images/pimg2.webp");
const pimg4 = require("../../images/pimg4.webp");

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* <h1>Projects</h1> */}
      <h2>Some Things I've Built</h2>

      <div className="project-container right-container">
        <div className="container-img">
          <div className="project-img">
            <div className="img-layer"></div>
            <img src={pimg4} alt="project img" />
          </div>
        </div>

        <div
          className="container-content right-content"
          style={{ marginTop: "25px" }}
        >
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">TeamShifter</h3>
          <div className="Project-desc">
            <p>
              TeamShifter, the ultimate game-changing tool for sports
              enthusiasts and strategists. This repository hosts the codebase
              for our innovative app that redefines sports strategy through
              dynamic player rotations.
            </p>
          </div>
          <ul className="project-tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="project-link">
            <a
              href="https://github.com/ymeichtry/TeamShifter"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://teamshifter.vercel.app/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="project-container left-container">
        <div className="container-content">
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">ZooYO</h3>
          <div className="Project-desc">
            <p>
              ZooYO - The ultimate zoo app! 🐾 Discover the fascinating world of
              animals, plan zoo visits and experience exciting activities. 🦁🌍
            </p>
          </div>
          <ul className="project-tech">
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SpringBoot</li>
          </ul>
          <div className="project-link">
            <a
              href="https://github.com/ymeichtry/ZooYO"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://github.com/ymeichtry"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="container-img">
          <div className="project-img">
            <div className="img-layer"></div>
            <span>
              <img src={pimg2} alt="project img" />
            </span>
          </div>
        </div>
      </div>

      <div className="showmore">
        <a
          href="https://github.com/ymeichtry?tab=repositories"
          target={"_blank"}
          rel="noreferrer"
        >
          <button>Show More</button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
