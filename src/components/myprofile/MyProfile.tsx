import { motion, Variants } from 'framer-motion';
import "./Profile.css";
const { HeroImg } = require("./HeroImg");

function MyProfile() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="profile" 
      id="profile"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="profile-text" variants={itemVariants}>
        <motion.p variants={itemVariants}>Hi, my name is</motion.p>

        <motion.h1 variants={itemVariants}>Yanis Meichtry</motion.h1>
        
        <motion.p 
          className="profile-text-about"
          variants={itemVariants}
        >
          💻 Hello world! I'm Yanis Meichtry, a developer on a mission from Zürich (Switzerland)
        </motion.p>
        
        <motion.div 
          className="profile-social-links"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/ymeichtry"
            target="_blank"
            rel="noopener noreferrer me"
            title="Github"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yanis-meichtry-4583b6273/"
            target="_blank"
            rel="noopener noreferrer me"
            title="Linkedin"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </motion.a>
          <motion.a
            href="https://x.com/ymeichtryCH"
            target="_blank"
            rel="noopener noreferrer me"
            title="twitter"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 14 14"
            >
              <g fill="none">
                <g clipPath="url(#primeTwitter0)">
                  <path
                    fill="currentColor"
                    d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                  />
                </g>
                <defs>
                  <clipPath id="primeTwitter0">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroImg />
      </motion.div>
    </motion.div>
  );
}

export default MyProfile;
