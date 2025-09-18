import React from "react";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import "../contactMe/ContactMe.css";

function ContactMe() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
    <motion.section 
      className="contactme" 
      id="contact"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div className="contactme-title" variants={itemVariants}>
        <h2>Get In Touch</h2>
      </motion.div>
      <motion.div className="contactme-desc" variants={itemVariants}>
        <p>
          I'm always open to connecting and collaborating. If you have any
          questions or just want to say hello, feel free to reach out. Let's
          create something amazing together!
        </p>
      </motion.div>
      <motion.a 
        href="mailto:yanis@meichtry.dev"
        variants={itemVariants}
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.button>
      </motion.a>
    </motion.section>
  );
}

export default ContactMe;
