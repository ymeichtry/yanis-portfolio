import React from "react";
const pfp = require("../../images/pfp4.webp");

export const HeroImg = () => {
  return (
    <>
      <div className="img-container">
        {/* <div
		className="img"
		style = {{ backgroundImage: `url(${pfp})`,borderRadius: '30%', backgroundSize: 'cover' , width: '300px', height: '300px'}}
	
	/> */}
        <div className="profile-img img-container">
          <img
            src={pfp}
            alt="pfp"
            style={{
              borderRadius: "30%",
              backgroundSize: "cover",
              width: "300px",
              height: "300px",
            }}
          ></img>
          <div className="img-shade"></div>
        </div>
      </div>
    </>
  );
};
