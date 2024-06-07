import React from "react";
import "../contactMe/ContactMe.css";

function ContactMe() {
  return (
    <section className="contactme" id="contact">
      <div className="contactme-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contactme-desc">
        <p>
          I'm always open to connecting and collaborating. If you have any
          questions or just want to say hello, feel free to reach out. Let's
          create something amazing together!
        </p>
      </div>
      <a href="mailto:yanis@meichtry.dev">
        <button>Say Hello</button>
      </a>
    </section>
  );
}

export default ContactMe;
