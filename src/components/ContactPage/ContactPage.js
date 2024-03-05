import React from 'react';
import './ContactPage.css';

import logoFacebook from '../../images/logo_facebook.png';
import logoGithub from '../../images/logo_github.png';
import logoInstagramm from '../../images/logo_instagram.jpeg';
import logoLinkedin from '../../images/logo_linkedin.png';

function ContactPage() {
  return (
    <div className="contact-container">

      <div className="left-column">
        <h2>Get in touch with me</h2>
        <div className="social-media">
          <a href="https://www.instagram.com/y.meichtry/" target="_blank" rel="noopener noreferrer">
            <img src={logoInstagramm} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553784510039" target="_blank" rel="noopener noreferrer">
            <img src={logoFacebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/yanis-meichtry-4583b6273/" target="_blank" rel="noopener noreferrer">
            <img src={logoLinkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/ymeichtry" target="_blank" rel="noopener noreferrer">
            <img src={logoGithub} alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="right-column">
        <h2>Contact me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default ContactPage;