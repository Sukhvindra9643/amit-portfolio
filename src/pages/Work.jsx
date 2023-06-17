import React from "react";
import "./Work.css";
function Work() {
  return (
    <div style={{ marginTop: "5%" }}>
      <div className="work-container">
        <div className="work-content">
          <div style={{ width: "100%" }}>
            <img
              src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435808/logos_icon_1_c6x7fe.png"
              alt="logo"
              className="w-100"
            />
          </div>
          <div>
            <p className="work-text">
              YOUR LOGO WILL HAVE A HUGE IMPACT<br></br> ON THE FIRST IMPRESSION
              YOUR <br></br>BUSINESS IS GOING TO MAKE: IT WILL<br></br> GIVE
              YOUR CUSTOMERS INFORMATION <br></br>ABOUT YOUR BRAND AND LET THEM
              <br></br> KNOW IF IT'S RIGHT FOR THEM.
            </p>
          </div>
        </div>
        <div className="work-images">
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435807/photo_2023-05-03_21-40-14_1_ecihxa.png"
              alt="cake-wake logo"
              className="work-img"
            />
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435807/photo_2023-05-03_21-32-35_1_wukjgx.png"
              alt="privacy logo"
              className="work-img"
            />
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435843/CODE_DAZZLERS_JPEG_1_y3s7zq.png"
              alt="code-dazzar logo"
              className="work-img"
            />
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435807/g44g4g_1_oxnawy.png"
              alt="antique design logo"
              className="work-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
