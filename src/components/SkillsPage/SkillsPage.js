import React from "react";
import "./SkillsPage.css";

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

import skillbaradvanced from "../../images/Skills/SkillBar/skill_bar_advanced.png";
import skillbarstrong from "../../images/Skills/SkillBar/skill_bar_strong.png";
import skillbarintermediate from "../../images/Skills/SkillBar/skill_bar_intermediate.png";
import skillbarbeginner from "../../images/Skills/SkillBar/skill_bar_beginner.png";

function SkillBlock({ title, logo, levelimg, leveltext, text }) {
  return (
    <div className="skill-block">
      <h3 className="skill-title">{title}</h3>
      <img src={logo} className="skill-logo"/>
      <hr className="skill-border" /> 
      <div>
        <img src={levelimg} className="skill-levelimg"/>
        <p className="skill-leveltext">{leveltext}</p>
      </div>
      <hr className="skill-border" /> 
      <p className="skill-text">{text}</p>
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
          text="Test Text. this is a small text from the skill container"
        />
        <SkillBlock
          title="CSS"
          logo={logocss}
          levelimg={skillbaradvanced}
          leveltext="advanced"
          text="Test Text. this is a small text from the skill container"
        />
        <SkillBlock
          title="JavaScript"
          logo={logojavascript}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Test Text. this is a small text from the skill container"
        />
        <SkillBlock
          title="TypeScript"
          logo={logotypescript}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Test Text. this is a small text from the skill container"
        />
        <SkillBlock
          title="Java"
          logo={logojava}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Test Text. this is a small text from the skill container"
        />
        <SkillBlock
          title="SQL"
          logo={logosql}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Test Text. this is a small text from the skill container"
        />
      </div>

      <h2>Technologies</h2>
      <div className="skill-container">
      <SkillBlock
          title="Angular"
          logo={logoangular}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Test Text. this is a small text from the skill container"
        />
      <SkillBlock
          title="React"
          logo={logoreact}
          levelimg={skillbaradvanced}
          leveltext="advanced"
          text="Test Text. this is a small text from the skill container"
        />
       <SkillBlock
          title="SpringBoot"
          logo={logospringboot}
          levelimg={skillbarstrong}
          leveltext="strong"
          text="Test Text. this is a small text from the skill container"
        />
       <SkillBlock
          title="BUN"
          logo={logobun}
          levelimg={skillbarbeginner}
          leveltext="beginner"
          text="Test Text. this is a small text from the skill container"
        />
        <SkillBlock
          title="Bootstrap"
          logo={logobootstrap}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Test Text. this is a small text from the skill container"
        />
       <SkillBlock
          title="Tailwind"
          logo={logotailwind}
          levelimg={skillbarintermediate}
          leveltext="intermediate"
          text="Test Text. this is a small text from the skill container"
        />
        </div>
    </div>
  );
}

export default SkillsPage;
