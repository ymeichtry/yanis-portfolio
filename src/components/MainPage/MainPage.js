import React, { useEffect } from "react";
import "./MainPage.css";
import "./DownArrow.css";

import mainImg from "../../images/profile_Image.jpeg";

import programmingImg from "../../images/Hobbies/image_programming.png";
import musicImg from "../../images/Hobbies/image_music.png";
import tradingImg from "../../images/Hobbies/image_trading.png";

function MainPage() {
  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.querySelector(".second-section");
      if (secondSection) {
        const topOffset = secondSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topOffset < windowHeight) {
          secondSection.classList.add("visible");
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className="scroll-down-div">
        <div class="scroll-down"></div>
        <p>scoll Down</p>
      </div>
      <div className="second-section">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            👨‍💻 Young programmer in training, mastering coding while doing my
            Maturité studies in Zurich. I've got a thing for crafting web
            designs.
          </p>
        </div>
        <div className="my-hobbies">
          <h2>My Interests</h2>
          <div className="hobbies-tech">
            <div>
              <img src={programmingImg} alt="hobbiesProgrammingImg" />
              <h3>Code</h3>
              <p>
                🚀 As an aspiring application developer, programming is my daily
                companion. I have been fascinated by this world since my first
                code experiments.
              </p>
              <p>
                💻 I love to use my skills in projects, whether professionally,
                at school or privately. You can find out more about my previous
                projects on my{" "}
                <a href="/projects" style={{ color: "#14b5d1" }}>
                  projects
                </a>{" "}
                page. The variety of languages and technologies inspires me.
                Discover more on my{" "}
                <a href="/skills" style={{ color: "#14b5d1" }}>
                  skills
                </a>{" "}
                page.
              </p>
              <p>
                🌟 Programming is an endless journey of learning and discovery.
                I always strive for further development and innovation. This
                passion accompanies me on my journey.
              </p>
            </div>
            <div>
              <img src={musicImg} alt="hobbiesMusicImg" />
              <h3>Music</h3>
              <p>
                🎵 In addition to my interest in technology, music is an
                essential part of my life.
              </p>
              <p>
                🎧 In my spare time, I enjoy listening to music and producing my
                own tracks. Although I am too shy to sing, I am passionate about
                music production. In particular, I enjoy exploring the world of
                house music as it allows me to unleash my creativity without
                singing. Producing electronic beats and melodies is a fulfilling
                creative activity for me that I enjoy very much.
              </p>
              <p>
                🎼 Music is not just a hobby for me, but also a source of
                inspiration and relaxation. It offers me a welcome change from
                programming and allows me to express myself artistically.
              </p>
            </div>
            <div>
              <img src={tradingImg} alt="hobbiesTradingImg" />
              <h3>Trade</h3>
              <p>
                📈 In addition to my passion for technology and music, I am also
                deeply interested in finance and trading.
              </p>
              <p>
                💹 I enjoy exploring the world of financial markets and have
                even dabbled in cryptocurrency trading myself. The thrill of
                trading and the adrenaline rush it provides are incredibly
                exciting for me.
              </p>
              <p>
                💰 Trading not only offers the potential for financial gain but
                also allows me to engage with dynamic and ever-changing markets.
                It's a stimulating activity that keeps me on my toes and
                continually learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
