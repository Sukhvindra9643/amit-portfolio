import React from "react";

function Home() {
  return (
    <>
      <div
        className="d-flex"
        style={{ position: "relative", height: "80vh", width: "98vw" }}
      >
        <div style={{ position: "absolute", left: "20%",bottom:"50px" }}>
          <img
            src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686433677/Main_photo_xlqy4v.png"
            alt="main"
            className="w-100"
          />
        </div>
        <div style={{ position: "absolute", left: "50%", top: "140px" }}>
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
            <span style={{ color: "gray" }} className="fw-bold">
              My name is{" "}
            </span>
            <span
              style={{
                fontFamily: "Hanson",
                fontStyle: "normal",
                fontSize: "18px",
              }}
              className="fw-bold"
            >
              Amit Kumar.
            </span>
            <br></br>
            <span
              style={{
                fontFamily: "IowanOldSt BT",
                fontWeight: 800,
                fontSize: "18px",
                color: "gray",
              }}
              className="fw-bold"
            >
              An Indian Graphic Designer and a Video Editor.<br></br>
              <br></br>I believes when purpose & <br></br>Creativity unites, it
              makes your brand bright.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
