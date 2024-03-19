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
        <div className="hobbies-tech">
          <div>
            <img src={programmingImg} alt="hobbiesProgrammingImg" />
            <h3>Code</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum auctor luctus. Quisque id risus quis orci scelerisque bibendum. Nulla facilisi. Phasellus in mi justo. Vivamus quis hendrerit urna. Cras ultricies mi eu turpis hendrerit, vitae aliquet est tristique. Nulla facilisi. Nullam nec aliquam est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies diam a sapien facilisis, nec fermentum est vestibulum. Phasellus id odio suscipit, vehicula turpis vitae, eleifend turpis. Mauris non augue ut nunc gravida sollicitudin. Proin convalli</p>
          </div>
          <div>
            <img src={musicImg} alt="hobbiesMusicImg" />
            <h3>Music</h3>
            <p></p>
          </div>
          <div>
            <img src={tradingImg} alt="hobbiesTradingImg" />
            <h3>Trade</h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
