import React from "react";
import './MainPage.css';
import './DownArrow.css';

import mainImg from "../../images/profile_Image.jpeg";

function MainPage() {
  return (
    <div className="main-page">
      <div className="first-section"> 
        <img src={mainImg} alt="main-Img" />
        <div className="content">
          <h1>I'm Yanis Meichtry</h1>
          <h1>A Software Programmer</h1>
          <h1>based in Zürich</h1>

          <p>This is the main page content.</p>
        </div>
      </div>
      <div className="second-section">
        <div class="down-arrow"></div>
      </div>
    </div>
  );
}

export default MainPage;
