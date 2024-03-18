import React from "react";
import "./SkillsPage.css";
import "./SkillsPageHover.css";

import logohtml from "../../images/Skills/Languages/logo_html.png";
import logocss from "../../images/Skills/Languages/logo_css.png";
import logojavascript from "../../images//Skills/Languages/logo_javascript.png";
import logotypescript from "../../images/Skills/Languages/logo_typescript.png";
import logojava from "../../images/Skills/Languages/logo_java.png";
import logosql from "../../images/Skills/Languages/logo_sql.png";

import logoangular from "../../images/Skills/Technologies/logo_angular.png";
import logoreact from "../../images/Skills/Technologies/logo_react.png";
import logospringboot from "../../images/Skills/Technologies/logo_springboot.png";
import logobun from "../../images/Skills/Technologies/logo_bun.png";
import logobootstrap from "../../images/Skills/Technologies/logo_bootstrap.png";
import logotailwind from "../../images/Skills/Technologies/logo_tailwind.png";

import logomariadb from "../../images/Skills/Database/logo_mariadb.png";
import logomongodb from "../../images/Skills/Database/logo_mongodb.png";
import logomysql from "../../images/Skills/Database/logo_mysql.png";
import logopostgres from "../../images/Skills/Database/logo_postgres.png";

import skillbaradvanced from "../../images/Skills/SkillBar/skill_bar_advanced.png";
import skillbarstrong from "../../images/Skills/SkillBar/skill_bar_strong.png";
import skillbarintermediate from "../../images/Skills/SkillBar/skill_bar_intermediate.png";
import skillbarbeginner from "../../images/Skills/SkillBar/skill_bar_beginner.png";

function SkillBlock({ title, logo, levelimg, leveltext, text }) {
  return (
    <div className="skill-block">
      <div>
        <h3 className="skill-title">{title}</h3>
        <img src={logo} alt="skillsPageLogoImage" className="skill-logo" />
        <hr className="skill-border" />
        <div>
          <img
            src={levelimg}
            alt="skillsPagelevelImage"
            className="skill-levelimg"
          />
          <p className="skill-leveltext">{leveltext}</p>
        </div>
      </div>
      <div className="skill-text-div">
        <p className="skill-text">{text}</p>
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
      <h2>Languages</h2>
      <div className="skill-container">
        <SkillBlock
          title="HTML"
          logo={logohtml}
          levelimg={skillbaradvanced}
          leveltext="advanced"
          text="Every software developer has heard of Hypertext Markup Language at some point. I use HTML to create the basic structure of my web pages by using tags to define elements such as headings, paragraphs, lists, and links. I use HTML every day in almost every programming project I work on."
        />
        <SkillBlock
          title="CSS"
          logo={logocss}
          levelimg={skillbaradvanced}
          leveltext="advanced"
          text="Cascading Style Sheets is most commonly used to design the look of websites. I use it in almost every project to set things like colors, fonts, spacing, and animations. CSS also helps websites look good on different screen sizes and offers many ways to make them more interactive."
        />
        <SkillBlock
          title="JavaScript"
          logo={logojavascript}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="
          JavaScript ist eine Sprache, die vor allem im Webbrowser verwendet wird. Ich mag JavaScript und habe es schon oft in meinen eigenen Anwendungen genutzt. Besonders mit React, einem beliebten JavaScript-Framework, habe ich viel gearbeitet, um interaktive Benutzeroberflächen zu erstellen."
        />
        <SkillBlock
          title="TypeScript"
          logo={logotypescript}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="TypeScript is a programming language that is based on JavaScript and offers additional functions such as static typing and object-oriented programming. I have been programming with Typescript for a long time on an Angular project."
        />
        <SkillBlock
          title="Java"
          logo={logojava}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Java is a very popular programming language that works on many devices. I have used it a lot for creating apps, websites and other software. Java is known for its simplicity and is often used for larger projects."
        />
        <SkillBlock
          title="SQL"
          logo={logosql}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Structured Query Language is a special programming language that was developed for the management of relational databases. With SQL, I can retrieve, edit and manage data from a database using various operations such as SELECT, InSERT, UPDATE and DELETE. I have had at least one SQL file in every project involving a database."
        />
      </div>

      <h2>Technologies</h2>
      <div className="skill-container">
        <SkillBlock
          title="Angular"
          logo={logoangular}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Angular is an open source framework for the development of web applications that was developed by Google. I worked on a larger project in Angular and also got to know Typescript there. I really liked Angular and learned how to use components for the first time."
        />
        <SkillBlock
          title="React"
          logo={logoreact}
          levelimg={skillbaradvanced}
          leveltext="advanced"
          text="React is a JavaScript library that is used to develop user interfaces, especially for web applications. React is one of my favorite technologies in the programming world. This website is also made with React.js."
        />
        <SkillBlock
          title="SpringBoot"
          logo={logospringboot}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Spring Boot is a free framework for the development of Java applications, especially for web applications and microservices. I have developed backend applications with Spring Boot several times and also used Thymeleaf. This technology has allowed me to easily transfer data between the backend and other parts of the application."
        />
        <SkillBlock
          title="BUN"
          logo={logobun}
          levelimg={skillbarbeginner}
          leveltext="beginner"
          text="Bun is a fast JavaScript toolkit that helps developers to efficiently develop, test, execute and bundle JavaScript and TypeScript projects. I myself use bun.js for the backend in a project in which I use react.js for the frontend."
        />
        <SkillBlock
          title="Bootstrap"
          logo={logobootstrap}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Bootstrap is an open-source fBootstrap is an open-source front-end web design framework that provides pre-built CSS and JavaScript components to simplify the development of responsive and user-friendly websites. I used it sometimes when I was too lazy to write CSS myself, as I did in tailwind."
        />
        <SkillBlock
          title="Tailwind"
          logo={logotailwind}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Tailwind CSS is a CSS framework based on utility classes that allow you to define the appearance of your website directly in the HTML. I tried this like bootstrap when I was too lazy to write the css myself."
        />
      </div>

      <h2>Database</h2>
      <div className="skill-container">
        <SkillBlock
          title="MariaDB"
          logo={logomariadb}
          levelimg={skillbarbeginner}
          leveltext="beginner"
          text="MariaDB is an open source relational database management system that was created as a fork of MySQL. I was often able to learn it at school and also run databases there."
        />
        <SkillBlock
          title="MongoDB"
          logo={logomongodb}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="MongoDB is a document-oriented NoSQL database management system designed to simplify application development and improve scalability. At vocational school, I had a whole module on MongoDB and had to set up a database there several times."
        />
        <SkillBlock
          title="MySQL"
          logo={logomysql}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="MySQL is a relational database management system based on a client-server architecture. I was able to work with MySQL myself at school and set up and run databases with phpMyAdmin."
        />
        <SkillBlock
          title="Postgres"
          logo={logopostgres}
          levelimg={skillbarbeginner}
          leveltext="beginner"
          text="PostgreSQL, often referred to simply as Postgres, is an advanced open source object-relational database management system. During my work I had several projects that were opened with a database in Postgres."
        />
      </div>
    </div>
  );
}

export default SkillsPage;
