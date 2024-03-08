import React from 'react';
import './SkillsPage.css';

import logohtml from '../../images/Skills/ProgrammLanguages/logo_html.png';
import logocss from '../../images/Skills/ProgrammLanguages/logo_css.png';
import logojavascript from '../../images//Skills/ProgrammLanguages/logo_javascript.png';
import logotypescript from '../../images/Skills/ProgrammLanguages/logo_typescript.png';
import logojava from '../../images/Skills/ProgrammLanguages/logo_java.png';
import logosql from '../../images/Skills/ProgrammLanguages/logo_sql.png';

import logoangular from '../../images/Skills/Technologies/logo_angular.png';
import logoreact from '../../images/Skills/Technologies/logo_react.png';
import lgogspringboot from '../../images/Skills/Technologies/logo_springboot.png';
import logobun from '../../images/Skills/Technologies/logo_bun.png';
import logobootstrap from '../../images/Skills/Technologies/logo_bootstrap.png';
import logotailwind from '../../images/Skills/Technologies/logo_tailwind.png';

function SkillsPage() {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
        <h2>Programm Languages</h2>
            <img src={logohtml} alt="html" />
            <img src={logocss} alt="css" />
            <img src={logojavascript} alt="javascript" />
            <img src={logotypescript} alt="typescript" />
            <img src={logojava} alt="java" />
            <img src={logosql} alt="sql" />

        <h2>Tools</h2>
            <img src={logoangular} alt="angular" />
            <img src={logoreact} alt="react" />
            <img src={lgogspringboot} alt="springboot" />
            <img src={logobun} alt="bun" />
            <img src={logobootstrap} alt="bootstrap" />
            <img src={logotailwind} alt="tailwind" />
    </div>
  );
}

export default SkillsPage;