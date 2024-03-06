import React from 'react';
import './Footer.css';

import iconPhone from '../../images/icon_phone.png';
import iconMail from '../../images/icon_mail.png';
import logoFacebook from '../../images/logo_facebook.png';
import logoGithub from '../../images/logo_github.png';
import logoInstagramm from '../../images/logo_instagram.jpeg';
import logoLinkedin from '../../images/logo_linkedin.png';

function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <div className="contact-item">
          <img src={iconPhone} alt="Phone"/>
          <span>+41 77 527 04 79</span>
        </div>
        <div className="contact-item">
          <img src={iconMail} alt="Mail"/>
          <span>y.meichtry@gmx.ch</span>
        </div>
        <div className="footer-social-media">
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
      <hr /> 
      <p>© 2024 Yanis Meichtry. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;
