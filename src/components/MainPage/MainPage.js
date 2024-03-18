import React from "react";
import "./MainPage.css";
import "./DownArrow.css";

import mainImg from "../../images/profile_Image.jpeg";

import programmingImg from "../../images/Hobbies/image_programming.png";
import musicImg from "../../images/Hobbies/image_music.png";
import tradingImg from "../../images/Hobbies/image_trading.png";

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
      <div class="about-me">
        <h2>About Me</h2>
        <p>
          👨‍💻 Young programmer in training, mastering coding while doing my
          Maturité studies in Zurich. I've got a thing for crafting web designs.
        </p>
      </div>
      <div class="my-hobbies">
        <h2>My Interessts</h2>
        <img src={programmingImg} alt="hobbiesProgrammingImg"/>
        <img src={musicImg} alt="hobbiesMusicImg"/>
        <img src={tradingImg} alt="hobbiesTradingImg"/>
      </div>
    </div>
  );
}

export default MainPage;
