import React from "react";
import Work from "../pages/Work";
import "../App.css"
function Home() {
  return (
    <>
    <div className="hero-top">

      <div
        className="hero"
      >
        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686433677/Main_photo_xlqy4v.png"
            alt="main"
            className="w-100"
          />
        </div>
        <div className="hero-content">
          <p>
            <span
              style={{
                fontFamily: "IowanOldSt BT",
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: "18px",
                color: "gray",
              }}
              className="fw-bold"
            >
              Hello !!
            </span>{" "}
            <span style={{ color: "gray" }} className="hero-content-name">
              My name is{" "}
            </span>
            <span
              style={{
                
              }}
              className="hero-content-name"
            >
              Amit Kumar.
            </span>
            <br></br>
            <span className="hero-content-para">
              An Indian Graphic Designer and a Video Editor.<br></br>
              <br></br>I believes when purpose & <br></br>Creativity unites, it
              makes your brand bright.
            </span>
          </p>
        </div>
      </div>
    </div>

      {/* <div className="mb-5">
        <Work />
      </div> */}
    </>
  );
}

export default Home;
