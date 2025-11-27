import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from "../Components/navbar/Navbar";
import Mobilenav from "../Components/navbar/Mobilenav";
import Footer from "../Components/footer/Footer";
import MyProfile from "../Components/myprofile/MyProfile";
import Projects from "../Components/projects/Projects";
import ContactMe from "../Components/contactMe/ContactMe";

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
      <Helmet>
        <title>Yanis Meichtry</title>
        <meta name="description" content="Hello world! I'm Yanis Meichtry, a developer on a mission from Zürich (Switzerland)" />
        <link rel="canonical" href="https://yanis.meichtry.dev/" />

        {/* OpenGraph */}
        <meta property="og:title" content="Yanis Meichtry" />
        <meta property="og:description" content="Hello world! I'm Yanis Meichtry, a developer on a mission from Zürich (Switzerland)" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yanis.meichtry.dev/" />
        <meta property="og:image" content="/img/pfp4.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yanis Meichtry" />
        <meta name="twitter:description" content="Hello world! I'm Yanis Meichtry, a developer on a mission from Zürich (Switzerland)" />
        <meta name="twitter:image" content="/img/pfp4.webp" />

        {/* JSON-LD Person schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yanis Meichtry",
            "url": "https://yanis.meichtry.dev/",
            "image": "https://yanis.meichtry.dev/img/pfp4.webp",
            "sameAs": [
              "https://github.com/ymeichtry"
            ],
            "jobTitle": "Application Developer",
            "description": "Hello world! I'm Yanis Meichtry, a developer on a mission from Zürich (Switzerland)"
          }`}
        </script>
      </Helmet>
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
