import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar/Navbar";
import Mobilenav from "../components/navbar/Mobilenav";
import Footer from "../components/footer/Footer";
import MyProfile from "../components/myprofile/MyProfile";
import Projects from "../components/projects/Projects";
import ContactMe from "../components/contactMe/ContactMe";

function Homepage() {
  
  const [themeChange, setThemeChange] = useState(false);
  const [Theme, setTheme] = useState("dark");

  const nightLightMode = () => {
    setThemeChange(true);

    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    const mobilesun = document.querySelector("#mobilesun");
    const mobilemoon = document.querySelector("#mobilemoon");

    if (Theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (Theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    
    moon?.classList.toggle("block");
    sun?.classList.toggle("none");
    mobilemoon?.classList.toggle("block");
    mobilesun?.classList.toggle("none");
  };

  useEffect(() => {
    setThemeChange(false);
    setTheme(localStorage.getItem("theme") || "dark"); 
    if (Theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    if (Theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [Theme, themeChange]);

  const navbarClick = () => {
    document.body.classList.toggle("res-nav-active");

    const navopen = document.querySelector("#navopen");
    const navclose = document.querySelector("#navclose");

    navopen?.classList.toggle("none");
    navclose?.classList.toggle("none");
  };
  
  return (
    <div>
      <Navbar
        nightLightMode={nightLightMode}
        Theme={Theme}
        navbarClick={navbarClick}
      />
      <Mobilenav
        nightLightMode={nightLightMode}
        Theme={Theme}
        navbarClick={navbarClick}
      />
      <MyProfile />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Homepage;
