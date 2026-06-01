import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Mobilenav from "../Components/navbar/Mobilenav";
import Footer from "../Components/footer/Footer";

function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.remove("res-nav-active");
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isHome ? "hidden" : "";
    document.documentElement.style.overflow = isHome ? "hidden" : "";

    if (isHome) {
      window.scrollTo(0, 0);
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isHome]);

  const nightLightMode = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const navbarClick = () => {
    document.body.classList.toggle("res-nav-active");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
        nightLightMode={nightLightMode}
        Theme={theme}
        navbarClick={navbarClick}
      />
      <Mobilenav
        nightLightMode={nightLightMode}
        Theme={theme}
        navbarClick={navbarClick}
      />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      {!isHome && <Footer />}
    </div>
  );
}

export default SiteLayout;