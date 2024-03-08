import React from 'react';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of Project 2.</p>
      </div>
    </div>
  );
}

export default ProjectsPage;