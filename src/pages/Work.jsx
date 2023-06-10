import React from 'react'

function Work() {
  return (
    <div style={{marginTop:"5%"}}>
     <div style={{display:"flex",width:"100%",padding:"0 15%"}}>
        <div style={{padding:"0 100px",display:"flex",gap:"30px",flexDirection:"column",width:"50%"}}>
          <div style={{ width: "100%" }}>
            <img
              src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435808/logos_icon_1_c6x7fe.png"
              alt="logo"
              className="w-100"
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "IowanOldSt BT",
                fontSize: "14px",
                color: "gray",
              }}
              className="fw-semibold"
            >
              YOUR LOGO WILL HAVE A HUGE IMPACT<br></br> ON THE FIRST IMPRESSION
              YOUR <br></br>BUSINESS IS GOING TO MAKE: IT WILL<br></br> GIVE
              YOUR CUSTOMERS INFORMATION <br></br>ABOUT YOUR BRAND AND LET THEM
              <br></br> KNOW IF IT'S RIGHT FOR THEM.
            </p>
          </div>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",width:"50%",gap:"50px"}}>
          <img src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435807/photo_2023-05-03_21-40-14_1_ecihxa.png" alt="cake-wake logo"/>
          <img src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435807/photo_2023-05-03_21-32-35_1_wukjgx.png" alt="privacy logo"/>
          <img src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435843/CODE_DAZZLERS_JPEG_1_y3s7zq.png" alt="code-dazzar logo"/>
          <img src="https://res.cloudinary.com/dk0o7tdks/image/upload/v1686435807/g44g4g_1_oxnawy.png" alt="antique design logo"/>
        </div>
      </div>
    </div>
  )
}

export default Work
