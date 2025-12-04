import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Projects.css";

const pimg2 = require("../../img/pimg2.webp");
const pimg4 = require("../../img/pimg4.webp");

function Projects() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="projects"
      id="projects"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Some Things I've Built</motion.h2>

      <motion.div
        className="project-container right-container"
        variants={itemVariants}
      >
        <motion.div
          className="container-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-img">
            <div className="img-layer"></div>
            <img src={pimg4} alt="project img" />
          </div>
        </motion.div>

        <div className="container-content right-content">
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
            <motion.a
              href="https://github.com/ymeichtry/TeamShifter"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.a>
            <motion.a
              href="https://teamshifter.app/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="project-container left-container"
        variants={itemVariants}
      >
        <div className="container-content">
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">Glattalturniere-Webpage</h3>
          <div className="Project-desc">
            <p>
              The largest and most prestigious youth ice hockey tournaments in
              Switzerland. Since 1994, the Glattal Tournament has been promoting
              young talent in the U9 and U11 age groups.
            </p>
          </div>
          <ul className="project-tech">
            <li>React.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Supabase</li>
          </ul>
          <div className="project-link">
            <motion.a
              href="https://github.com/ymeichtry/glattal-turnier-next"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.a>
            <motion.a
              href="https://glattalturniere.ch/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.a>
          </div>
        </div>
        <motion.div
          className="container-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-img">
            <div className="img-layer"></div>
            <span>
              <img src={pimg2} alt="project img" />
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="showmore" variants={itemVariants}>
        <a
          href="https://github.com/ymeichtry?tab=repositories"
          target={"_blank"}
          rel="noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Show More
          </motion.button>
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
