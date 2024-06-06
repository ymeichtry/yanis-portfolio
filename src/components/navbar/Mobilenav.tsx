import React from "react";

interface MobilenavProps {
  nightLightMode: () => void;
  Theme: string;
  navbarClick: () => void;
}
const Mobilenav: React.FC<MobilenavProps> = ({
    nightLightMode,
    navbarClick,
    Theme
  }) => {
  return (
    <div className="mobile-navbar">
      <div className="res-nav-overlay" onClick={navbarClick}></div>
      <div className="res-nav">
      <div className="res-nav-links">
        <ul>
          <li>
            <a href="#profile">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
          <button className="mobile-light-mode" id="nightlightmode" onClick={nightLightMode}>
            <svg
              id="mobilemoon"
              className="none"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke={`${Theme === "dark" ? '#ffffff' : '#000000'} `}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            <svg
              id="mobilesun"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke={`${Theme === "dark" ? '#ffffff' : '#000000'} `}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Mobilenav;
